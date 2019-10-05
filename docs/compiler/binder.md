# 绑定器

大多数的 JavaScript 转译器（transpiler）都比 TypeScript 简单，因为它们几乎没提供代码分析的方法。典型的 JavaScript 转换器只有以下流程：

```
源码 ~~扫描器~~> Tokens ~~解析器~~> AST ~~发射器~~> JavaScript
```

上述架构确实对于简化 TypeScript 生成 JavaScript 的理解有帮助，但缺失了一个关键功能，即 TypeScript 的*语义*系统。为了协助（检查器执行）类型检查，绑定器将源码的各部分连接成一个相关的类型系统，供检查器使用。绑定器的主要职责是创建*符号*（Symbols）。

### 符号

符号将 AST 中的声明节点与其它声明连接到相同的实体上。符号是语义系统的基本构造块。符号的构造器定义在 `core.ts`（绑定器实际上通过 `objectAllocator.getSymbolConstructor` 来获取构造器）。下面是符号构造器：

```ts
function Symbol(flags: SymbolFlags, name: string) {
  this.flags = flags;
  this.name = name;
  this.declarations = undefined;
}
```

`SymbolFlags` 符号标志是个标志枚举，用于识别额外的符号类别（例如：变量作用域标志 `FunctionScopedVariable` 或 `BlockScopedVariable` 等）

### 检查器对绑定器的使用

实际上，绑定器被检查器在内部调用，而检查器又被程序调用。简化的调用栈如下所示：

```
program.getTypeChecker ->
    ts.createTypeChecker（检查器中）->
        initializeTypeChecker（检查器中） ->
            for each SourceFile `ts.bindSourceFile`（绑定器中）
            // followed by
            for each SourceFile `ts.mergeSymbolTable`（检查器中）
```

SourceFile 是绑定器的工作单元，`binder.ts` 由 `checker.ts` 驱动。

## 绑定器函数

`bindSourceFile` 和 `mergeSymbolTable` 是两个关键的绑定器函数，我们来看下：

### `bindSourceFile`

该函数主要是检查 `file.locals` 是否定义，如果没有则交给（本地函数） `bind` 来处理。

注意：`locals` 定义在节点上，其类型为 `SymbolTable`。`SourceFile` 也是一个节点（事实上是 AST 中的根节点）。

提示：TypeScript 编译器大量使用本地函数。本地函数很可能使用来自父函数的变量（通过闭包捕获）。例如 `bind` 是 `bindSourceFile` 中的一个本地函数，它或它调用的函数会设置 `symbolCount` 和 `classifiableNames` 等状态，然后将其存在返回的 `SourceFile` 中

### `bind`

bind 能处理任一节点（不只是 `SourceFile`），它做的第一件事是分配 `node.parent`（如果 `parent` 变量已设置，绑定器在 `bindChildren` 函数的处理中仍会再次设置）， 然后交给 `bindWorker` 做很多*重*活。最后调用 `bindChildren`（该函数简单地将绑定器的状态（如：`parent`）存入函数本地变量中，接着在每个子节点上调用 `bind`，然后再将状态转存回绑定器中）。现在我们看下 `bindWorker`，一个更有趣的函数。

### `bindWorker`

该函数依据 `node.kind`（`SyntaxKind`类型）进行切换，并将工作委托给合适的 `bindXXX` 函数（也定义在`binder.ts`中）。例如：如果该节点是 `SourceFile` 则（最终且仅当节点是外部文件模块时）调用 `bindAnonymousDeclaration`

### `bindXXX` 函数

`bindXXX` 系函数有一些通用的模式和工具函数。其中最常用的一个是 `createSymbol` 函数，全部代码展示如下：

```ts
function createSymbol(flags: SymbolFlags, name: string): Symbol {
  symbolCount++;
  return new Symbol(flags, name);
}
```

如您所见，它简单地更新 `symbolCount`（一个 `bindSourceFile` 的本地变量），并使用指定的参数创建符号。

## 绑定器声明

### 符号与声明

节点和符号间的链接由几个函数执行。其中一个用于绑定 `SourceFile` 节点到源文件符号（外部模块的情况下）的函数是 `addDeclarationToSymbol`

