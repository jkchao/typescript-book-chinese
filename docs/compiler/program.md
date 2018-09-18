# 程序

程序定义在 `program.ts` 中。[编译上下文](../project/compilationContext.md)在 TypeScript 编译器中被视为一个 `Program`，它包含 `SourceFile` 和编译选项

## `CompilerHost` 的使用

CompilerHost 是与操作环境（OE, Operating Enviornment）进行交互的机制：

`Program` _-使用->_ `CompilerHost` _-使用->_ `System`

用 `CompilerHost` 作中间层的原因是可以让接口对 `Program` 的需求进行细粒度的调整，而无需考虑操作环境的需求。（例如：`Program` 无需关心 `System` 的 `fileExists` 函数）

对`System`而言还有其他的使用者（比如测试）

## SourceFile

程序有个 API，用于获取 SourceFile：`getSourceFiles(): SourceFile[];`。得到的每个元素均是一棵抽象语法树的根节点（称做 `SourceFile`）
