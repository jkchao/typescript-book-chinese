# 类是有用的

以下结构在应用中很常见：

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

如果你使用[文件模块](../project/modules.md#文件模块)（你确实应该将全局变量视为错误），那么你的文件与给出的例子将是一样的（都不是全局变量）。然而，在很多种情景下，开发者会写一下代码：

```ts
let someProperty;

function foo() {
  // 一些初始化代码
}

foo(); // 一些初始化代码
someProperty = 123; // 其他初始化代码

// 某些未导出的使用功能

// later
export function someMethod() {}
```

尽管我并不是一个特别喜欢使用**继承**的人，但是我确实发现让开发者使用类，可以在一定程度上更好的  组织他们的代码，他们可能会写以下代码：

```ts
class Foo {
  public someProperty;

  constructor() {
    // 一些初始化内容
  }

  public someMethod() {
    // ..code
  }

  public someUtility() {
    // .. code
  }
}

export = new Foo();
```

这并不仅仅有利于开发者，在创建基于类的更出色可视化工具里，它更常见。并且，这有利于项目的理解和维护。

::: tip
在浅层次的结构中，如果它们能够提供明显的重复使用和减少模版的好处，那么在这个观点里，我并没有错误。
:::
