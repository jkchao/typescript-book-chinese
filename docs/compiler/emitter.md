# 发射器

TypeScript 编译器提供了两个发射器：

- `emitter.ts`：可能是你最感兴趣的发射器，它是 TS -> JavaScript 的发射器
- `declarationEmitter.ts`：这个发射器用于为 _TypeScript 源文件（`.ts`）_ 创建*声明文件（`.d.ts`）*

本节我们介绍 `emitter.ts`

### Promgram 对发射器的使用

Program 提供了一个 `emit` 函数。该函数主要将功能委托给 `emitter.ts`中的 `emitFiles` 函数。下面是调用栈：

```
Program.emit ->
    `emitWorker` （在 program.ts 中的 createProgram） ->
        `emitFiles` （emitter.ts 中的函数）
```

`emitWorker`（通过 `emitFiles` 参数）给发射器提供一个 `EmitResolver`。 `EmitResolver` 由程序的 TypeChecker 提供，基本上它是一个来自 `createChecker` 的本地函数的子集。

## 发射器函数

### `emitFiles`

定义在 `emitter.ts` 中，下面是该函数的签名：

```ts
// targetSourceFile 当用户想发射项目中的某个文件时指定，保存时编译（compileOnSave）功能使用此参数
export function emitFiles(resolver: EmitResolver, host: EmitHost, targetSourceFile?: SourceFile): EmitResult {
```

`EmitHost` 是 `CompilerHost` 的简化版（运行时，很多用例实际上都是 `CompilerHost`）

`emitFiles` 中的最有趣的调用栈如下所示：

```
emitFiles ->
    emitFile(jsFilePath, targetSourceFile) ->
        emitJavaScript(jsFilePath, targetSourceFile);
```

### `emitJavaScript`

该函数有良好的注释，我们下面给出它：

```ts
function emitJavaScript(jsFilePath: string, root?: SourceFile) {
  let writer = createTextWriter(newLine);
  let write = writer.write;
  let writeTextOfNode = writer.writeTextOfNode;
  let writeLine = writer.writeLine;
  let increaseIndent = writer.increaseIndent;
  let decreaseIndent = writer.decreaseIndent;

  let currentSourceFile: SourceFile;
  // 导出器函数的名称，如果文件是个系统外部模块的话
  // System.register([...], function (<exporter>) {...})
  // System 模块中的导出像这样：
  // export var x; ... x = 1
  // =>
  // var x;... exporter("x", x = 1)
  let exportFunctionForFile: string;

  let generatedNameSet: Map<string> = {};
  let nodeToGeneratedName: string[] = [];
  let computedPropertyNamesToGeneratedNames: string[];

  let extendsEmitted = false;
  let decorateEmitted = false;
  let paramEmitted = false;
  let awaiterEmitted = false;
  let tempFlags = 0;
  let tempVariables: Identifier[];
  let tempParameters: Identifier[];
  let externalImports: (ImportDeclaration | ImportEqualsDeclaration | ExportDeclaration)[];
  let exportSpecifiers: Map<ExportSpecifier[]>;
  let exportEquals: ExportAssignment;
  let hasExportStars: boolean;

  /** 将发射输出写入磁盘 */
  let writeEmittedFiles = writeJavaScriptFile;

  let detachedCommentsInfo: { nodePos: number; detachedCommentEndPos: number }[];

  let writeComment = writeCommentRange;

  /** 发射一个节点 */
  let emit = emitNodeWithoutSourceMap;

  /** 在发射节点前调用 */
  let emitStart = function(node: Node) {};

  /** 发射结点完成后调用 */
  let emitEnd = function(node: Node) {};

  /** 从 startPos 位置开始，为指定的 token 发射文本。默认写入的文本由 tokenKind 提供，
   * 但是如果提供了可选的 emitFn 回调，将使用该回调来代替默认方式发射文本。
   * @param tokenKind 要搜索并发射的 token 的类别
   * @param startPos 源码中搜索 token 的起始位置
   * @param emitFn 如果给出，会被调用来进行文本的发射。
   */
  let emitToken = emitTokenText;

  /** 该函数由于节点的缘故，在被发射的代码中的函数或类中，会在启用词法作用域前被调用
   * @param scopeDeclaration 启动词法作用域的节点
   * @param scopeName 可选的作用域的名称，默认从节点声明中推导
   */
  let scopeEmitStart = function(scopeDeclaration: Node, scopeName?: string) {};

  /** 出了作用域后调用 */
  let scopeEmitEnd = function() {};

  /** 会被编码的 Sourcemap 数据 */
  let sourceMapData: SourceMapData;

  if (compilerOptions.sourceMap || compilerOptions.inlineSourceMap) {
    initializeEmitterWithSourceMaps();
  }

  if (root) {
    // 不要直接调用 emit，那样不会设置 currentSourceFile
    emitSourceFile(root);
  } else {
    forEach(host.getSourceFiles(), sourceFile => {
      if (!isExternalModuleOrDeclarationFile(sourceFile)) {
        emitSourceFile(sourceFile);
      }
    });
  }

  writeLine();
  writeEmittedFiles(writer.getText(), /*writeByteOrderMark*/ compilerOptions.emitBOM);
  return;

  /// 一批本地函数
}
```

