# 类型断言

TypeScript 允许你覆盖它的推断，并且能以你任何你想要的方式分析它，这种机制，被称之为「类型断言」。TypeScript 类型断言用来告诉编译器你比它更了解这个类型，并且它不应该再发出错误。

类型断言的一个常见用例是当你从 JavaScript 迁移到 TypeScript 时：

```typescript
const foo = {}
foo.bar = 123         // Error: 'bar' 属性不存在于 ‘{}’
foo.bas = 'hello'     // Error: 'bas' 属性不存在于 '{}'
```

这里的代码发出了错误警告，因为 `foo` 的类型推断为 `{}`，即是具有零属性的对象。因此，你不能在它的属性上添加 `bar` 或 `bas`，你可以通过类型断言来避免此问题：

```typescript
interface Foo {
  bar: number,
  bas: string
}

const foo = {} as Foo
foo.bar = 123
foo.bas = 'hello'
```

