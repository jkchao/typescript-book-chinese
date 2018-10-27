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

它被称为模块模式（利用 JavaScript 的闭包）。

如果你使用[文件模块](../project/modules.md#文件模块)（你确实应该将全局变量视为错误），文件中的代码与示例一样，都不是全局变量。

然而，开发者有时会写以下类似代码：

```ts
let someProperty;

function foo() {
  // 一些初始化代码
}

foo();
someProperty = 123; // 其他初始化代码

// 一些其它未导出

// later
export function someMethod() {}
```

尽管我并不是一个特别喜欢使用**继承**的人，但是我确实发现让开发者使用类，可以在一定程度上更好的组织他们的代码，例如：

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

这并不仅仅有利于开发者，在创建基于类的更出色可视化工具中，它更常见。并且，这有利于项目的理解和维护。

::: tip
在浅层次的结构中，如果它们能够提供明显的重复使用和减少模版的好处，那么在这个观点里，我并没有错误。
:::
