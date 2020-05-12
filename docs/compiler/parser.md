# 解析器

TypeScript 解析器代码均位于 `parser.ts` 中。在内部，由解析器控制扫描器将源码转化为 AST。其期望结果如下：

```
源码 ~~ 扫描器 ~~> Token 流 ~~ 解析器 ~~> AST
```

解析器实现原理是单例模式（其原因类似扫描器，如果能重新初始化就不重新构建）。实际实现成 `namespace Parser`，包含解析器的各种*状态*变量和单例扫描器（`const scanner`）。该扫描器由解析器函数管理。

### 程序对解析器的使用

解析器由程序间接驱动（通过之前提到过的 `CompilerHost`）。基本上，简化的调用栈如下所示：

```
程序 ->
    CompilerHost.getSourceFile ->
        (全局函数 parser.ts).createSourceFile ->
            Parser.parseSourceFile
```

`parseSourceFile` 不仅准备好解析器的状态，还调用 `initializeState` 准备好扫描器的状态。然后使用 `parseSourceFileWorker` 继续解析源代码。

### 使用示例

深入解析器的内部之前，这里有个使用 TypeScript 解析器的示例，（使用 `ts.createSourceFile`）获取一个源文件的 AST 并打印它。

`code/compiler/parser/runParser.ts`

```ts
import * as ts from 'ntypescript';

function printAllChildren(node: ts.Node, depth = 0) {
  console.log(new Array(depth + 1).join('----'), ts.formatSyntaxKind(node.kind), node.pos, node.end);
  depth++;
  node.getChildren().forEach(c => printAllChildren(c, depth));
}

var sourceCode = `
var foo = 123;
`.trim();

var sourceFile = ts.createSourceFile('foo.ts', sourceCode, ts.ScriptTarget.ES5, true);
printAllChildren(sourceFile);
```

该段代码会打印以下内容：

```ts
SourceFile 0 14
---- SyntaxList 0 14
-------- VariableStatement 0 14
------------ VariableDeclarationList 0 13
---------------- VarKeyword 0 3
---------------- SyntaxList 3 13
-------------------- VariableDeclaration 3 13
------------------------ Identifier 3 7
------------------------ FirstAssignment 7 9
------------------------ FirstLiteralToken 9 13
------------ SemicolonToken 13 14
---- EndOfFileToken 14 14
```

如果把头向左倾，这个看起来像棵（右侧）树

## 解析器函数

如前所述，`parseSourceFile` 设置初始状态并将工作交给 `parseSourceFileWorker` 函数。

### `parseSourceFileWorker`

该函数先创建一个 `SourceFile` AST 节点，然后从 `parseStatements` 函数开始解析源代码。一旦返回结果，就用额外信息（例如 `nodeCount`, `identifierCount`等） 完善 `SourceFile` 节点。

### `parseStatements`

是最重要的 `parseXXX` 系函数之一（概念接下来介绍）。它根据扫描器返回的当前 token 来切换（调用相应的 `parseXXX` 函数），例如：如果当前 token 是一个 `SemicolonToken`（分号标记），就会调用 `paserEmptyStatement` 为空语句创建一个 AST 节点。

### 节点创建

解析器有一系列 `parseXXX` 函数用来创建相应类型为`XXX`的节点，通常在相应类型的节点出现时被（其他解析器函数）调用。该过程的典型示例是解析空语句（例如 `;;;;;;`）时要用的 `parseEmptyStatement()` 函数。下面是其全部代码：

```ts
function parseEmptyStatement(): Statement {
  let node = <Statement>createNode(SyntaxKind.EmptyStatement);
  parseExpected(SyntaxKind.SemicolonToken);
  return finishNode(node);
}
```

它展示了 3 个关键函数 `createNode`, `parseExpected` 和 `finishNode`.

#### `createNode`

解析器函数 `function createNode(kind: SyntaxKind, pos?: number): Node` 负责创建节点，设置传入的 `SyntaxKind`（语法类别），和初始位置（默认使用当前扫描器状态提供的位置信息）。

#### `parseExpected`

解析器的 `parseExpected` 函数 `function parseExpected(kind: SyntaxKind, diagnosticMessage?: DiagnosticMessage): boolean` 会检查解析器状态中的当前 token 是否与指定的 `SyntaxKind` 匹配。如果不匹配，则会向传入的 `diagnosticMessage`（诊断消息）报告，未传入则创建某种通用形式 `xxx expected`。该函数内部用 `parseErrorAtPosition` 函数（使用扫描位置）提供良好的错误报告。

#### `finishNode`

解析器的 `finishNode` 函数 `function finishNode<T extends Node>(node: T, end?: number): T` 设置节点的 `end` 位置，并添加一些有用的信息，例如上下文标志（`parserContextFlags`）以及解析该节点前出现的错误（如果有错的话，就不能在增量解析中重用此 AST 节点）。
