# 异常处理

JavaScript 有一个 `Error` 类，用于处理异常。你可以通过 `throw` 关键字来抛出一个错误。然后通过 `try/catch` 块来捕获此错误：

```ts
try {
  throw new Error('Something bad happened');
} catch (e) {
  console.log(e);
}
```

## 错误子类型

除内置的 `Error` 类外，还有一些额外的内置错误，它们继承自 `Error` 类：

### RangeError

当数字类型变量或者参数超出其有效范围时，出现 `RangeError` 的错误提示：

```ts
// 使用过多参数调用 console
console.log.apply(console, new Array(1000000000)); // RangeError: 数组长度无效
```

### ReferenceError

当引用无效时，会出现 `ReferenceError` 的错误提示：

```ts
'use strict';
console.log(notValidVar); // ReferenceError: notValidVar 未定义
```

### SyntaxError

当解析无效 JavaScript 代码时，会出现 `SyntaxError` 的错误提示：

```ts
1 *** 3   // SyntaxError: 无效的标记 *
```

### TypeError

变量或者参数不是有效类型时，会出现 `TypeError` 的错误提示：

```ts
'1.2'.toPrecision(1); // TypeError: '1.2'.toPrecision 不是函数。
```

### URIError

当传入无效参数至 `encodeURI()` 和 `decodeURI()` 时，会出现 `URIError` 的错误提示：

```ts
decodeURI('%'); // URIError: URL 异常
```

## 使用 `Error`

JavaScript 初学者可能有时候仅仅是抛出一个原始字符串：

```ts
try {
  throw 'Something bad happened';
} catch (e) {
  console.log(e);
}
```

**不要这么做**，使用 `Error` 对象的基本好处是，它能自动跟踪堆栈的属性构建以及生成位置。

原始字符串会导致极差的调试体验，并且在分析日志时，将会变得错综复杂。

## 你并不需要 `throw` 抛出一个错误

传递一个 `Error` 对象是没问题的，这种方式在 `Node.js` 回调函数中非常常见，它用第一个参数作为错误对象进行回调处理。

```ts
function myFunction (callback: (e: Error)) {
  doSomethingAsync(function () {
    if (somethingWrong) {
      callback(new Error('This is my error'));
    } else {
      callback();
    }
  })
}
```

## 优秀的用例

「Exceptions should be exceptional」是计算机科学中常用用语。这里有一些原因说明在 JavaScript(TypeScript) 中也是如此。

### 不清楚从哪里抛出错误

考虑如下代码块：

```ts
try {
  const foo = runTask1();
  const bar = runTask2();
} catch (e) {
  console.log('Error:', e);
}
```

下一个开发者可能并不清楚哪个函数可能会抛出错误。在没有阅读 `task1/task2` 代码以及他们可能会调用的函数时，对代码 `review` 的人员可能也不会知道错误会从哪里抛出。

### 优雅的捕获错误

你可以通过为每个可能抛出错误的代码显式捕获，来使其优雅：

```ts
try {
  const foo = runTask1();
} catch (e) {
  console.log('Error:', e);
}

try {
  const bar = runTask2();
} catch (e) {
  console.log('Error:', e);
}
```

但是现在，如果你想从第一个任务中传递变量到第二个任务中，代码会变的混乱（注意：foo 变量需要用 let 显式注解它，因为它不能从 `runTask1` 中返回出来）：

```ts
let foo: number; // Notice 使用 let 并且显式注明类型注解

try {
  foo = runTask1();
} catch (e) {
  console.log('Error:', e);
}

try {
  const bar = runTask2(foo);
} catch (e) {
  console.log('Error:', e);
}
```

### 没有在类型系统中很好的表示

考虑如下函数：

```ts
function validate(value: number) {
  if (value < 0 || value > 100) {
    throw new Error('Invalid value');
  }
}
```

在这种情境下使用 `Error` 不是一个好的主意。因为没有用来验证函数的类型定义（如：`(value: number) => void`），取而代之一个更好的方式是创建一个验证方法：

```ts
function validate(
  value: number
): {
  error?: string;
} {
  if (value < 0 || value > 100) {
    return { error: 'Invalid value' };
  }
}
```

现在它具有类型定义了。

::: tip
除非你想用以非常通用（try/catch）的方式处理错误，否则不要抛出错误。
:::
