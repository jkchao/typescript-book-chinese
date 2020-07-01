# 常见的 Error

在此章节中，我们学习在实际应用中将会遇到的常见错误代码。

## TS2304

例子：

> `Cannot find name ga`, `Cannot find name $`, `Cannot find module jquery`

你可能在使用第三方的库（如：google analytics），但是你并没有 `declare` 的声明。在没有声明它们之前，TypeScript 试图避免错误和使用变量。因此在使用一些额外的库时，你需要明确的声明使用的任何变量（[如何修复它](../typings/ambient.md)）。

## TS2307

例子：

> `Cannot find module 'underscore'`

你可能把第三方的库作为模块（[移步模块](../project/modules.md)）来使用，并且没有一个与之对应的环境声明文件（[更多声明文件信息](../typings/ambient.md)）。

## TS1148

例子：

> `Cannot compile modules unless the '--module' flag provided`

请查看[模块](../project/modules.md)章节

## 捕获不能有类型注解的简短变量

例子：

```ts
try {
  something();
} catch (e) {
  // 捕获不能有类型注解的简短变量
  // ...
}
```

TypeScript 正在保护你免受 JavaScript 代码的侵害，取而代之，使用类型保护：

```ts
try {
  something();
} catch (e) {
  // 捕获不能有类型注解的简短变量
  if (e instanceof Error) {
    // do...
  }
}
```

## 接口 `ElementClass` 不能同时扩展类型别名 `Component` 和 `Component`

当在编译上下文中同时含有两个 `react.d.ts`（`@types/react/index.d.ts`）会发生这种情况。

修复：

- 删除 `node_modules` 和任何 `package-lock`（或者 `yarn lock`），然后再一次 `npm install`；
- 如果这不能工作，查找无效的模块（你所使用的所用用到了 `react.d.ts` 模块应该作为 `peerDependency` 而不是作为 `dependency` 使用）并且把这个报告给相关模块。