注意：外部模块源文件的符号设置方式是 `flags : SymbolFlags.ValueModule` 和 `name: '"' + removeFileExtension(file.fileName) + '"'`.

```ts
function addDeclarationToSymbol(symbol: Symbol, node: Declaration, symbolFlags: SymbolFlags) {
  symbol.flags |= symbolFlags;

  // 创建 AST 节点到 symbol 的连接
  node.symbol = symbol;

  if (!symbol.declarations) {
    symbol.declarations = [];
  }
  // 将该节点添加为该符号的一个声明
  symbol.declarations.push(node);

  if (symbolFlags & SymbolFlags.HasExports && !symbol.exports) {
    symbol.exports = {};
  }

  if (symbolFlags & SymbolFlags.HasMembers && !symbol.members) {
    symbol.members = {};
  }

  if (symbolFlags & SymbolFlags.Value && !symbol.valueDeclaration) {
    symbol.valueDeclaration = node;
  }
}
```

上述代码主要执行的操作如下：

- 创建一个从 AST 节点到符号的链接（`node.symbol`）
- 将节点添加为该符号的*一个*声明

### 声明

声明就是一个有可选的名字的节点。下面是 `types.ts` 中的定义：

```ts
interface Declaration extends Node {
  _declarationBrand: any;
  name?: DeclarationName;
}
```

## 绑定器容器

AST 的节点可以被当作容器。这决定了节点及相关符号的 `SymbolTables` 的类别。容器是个抽象概念（没有相关的数据结构）。该概念由一些东西决定，`ContainerFlags` 枚举是其中之一。函数 `getContainerFlags`（位于 `binder.ts`） 驱动此标志，如下所示：

```ts
function getContainerFlags(node: Node): ContainerFlags {
  switch (node.kind) {
    case SyntaxKind.ClassExpression:
    case SyntaxKind.ClassDeclaration:
    case SyntaxKind.InterfaceDeclaration:
    case SyntaxKind.EnumDeclaration:
    case SyntaxKind.TypeLiteral:
    case SyntaxKind.ObjectLiteralExpression:
      return ContainerFlags.IsContainer;

    case SyntaxKind.CallSignature:
    case SyntaxKind.ConstructSignature:
    case SyntaxKind.IndexSignature:
    case SyntaxKind.MethodDeclaration:
    case SyntaxKind.MethodSignature:
    case SyntaxKind.FunctionDeclaration:
    case SyntaxKind.Constructor:
    case SyntaxKind.GetAccessor:
    case SyntaxKind.SetAccessor:
    case SyntaxKind.FunctionType:
    case SyntaxKind.ConstructorType:
    case SyntaxKind.FunctionExpression:
    case SyntaxKind.ArrowFunction:
    case SyntaxKind.ModuleDeclaration:
    case SyntaxKind.SourceFile:
    case SyntaxKind.TypeAliasDeclaration:
      return ContainerFlags.IsContainerWithLocals;

    case SyntaxKind.CatchClause:
    case SyntaxKind.ForStatement:
    case SyntaxKind.ForInStatement:
    case SyntaxKind.ForOfStatement:
    case SyntaxKind.CaseBlock:
      return ContainerFlags.IsBlockScopedContainer;

    case SyntaxKind.Block:
      // 不要将函数内部的块直接当做块作用域的容器。
      // 本块中的本地变量应当置于函数中，否则下例中的 'x' 不会重新声明为一个块作用域的本地变量：
      //
      //     function foo() {
      //         var x;
      //         let x;
      //     }
      //
      // 如果将 'var x' 留在函数中，而将 'let x' 放到本块中（函数外），就不会有冲突了。
      //
      // 如果不在这里创建一个新的块作用域容器，'var x' 和 'let x' 都会进入函数容器本地中，这样就会有碰撞冲突。
      return isFunctionLike(node.parent) ? ContainerFlags.None : ContainerFlags.IsBlockScopedContainer;
  }

  return ContainerFlags.None;
}
```

该函数*只*在绑定器函数 `bindChildren` 中调用，会根据 `getContainerFlags` 的运行结果将节点设为 `container` 和（或） `blockScopedContainer`。函数 `bindChildren` 如下所示：

