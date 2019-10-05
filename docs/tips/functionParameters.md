# 函数参数

如果你有一个含有很多参数或者相同类型参数的函数，那么你可能需要考虑将函数改为接收对象的形式：

如下一个函数：

```ts
function foo(flagA: boolean, flagB: boolean) {
  // 函数主体
}
```

像这样的函数，你可能会很容易错误的调用它，如 `foo(flagB, flagA)`，并且你并不会从编译器得到想要的帮助。

你可以将函数变为接收对象的形式：

```ts
function foo(config: { flagA: boolean; flagB: boolean }) {
  const { flagA, flagB } = config;
}
```

现在，函数将会被 `foo({ flagA, flagB })` 的形式调用，这样有利于发现错误及代码审查。

::: tip
如果你的函数足够简单，并且你不希望增加代码，忽略这个建议。
:::