它主要设置了一批本地变量和函数（这些函数构成 `emitter.ts` 的*大部分*内容），接着交给本地函数 `emitSourceFile` 发射文本。`emitSourceFile` 函数设置 `currentSourceFile` 然后交给本地函数 `emit` 去处理。

```ts
function emitSourceFile(sourceFile: SourceFile): void {
  currentSourceFile = sourceFile;
  exportFunctionForFile = undefined;
  emit(sourceFile);
}
```

`emit` 函数处理 _注释_ 和 _实际 JavaScript_ 的发射。_实际 JavaScript_ 的发射是 emitJavaScriptWorker 函数的工作。

### `emitJavaScriptWorker`

完整的函数：

```ts
function emitJavaScriptWorker(node: Node) {
  // 检查节点是否可以忽略 ScriptTarget 发射
  switch (node.kind) {
    case SyntaxKind.Identifier:
      return emitIdentifier(<Identifier>node);
    case SyntaxKind.Parameter:
      return emitParameter(<ParameterDeclaration>node);
    case SyntaxKind.MethodDeclaration:
    case SyntaxKind.MethodSignature:
      return emitMethod(<MethodDeclaration>node);
    case SyntaxKind.GetAccessor:
    case SyntaxKind.SetAccessor:
      return emitAccessor(<AccessorDeclaration>node);
    case SyntaxKind.ThisKeyword:
      return emitThis(node);
    case SyntaxKind.SuperKeyword:
      return emitSuper(node);
    case SyntaxKind.NullKeyword:
      return write('null');
    case SyntaxKind.TrueKeyword:
      return write('true');
    case SyntaxKind.FalseKeyword:
      return write('false');
    case SyntaxKind.NumericLiteral:
    case SyntaxKind.StringLiteral:
    case SyntaxKind.RegularExpressionLiteral:
    case SyntaxKind.NoSubstitutionTemplateLiteral:
    case SyntaxKind.TemplateHead:
    case SyntaxKind.TemplateMiddle:
    case SyntaxKind.TemplateTail:
      return emitLiteral(<LiteralExpression>node);
    case SyntaxKind.TemplateExpression:
      return emitTemplateExpression(<TemplateExpression>node);
    case SyntaxKind.TemplateSpan:
      return emitTemplateSpan(<TemplateSpan>node);
    case SyntaxKind.JsxElement:
    case SyntaxKind.JsxSelfClosingElement:
      return emitJsxElement(<JsxElement | JsxSelfClosingElement>node);
    case SyntaxKind.JsxText:
      return emitJsxText(<JsxText>node);
    case SyntaxKind.JsxExpression:
      return emitJsxExpression(<JsxExpression>node);
    case SyntaxKind.QualifiedName:
      return emitQualifiedName(<QualifiedName>node);
    case SyntaxKind.ObjectBindingPattern:
      return emitObjectBindingPattern(<BindingPattern>node);
    case SyntaxKind.ArrayBindingPattern:
      return emitArrayBindingPattern(<BindingPattern>node);
    case SyntaxKind.BindingElement:
      return emitBindingElement(<BindingElement>node);
    case SyntaxKind.ArrayLiteralExpression:
      return emitArrayLiteral(<ArrayLiteralExpression>node);
    case SyntaxKind.ObjectLiteralExpression:
      return emitObjectLiteral(<ObjectLiteralExpression>node);
    case SyntaxKind.PropertyAssignment:
      return emitPropertyAssignment(<PropertyDeclaration>node);
    case SyntaxKind.ShorthandPropertyAssignment:
      return emitShorthandPropertyAssignment(<ShorthandPropertyAssignment>node);
    case SyntaxKind.ComputedPropertyName:
      return emitComputedPropertyName(<ComputedPropertyName>node);
    case SyntaxKind.PropertyAccessExpression:
      return emitPropertyAccess(<PropertyAccessExpression>node);
    case SyntaxKind.ElementAccessExpression:
      return emitIndexedAccess(<ElementAccessExpression>node);
    case SyntaxKind.CallExpression:
      return emitCallExpression(<CallExpression>node);
    case SyntaxKind.NewExpression:
      return emitNewExpression(<NewExpression>node);
    case SyntaxKind.TaggedTemplateExpression:
      return emitTaggedTemplateExpression(<TaggedTemplateExpression>node);
    case SyntaxKind.TypeAssertionExpression:
      return emit((<TypeAssertion>node).expression);
    case SyntaxKind.AsExpression:
      return emit((<AsExpression>node).expression);
    case SyntaxKind.ParenthesizedExpression:
      return emitParenExpression(<ParenthesizedExpression>node);
    case SyntaxKind.FunctionDeclaration:
    case SyntaxKind.FunctionExpression:
    case SyntaxKind.ArrowFunction:
      return emitFunctionDeclaration(<FunctionLikeDeclaration>node);
    case SyntaxKind.DeleteExpression:
      return emitDeleteExpression(<DeleteExpression>node);
    case SyntaxKind.TypeOfExpression:
      return emitTypeOfExpression(<TypeOfExpression>node);
    case SyntaxKind.VoidExpression:
      return emitVoidExpression(<VoidExpression>node);
    case SyntaxKind.AwaitExpression:
      return emitAwaitExpression(<AwaitExpression>node);
    case SyntaxKind.PrefixUnaryExpression:
      return emitPrefixUnaryExpression(<PrefixUnaryExpression>node);
    case SyntaxKind.PostfixUnaryExpression:
      return emitPostfixUnaryExpression(<PostfixUnaryExpression>node);
    case SyntaxKind.BinaryExpression:
      return emitBinaryExpression(<BinaryExpression>node);
    case SyntaxKind.ConditionalExpression:
      return emitConditionalExpression(<ConditionalExpression>node);
    case SyntaxKind.SpreadElementExpression:
      return emitSpreadElementExpression(<SpreadElementExpression>node);
    case SyntaxKind.YieldExpression:
      return emitYieldExpression(<YieldExpression>node);
    case SyntaxKind.OmittedExpression:
      return;
    case SyntaxKind.Block:
    case SyntaxKind.ModuleBlock:
      return emitBlock(<Block>node);
    case SyntaxKind.VariableStatement:
      return emitVariableStatement(<VariableStatement>node);
    case SyntaxKind.EmptyStatement:
      return write(';');
    case SyntaxKind.ExpressionStatement:
      return emitExpressionStatement(<ExpressionStatement>node);
    case SyntaxKind.IfStatement:
      return emitIfStatement(<IfStatement>node);
    case SyntaxKind.DoStatement:
      return emitDoStatement(<DoStatement>node);
    case SyntaxKind.WhileStatement:
      return emitWhileStatement(<WhileStatement>node);
    case SyntaxKind.ForStatement:
      return emitForStatement(<ForStatement>node);
    case SyntaxKind.ForOfStatement:
    case SyntaxKind.ForInStatement:
      return emitForInOrForOfStatement(<ForInStatement>node);
    case SyntaxKind.ContinueStatement:
    case SyntaxKind.BreakStatement:
      return emitBreakOrContinueStatement(<BreakOrContinueStatement>node);
    case SyntaxKind.ReturnStatement:
      return emitReturnStatement(<ReturnStatement>node);
    case SyntaxKind.WithStatement:
      return emitWithStatement(<WithStatement>node);
    case SyntaxKind.SwitchStatement:
      return emitSwitchStatement(<SwitchStatement>node);
    case SyntaxKind.CaseClause:
    case SyntaxKind.DefaultClause:
      return emitCaseOrDefaultClause(<CaseOrDefaultClause>node);
    case SyntaxKind.LabeledStatement:
      return emitLabelledStatement(<LabeledStatement>node);
    case SyntaxKind.ThrowStatement:
      return emitThrowStatement(<ThrowStatement>node);
    case SyntaxKind.TryStatement:
      return emitTryStatement(<TryStatement>node);
    case SyntaxKind.CatchClause:
      return emitCatchClause(<CatchClause>node);
    case SyntaxKind.DebuggerStatement:
      return emitDebuggerStatement(node);
    case SyntaxKind.VariableDeclaration:
      return emitVariableDeclaration(<VariableDeclaration>node);
    case SyntaxKind.ClassExpression:
      return emitClassExpression(<ClassExpression>node);
    case SyntaxKind.ClassDeclaration:
      return emitClassDeclaration(<ClassDeclaration>node);
    case SyntaxKind.InterfaceDeclaration:
      return emitInterfaceDeclaration(<InterfaceDeclaration>node);
    case SyntaxKind.EnumDeclaration:
      return emitEnumDeclaration(<EnumDeclaration>node);
    case SyntaxKind.EnumMember:
      return emitEnumMember(<EnumMember>node);
    case SyntaxKind.ModuleDeclaration:
      return emitModuleDeclaration(<ModuleDeclaration>node);
    case SyntaxKind.ImportDeclaration:
      return emitImportDeclaration(<ImportDeclaration>node);
    case SyntaxKind.ImportEqualsDeclaration:
      return emitImportEqualsDeclaration(<ImportEqualsDeclaration>node);
    case SyntaxKind.ExportDeclaration:
      return emitExportDeclaration(<ExportDeclaration>node);
    case SyntaxKind.ExportAssignment:
      return emitExportAssignment(<ExportAssignment>node);
    case SyntaxKind.SourceFile:
      return emitSourceFileNode(<SourceFile>node);
  }
}
```