```ts
// 所有容器节点都以声明顺序保存在一个链表中。
// 类型检查器中的 getLocalNameOfContainer 函数会使用该链表对容器使用的本地名称的唯一性做验证。
function bindChildren(node: Node) {
  // 在递归到子节点之前，我们先要保存父节点，容器和块容器。处理完弹出的子节点后，再将这些值存回原处。
  let saveParent = parent;
  let saveContainer = container;
  let savedBlockScopeContainer = blockScopeContainer;

  // 现在要将这个节点设为父节点，我们要递归它的子节点。
  parent = node;

  // 根据节点的类型，需要对当前容器或块容器进行调整。 如果当前节点是个容器，则自动将其视为当前的块容器。
  // 由于我们知道容器可能包含本地变量，因此提前初始化 .locals 字段。
  // 这样做是因为很可能需要将一些子（节点）置入 .locals 中（例如：函数参数或变量声明）。
  //
  // 但是，我们不会主动为块容器创建 .locals，因为通常块容器中不会有块作用域变量。
  // 我们不想为遇到的每个块都分配一个对象，大多数情况没有必要。
  //
  // 最后，如果是个块容器，我们就清理该容器中可能存在的 .locals 对象。这种情况常在增量编译场景中发生。
  // 由于我们可以重用上次编译的节点，而该节点可能已经创建了 locals 对象。
  // 因此必须清理，以免意外地从上次的编译中移动了过时的数据。
  let containerFlags = getContainerFlags(node);
  if (containerFlags & ContainerFlags.IsContainer) {
    container = blockScopeContainer = node;

    if (containerFlags & ContainerFlags.HasLocals) {
      container.locals = {};
    }

    addToContainerChain(container);
  } else if (containerFlags & ContainerFlags.IsBlockScopedContainer) {
    blockScopeContainer = node;
    blockScopeContainer.locals = undefined;
  }

  forEachChild(node, bind);

  container = saveContainer;
  parent = saveParent;
  blockScopeContainer = savedBlockScopeContainer;
}
```

您可能还记得绑定器函数中的这部分：`bindChildren` 由 `bind` 函数调用。我们得到这样的递归绑定：`bind` 调用 `bindChildren`，而 `bindChildren` 又为其每个子节点调用 `bind`

## 绑定器符号表

符号表（SymbolTable）是以一个简单的 HashMap 实现的，下面是其接口（`types.ts`）：

```ts
interface SymbolTable {
  [index: string]: Symbol;
}
```

符号表通过绑定进行初始化，这里是编译器使用的一些符号表：

节点上：

```ts
locals?: SymbolTable;                   // 节点相关的本地变量
```

符号上：

```ts
members?: SymbolTable;                  // 类，接口或字面量实例成员
exports?: SymbolTable;                  // 模块导出
```

请注意：`bindChildren` 基于 `ContainerFlags` 初始化 `locals`（为 `{}`）

### 符号表填充

符号表使用符号来填充，主要是通过调用 `declareSymbol` 来进行，如下所示的是该函数的全部代码：

