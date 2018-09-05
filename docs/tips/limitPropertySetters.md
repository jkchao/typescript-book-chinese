# 减少 setter 属性的使用

倾向于使用更精确的 `set/get` 函数（如 `setBar`, `getBar`），减少使用 `setter/getter`；

考虑以下代码：

```ts
foo.bar = {
  a: 123,
  b: 456
};
```

存在 `setter/getter` 时：

```ts
class Foo {
  a: number;
  b: number;
  set bar(value: { a: number; b: number }) {
    this.a = value.a;
    this.b = value.b;
  }
}

let foo = new Foo();
```

这并不是 `setter` 的一个好的使用场景，当开发人员阅读第一段代码时，不知道将要更改的所有内容的上下文。然而，当开发者使用 `foo.setBar(value)`，他可能会意识到在 `foo` 里可能会引起一些改变。
