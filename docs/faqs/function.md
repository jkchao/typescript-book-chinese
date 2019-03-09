# 函数

## 为什么我不能在解构函数 `function f({ x: number }) { /* ... */ }` 中使用 `x`？

> 我写下这单代码，但是得到了一个错误

```ts
function f({ x: number }) {
  // Error, x is not defined?
  console.log(x);
}
```

对于那些习惯于查看 TypeScript 类型字面量的人来说，解构语法是有悖常理的。语法 `f({ x: number })` 声明了属性名从 `x` 转换为 `number` 名的解构。

让我们从发出的代码来收到启发：

```ts
function f(_a) {
  // Not really what we were going for
  var number = _a.x;
}
```

为了能让这段代码正确运行，你需要写下：

```ts
function f({ x }: { x: number }) {
  // OK
  console.log(x);
}
```

如果你想为所有属性提供一个初始变量，最合适的写法是：

```ts
function f({ x = 0 }) {
  // x: number
  console.log(x);
}
```