```ts
/**
 * 为指定的节点声明一个符号并加入 symbols。标识名冲突时报告错误。
 * @param symbolTable - 要将节点加入进的符号表
 * @param parent - 指定节点的父节点的声明
 * @param node - 要添加到符号表的（节点）声明
 * @param includes - SymbolFlags，指定节点额外的声明类型（例如：export, ambient 等）
 * @param excludes - 不能在符号表中声明的标志，用于报告禁止的声明
 */
function declareSymbol(
  symbolTable: SymbolTable,
  parent: Symbol,
  node: Declaration,
  includes: SymbolFlags,
  excludes: SymbolFlags
): Symbol {
  Debug.assert(!hasDynamicName(node));

  // 默认导出的函数节点或类节点的符号总是"default"
  let name = node.flags & NodeFlags.Default && parent ? 'default' : getDeclarationName(node);

  let symbol: Symbol;
  if (name !== undefined) {
    // 检查符号表中是否已有同名的符号。若没有，创建此名称的新符号并加入表中。
    // 注意，我们尚未给新符号指定任何标志。这可以确保不会和传入的 excludes 标志起冲突。
    //
    // 如果已存在的一个符号，查看是否与要创建的新符号冲突。
    // 例如：同一符号表中，'var' 符号和 'class' 符号会冲突。
    // 如果有冲突，报告该问题给该符号的每个声明，然后为该声明创建一个新符号
    //
    // 如果我们创建的新符号既没在符号表中重名也没和现有符号冲突，就将该节点添加为新符号的唯一声明。
    //
    // 否则，就要（将新符号）合并进兼容的现有符号中（例如同一容器中有多个同名的 'var' 时）。这种情况下要把该节点添加到符号的声明列表中。
    symbol = hasProperty(symbolTable, name)
      ? symbolTable[name]
      : (symbolTable[name] = createSymbol(SymbolFlags.None, name));

    if (name && includes & SymbolFlags.Classifiable) {
      classifiableNames[name] = name;
    }

    if (symbol.flags & excludes) {
      if (node.name) {
        node.name.parent = node;
      }

      // 报告每个重复声明的错误位置
      // 报告之前遇到的声明错误
      let message =
        symbol.flags & SymbolFlags.BlockScopedVariable
          ? Diagnostics.Cannot_redeclare_block_scoped_variable_0
          : Diagnostics.Duplicate_identifier_0;
      forEach(symbol.declarations, declaration => {
        file.bindDiagnostics.push(
          createDiagnosticForNode(declaration.name || declaration, message, getDisplayName(declaration))
        );
      });
      file.bindDiagnostics.push(createDiagnosticForNode(node.name || node, message, getDisplayName(node)));

      symbol = createSymbol(SymbolFlags.None, name);
    }
  } else {
    symbol = createSymbol(SymbolFlags.None, '__missing');
  }

  addDeclarationToSymbol(symbol, node, includes);
  symbol.parent = parent;

  return symbol;
}
```

填充哪个符号表，由此函数的第一个参数决定。例如：添加声明到类型为 `SyntaxKind.ClassDeclaration` 或 `SyntaxKind.ClassExpression` 的*容器*时，将会调用下面的函数 `declareClassMember`:

```ts
function declareClassMember(node: Declaration, symbolFlags: SymbolFlags, symbolExcludes: SymbolFlags) {
  return node.flags & NodeFlags.Static
    ? declareSymbol(container.symbol.exports, container.symbol, node, symbolFlags, symbolExcludes)
    : declareSymbol(container.symbol.members, container.symbol, node, symbolFlags, symbolExcludes);
}
```

## 绑定器错误报告

绑定错误被添加到源文件的 `bindDiagnostics` 列表中

一个绑定时错误检测的例子是在严格模式下使用 `eval` 或 `arguments` 作为变量名。下面展示了相关的全部代码（多个位置都会调用`checkStrictModeEvalOrArguments`，调用栈发自 `bindWorker`，该函数对不同节点的 `SyntaxKind` 调用不同的检查函数）：

```ts
function checkStrictModeEvalOrArguments(contextNode: Node, name: Node) {
  if (name && name.kind === SyntaxKind.Identifier) {
    let identifier = <Identifier>name;
    if (isEvalOrArgumentsIdentifier(identifier)) {
      // 首先检查名字是否在类声明或者类表达式中，如果是则给出明确消息，否则报告一般性错误
      let span = getErrorSpanForNode(file, name);
      file.bindDiagnostics.push(
        createFileDiagnostic(
          file,
          span.start,
          span.length,
          getStrictModeEvalOrArgumentsMessage(contextNode),
          identifier.text
        )
      );
    }
  }
}

function isEvalOrArgumentsIdentifier(node: Node): boolean {
  return (
    node.kind === SyntaxKind.Identifier &&
    ((<Identifier>node).text === 'eval' || (<Identifier>node).text === 'arguments')
  );
}

function getStrictModeEvalOrArgumentsMessage(node: Node) {
  // 向用户提供特定消息，有助他们理解为何会处于严格模式。
  if (getContainingClass(node)) {
    return Diagnostics.Invalid_use_of_0_Class_definitions_are_automatically_in_strict_mode;
  }

  if (file.externalModuleIndicator) {
    return Diagnostics.Invalid_use_of_0_Modules_are_automatically_in_strict_mode;
  }

  return Diagnostics.Invalid_use_of_0_in_strict_mode;
}
```
