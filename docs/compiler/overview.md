# 概览

TypeScript 编译器源文件位于 [`src/compiler`](https://github.com/Microsoft/TypeScript/tree/master/src/compiler) 目录下

> 译注：Typescript Deep Dive 使用的源码应为 2016 年以前的源码。学习时请对照现有的源码

它分为以下几个关键部分：

- Scanner 扫描器（`scanner.ts`）
- Parser 解析器（`parser.ts`）
- Binder 绑定器（`binder.ts`）
- Checker 检查器（`checker.ts`）
- Emitter 发射器（`emitter.ts`）

每个部分在源文件中均有独立文件，本章稍后会对这些部分做解释。

### BYOTS

我们有个名为 [Bring Your Own TypeScript (BYOTS)](https://github.com/basarat/byots) 的项目，通过暴露内部接口让编译器 API 使用起来更简单。你可以在全局范围上暴露你 TypeScript 应用的本地变量。

### 语法和语义

*语法*正确并不意味着*语义*上也正确。下面的 TypeScript 代码，语法合法，但是语义却不正确

```ts
var foo: number = 'not a number';
```

`语义` 从自然语言角度意味着有意义，理解这个概念对你很有用。

### 处理概览

以下演示简单说明 TypeScript 编译器如何将上述几个关键部分组合在一起：

```code
SourceCode（源码） ~~ 扫描器 ~~> Token 流
```

```code
Token 流 ~~ 解析器 ~~> AST（抽象语法树）
```

```code
AST ~~ 绑定器 ~~> Symbols（符号）
```

符号（`Symbol`）是 TypeScript *语义*系统的主要构造块。如上所示，符号是绑定的结果。符号将 AST 中的声明节点与相同实体的其他声明相连。

符号和 AST 是检查器用来验证源代码*语义*的

```code
AST + 符号 ~~ 检查器 ~~> 类型验证
```

最后，需要输出 JavaScript 时：

```code
AST + 检查器 ~~ 发射器 ~~> JavaScript 代码
```

TypeScript 编译器中还有一些其他文件，为我们接下来介绍的很多关键部分提供实用工具。

## 文件：Utilities

`core.ts` ：TypeScript 编译器使用的核心工具集，重要的有：

- `let objectAllocator: ObjectAllocator` 是一个定义为全局单例的变量。提供以下定义：
  - `getNodeConstructor`（节点会在解析器 / AST 中介绍）
  - `getSymbolConstructor`（符号会在绑定器中介绍）
  - `getTypeConstructor`（类型会在检查器中介绍）
  - `getSignatureConstructor`（签名是索引，调用和构造签名）

## 文件：关键数据结构

`types.ts` 包含整个编译器中使用的关键数据结构和接口，这里列出一些关键部分：

- `SyntaxKind`
  AST 节点类型通过 `SyntaxKind` 枚举进行识别
- `TypeChecker`
  类型检查器提供此接口
- `CompilerHost`
  用于程序（`Program`）和系统之间的交互
- `Node`
  AST 节点

## 文件：系统

`system.ts`，TypeScript 编译器与操作系统的所有交互均通过 `System` 接口进行。接口及其实现（`WScript` 和 `Node`） 均定义在 `system.ts` 中。你可以将其视为*操作环境（OE, Operating Environment）*。

现在对主要文件有一个整体了解了，我们继续介绍程序（[`Program`](./program.md)）的概念
