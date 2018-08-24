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

除内置的 `Error` 类外，还有一些额外的内置错误，它们继承自 `Error` 类：

### RangeError

但一个数字变量或者参数超出其有效范围时，此时会出现 `RangeError` 的错误提示：

```ts
// 使用过多参数调用 console
console.log.apply(console, new Array(1000000000))   // RangeError: 数组长度无效
```

### ReferenceError

当引用无效时，会出现 `ReferenceError` 的错误提示：

```ts
'use strict'
console.log(notValidVar)    // ReferenceError: notValidVar 未定义
```

### SyntaxError

当解析无效 JavaScript 代码时，会出现 `SyntaxError` 的错误提示：

```ts
1 *** 3   // SyntaxError: 无效的标记 *
```

### TypeError

变量或者参数不是有效类型时，会出现 `TypeError` 的错误提示：

```ts
('1.2').toPrecision(1)    // TypeError: '1.2'.toPrecision 不是函数。
```

### URIError

当传入无效参数至 `encodeURI()` 和 `decodeURI()` 时，会出现 `URIError` 的错误提示：

```ts
decodeURI('%')    // URIError: URL 异常
```

## 使用 `Error`