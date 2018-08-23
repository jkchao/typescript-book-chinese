# 异常处理

JavaScript 有一个 `Error` 类，用于处理异常。你可以通过 `throw` 关键字来抛出一个错误。然后你可以通过 `try/catch` 块来捕获到此错误：

```ts
try {
  throw new Error('Something bad happened')
} catch (e) {
  console.log(e)
}
```

## 错误子类型

