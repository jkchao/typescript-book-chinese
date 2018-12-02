# 命名空间

在 JavaScript 使用命名空间时， 这有一个常用方便的语法：

```js
(function(something) {
  something.foo = 123;
})(something || (something = {}));
```

`something || (something = {})` 允许匿名函数 `function (something) {}` 添加属性至已经存在的对象上，或者会创建一个新对象，然后添加属性至新对象上，这意味着你可以拥有由某些边界拆成的不同的块：

```js
(function(something) {
  something.foo = 123;
})(something || (something = {}));

console.log(something);
// { foo: 123 }

(function(something) {
  something.bar = 456;
})(something || (something = {}));

console.log(something); // { foo: 123, bar: 456 }
```

在确保创建的变量不会泄漏至全局变量中时，这种方式在 JavaScript 中很常见。当使用基于文件模块时，你无须担心这点，但是此种方式，仍然适用于合理的函数逻辑分组中。因此 TypeScript 提供了 `namespace` 关键字用来描述这种分组，如下所示：

```ts
namespace Utility {
  export function log(msg) {
    console.log(msg);
  }
  export function error(msg) {
    console.log(msg);
  }
}

// usage
Utility.log('Call me');
Utility.error('maybe');
```

`namespace` 关键字通过 TypeScript 编译后，与我们看到的 JavaScript 代码一样：

```js
(function (Utility) {
  // 添加属性至 Utility
})(Utility || Utility = {});
```

有一点值得注意的是，命名空间是支持嵌套的。因此，你可以做一些类似于在 `Utility` 命名空间下嵌套一个命名空间 `Messaging` 的事情。

对大多数项目来说，我们推荐使用一个使用 `namespace` 的外部的模块，用来快速的演示和移植旧的 JavaScript 代码。
