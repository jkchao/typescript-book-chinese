# 类型守卫

## 为什么 `x instanceof Foo` 不能将 `x` 的类型缩小至 `Foo`？

这取决于 `x` 是什么？如果 `x` 的类型不与 `Foo` 兼容，那么缩小 `x` 的类型就毫无意义，所以我们不会这么做。

当你发现 `x` 具有任何类型时，我们对此推荐的做法是：

```ts
function doIt(x) {
  if (x instanceof Object) {
    // Assume 'x' is a well-known object which
    // we know how to handle specifically
  }

  // Treat 'x' as a primitive
}
```

你将在 TypeScript 中看到这些代码（它们可能早于联合类型被发现），或者是一些从 JavaScript 移植到 TypeScript 的代码，如果我们把 `x` 缩小至 `Object`，那么你将只能做更少的事情。使用任何不在 `Object` 中的属性都将导致错误。这不仅适用于 `Object`，对于具有已定义属性集的任何其他类型都是如此。
