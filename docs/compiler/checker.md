# 检查器

如前所述，*检查器*使得 TypeScript 更独特，比*其它 JavaScript 转译器*更强大。检查器位于 `checker.ts` 中，当前有 23k 行以上的代码（编译器中最大的部分）

### 程序对检查器的使用

检查器是由程序初始化，下面是调用栈示意（绑定器一节也展示过）：

```
program.getTypeChecker ->
    ts.createTypeChecker（检查器中）->
        initializeTypeChecker（检查器中） ->
            for each SourceFile `ts.bindSourceFile`（绑定器中）
            // 接着
            for each SourceFile `ts.mergeSymbolTable`（检查器中）
```

### 与发射器的联系

真正的类型检查会在调用 `getDiagnostics` 时才发生。该函数被调用时（比如由 `Program.emit` 请求），检查器返回一个 `EmitResolver`（由程序调用检查器的 `getEmitResolver` 函数得到），`EmitResolver` 是 `createTypeChecker` 的一个本地函数的集合。介绍发射器时还会再次提到。

下面是该过程直到 `checkSourceFile` 的调用栈（`checkSourceFile` 是 `createTypeChecker` 的一个本地函数）：

```
program.emit ->
    emitWorker (program local) ->
        createTypeChecker.getEmitResolver ->
            // 第一次调用下面的几个 createTypeChecker 的本地函数
            call getDiagnostics ->
                getDiagnosticsWorker ->
                    checkSourceFile

            // 接着
            return resolver
            // 通过对本地函数 createResolver() 的调用，resolver 已在 createTypeChecker 中初始化。
```

## 全局命名空间合并

`initializeTypeChecker` 中存在以下代码：

```ts
// 初始化全局符号表（SymbolTable）。
forEach(host.getSourceFiles(), file => {
  if (!isExternalModule(file)) {
    mergeSymbolTable(globals, file.locals);
  }
});
```

基本上是将所有的 `global` 符号合并到 `let globals: SymbolTable = {}` 符号表中（位于 `createTypeChecker` 中）。
`mergeSymbolTable` 主要调用 `mergeSymbol` 函数。

## 检查器错误报告

检查器使用本地的 `error` 函数报告错误，如下所示：

```ts
function error(location: Node, message: DiagnosticMessage, arg0?: any, arg1?: any, arg2?: any): void {
  let diagnostic = location
    ? createDiagnosticForNode(location, message, arg0, arg1, arg2)
    : createCompilerDiagnostic(message, arg0, arg1, arg2);
  diagnostics.add(diagnostic);
}
```
