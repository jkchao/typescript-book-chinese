# 环境声明

正如我们在为什么使用 [TypeScript](https://basarat.gitbooks.io/typescript/content/docs/why-typescript.html) 中所说：

> TypeScript 的设计目标之一是让你在 TypeScript 中安全、轻松地使用现有的 JavaScript 库，TypeScript 通过声明文件来做到这一点

环境声明允许你安全地使用现有的 JavaScript 库，并且能让你的 JavaScript、CoffeeScript 或者其他需要编译成 JavaScript 的语言逐步迁移至 TypeScript。

学习为第三方 JavaScript 库编写环境声明，是一种为 TypeScript 写注解比较好的实践方式。

## 声明文件

你可以通过 `declare` 关键字来告诉 TypeScript，你正在试图表述一个其他地方已经存在的代码，如：写在 JavaScript、CoffeeScript 或者是像浏览器和 Node.js 运行环境里的代码：

```ts
foo = 123; // Error: 'foo' is not defined
```

和：

```ts
declare var foo: any;
foo = 123; // allow
```

你可以选择把这些声明放入 `.ts` 或者 `.d.ts` 里。在你实际的项目里，我们强烈建议你应该把声明放入独立的 `.d.ts` 里（可以从一个命名为 `global.d.ts` 或者 `vendor.d.ts` 文件开始）。

如果一个文件有扩展名 `.d.ts`，这意味着每个根级别的声明都必须以 `declare` 关键字作为前缀。这有利于让开发者清楚的知道，在这里 TypeScript 将不会把它编译成任何代码，同时开发者需要确保这些在编译时存在。

::: tip

- 环境声明就好像你与编译器之间的一个约定，如果在编译时它们不存在，但是你却使用了它们，程序将会在没有警告的情况下中断。
- 环境声明就好像是一个文档。如果源文件更新了，你应该同步更新。所以，当你在运行时有新的行为时，如果没有去更新环境声明，编译器将会报错。

:::

## 变量

当你想告诉 TypeScript 编辑器关于 `process` 变量时，你可以这么做：

```ts
declare let process: any;
```

::: tip
你并不需要为 `process` 做这些，因为这已经存在于社区维护的 [`node.d.ts`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/node/index.d.ts)
:::

这允许你使用 `process`，并能成功通过 TypeScript 的编译：

```ts
process.exit();
```

我们推荐尽可能的使用接口，例如：

```ts
interface Process {
  exit(code?: number): void;
}

declare let process: Process;
```

因为这允许其他人扩充这些全局变量，并且会告诉 TypeScript 有关于这些声明的修改。例如：考虑到以下情况，我们添加一个 `exitWithLogging` 函数至 `process`：

```ts
interface Process {
  exitWithLogging(code?: number): void;
}

process.exitWithLogging = function() {
  console.log('exiting');
  process.exit.apply(process, arguments);
};
```

接下来，让我们更详细的了解接口。