通过简单地调用相应的 `emitXXX` 函数来完成递归，例如 `emitFunctionDeclaration`

```ts
function emitFunctionDeclaration(node: FunctionLikeDeclaration) {
  if (nodeIsMissing(node.body)) {
    return emitOnlyPinnedOrTripleSlashComments(node);
  }

  if (node.kind !== SyntaxKind.MethodDeclaration && node.kind !== SyntaxKind.MethodSignature) {
    // 会把注释当做方法声明的一部分去发射。
    emitLeadingComments(node);
  }

  // 目标为 es6 之前时，使用 function 关键字来发射类函数（functions-like）声明，包括箭头函数
  // 目标为 es6 时，可以发射原生的 ES6 箭头函数，并使用宽箭头代替 function 关键字.
  if (!shouldEmitAsArrowFunction(node)) {
    if (isES6ExportedDeclaration(node)) {
      write('export ');
      if (node.flags & NodeFlags.Default) {
        write('default ');
      }
    }

    write('function');
    if (languageVersion >= ScriptTarget.ES6 && node.asteriskToken) {
      write('*');
    }
    write(' ');
  }

  if (shouldEmitFunctionName(node)) {
    emitDeclarationName(node);
  }

  emitSignatureAndBody(node);
  if (
    languageVersion < ScriptTarget.ES6 &&
    node.kind === SyntaxKind.FunctionDeclaration &&
    node.parent === currentSourceFile &&
    node.name
  ) {
    emitExportMemberAssignments((<FunctionDeclaration>node).name);
  }
  if (node.kind !== SyntaxKind.MethodDeclaration && node.kind !== SyntaxKind.MethodSignature) {
    emitTrailingComments(node);
  }
}
```

