# 命名空间

在 JavaScript 使用命名空间时， 这有一个常用的、方便的语法：

```js
(function(something) {
  something.foo = 123;
})(something || (something = {}));
```

`something || (something = {})` 允许匿名函数 `function (something) {}` 向现有对象添加内容，或者创建一个新对象，然后向该对象添加内容。这意味着你可以拥有两个由某些边界拆成的块。

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

在确保创建的变量不会泄漏至全局命名空间时，这种方式在 JavaScript 中很常见。当基于文件模块使用时，你无须担心这点，但是该模式仍然适用于一组函数的逻辑分组。因此 TypeScript 提供了 `namespace` 关键字来描述这种分组，如下所示。

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

`namespace` 关键字编译后的 JavaScript 代码，与我们早些时候看到的 JavaScript 代码一样。

```js
(function (Utility) {
  // 添加属性至 Utility
})(Utility || Utility = {});
```

值得注意的一点是，命名空间是支持嵌套的。因此，你可以做一些类似于在 `Utility` 命名空间下嵌套一个命名空间 `Messaging` 的事情。

对于大多数项目，我们建议使用外部模块和命名空间，来快速演示和移植旧的 JavaScript 代码。
