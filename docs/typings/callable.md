# 可调用的

你可以使用类型别名或者接口来表示一个可被调用的类型注释：

```typescript
interface ReutrnString {
  (): string
}
```

这种接口的例子是表示一个返回值为 `string` 的函数：

```typescript
declare const foo: ReutrnString

const bar = foo() // bar 被推断为一个字符串。
```