## 发射器源映射（SourceMaps）

如前所述 `emitter.ts` 中的大部分代码是函数 `emitJavaScript`（我们之前展示过该函数的初始化例程）。
它主要是设置一批本地变量并交给 `emitSourceFile` 处理。下面我们再看一遍这个函数，这次我们重点关注 `SourceMap` 的部分：

```ts
function emitJavaScript(jsFilePath: string, root?: SourceFile) {

    // 无关代码 ........... 已移除
    let writeComment = writeCommentRange;

    /** 将发射的输出写到磁盘上 */
    let writeEmittedFiles = writeJavaScriptFile;

    /** 发射一个节点 */
    let emit = emitNodeWithoutSourceMap;

    /** 节点发射前调用 */
    let emitStart = function (node: Node) { };

    /** 节点发射完成后调用 */
    let emitEnd = function (node: Node) { };

    /** 从 startPos 位置开始，为指定的 token 发射文本。默认写入的文本由 tokenKind 提供，
      * 但是如果提供了可选的 emitFn 回调，将使用该回调来代替默认方式发射文本。
      * @param tokenKind 要搜索并发射的 token 的类别
      * @param startPos 源码中搜索 token 的起始位置
      * @param emitFn 如果给出，会被调用来进行文本的发射。*/
    let emitToken = emitTokenText;

    /** 该函数因为节点，会在发射的代码中于函数或类中启用词法作用域前调用
      * @param scopeDeclaration 启动词法作用域的节点
      * @param scopeName 可选的作用域的名称，而不是从节点声明中推导
      */
    let scopeEmitStart = function(scopeDeclaration: Node, scopeName?: string) { };

    /** 出了作用域后调用 */
    let scopeEmitEnd = function() { };

    /** 会被编码的 Sourcemap 数据 */
    let sourceMapData: SourceMapData;

    if (compilerOptions.sourceMap || compilerOptions.inlineSourceMap) {
        initializeEmitterWithSourceMaps();
    }

    if (root) {
        // 不要直接调用 emit，那样不会设置 currentSourceFile
        emitSourceFile(root);
    }
    else {
        forEach(host.getSourceFiles(), sourceFile => {
            if (!isExternalModuleOrDeclarationFile(sourceFile)) {
                emitSourceFile(sourceFile);
            }
        });
    }

    writeLine();
    writeEmittedFiles(writer.getText(), /*writeByteOrderMark*/ compilerOptions.emitBOM);
    return;
```

重要的函数调用： `initializeEmitterWithSourceMaps`，该函数是 `emitJavaScript` 的本地函数，它覆盖了部分已定义的本地函数。
覆盖的函数可以在 `initalizeEmitterWithSourceMap` 的底部找到：

```ts
// `initializeEmitterWithSourceMaps` 函数的最后部分

writeEmittedFiles = writeJavaScriptAndSourceMapFile;
emit = emitNodeWithSourceMap;
emitStart = recordEmitNodeStartSpan;
emitEnd = recordEmitNodeEndSpan;
emitToken = writeTextWithSpanRecord;
scopeEmitStart = recordScopeNameOfNode;
scopeEmitEnd = recordScopeNameEnd;
writeComment = writeCommentRangeWithMap;
```

就是说大部分的发射器代码不关心 `SourceMap`，它们以相同的方式使用这些（带或不带 SourceMap 的）本地函数。
