# 类是有用的

以下结构在应用中是很常见的：

```ts
function foo() {
  let someProperty;

  // 一些其他的初始化代码

  function someMethod() {
    // 用 someProperty 做一些事情
    // 可能有其他属性
  }

  // 可能有其他的方法
  return {
    someMethod
    // 可能有其他方法
  };
}
```

这在 JavaScript 中很常见，它被称为模块模式（利用 JavaScript 的闭包）。

如果你使用[文件模块](../project/modules.md#文件模块)（你确实应该将全局变量视为错误），那么你的文件与给出的例子将是一样的（都不是全局变量），然而，在很多种情景下，人们会写一下代码：

```ts
let someProperty;

function foo() {
  // 一些初始化代码
}

foo(); // 一些初始化代码
someProperty = 123; // 其他初始化代码

//
```
