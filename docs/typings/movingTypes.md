# 流动的类型

TypeScript 类型系统非常强大，它支持其他任何单一语言无法实现的类型流动和类型片段。

这是因为 TypeScript 的设计目的之一是让你无缝与像 JavaScript 这类高动态的语言一起工作。在这里，我们介绍一些在 TypeScript 中使用移动类型的技巧。

关键的动机：当你改变了其中一个时，其他相关的会自动更新，并且当有事情变糟糕时，你会得到一个友好的提示，就好像一个被精心设计过的约束系统。

## 复制类型和值

如果你想移动一个类，你可能会想要做以下事情：

```ts
class Foo {}

const Bar = Foo;

let bar: Bar; // Error: 不能找到名称 'Bar'
```

这会得到一个错误，因为 `const` 仅仅是复制了 `Foo` 到一个变量声明空间，因此你无法把 `Bar` 当作一个类型声明使用。正确的方式是使用 `import` 关键字，请注意，如果你在使用 `namespace` 或者 `modules`，使用 `import` 是你唯一能用的方式：

```ts
namespace importing {
  export class Foo {}
}

import Bar = importing.Foo;
let bar: Bar; // ok
```

这个 `import` 技巧，仅适合于类型和变量。

## 捕获变量的类型

你可以通过 `typeof` 操作符在类型注解中使用变量。这允许你告诉编译器，一个变量的类型与其他类型相同，如下所示：

```ts
let foo = 123;
let bar: typeof foo; // 'bar' 类型与 'foo' 类型相同（在这里是： 'number'）

bar = 456; // ok
bar = '789'; // Error: 'string' 不能分配给 'number' 类型
```

## 捕获类成员的类型

与捕获变量的类型相似，你仅仅是需要声明一个变量用来捕获到的类型：

```ts
class Foo {
  foo: number; // 我们想要捕获的类型
}

declare let _foo: Foo;

// 与之前做法相同
let bar: typeof _foo.foo;
```

## 捕获字符串类型

许多 JavaScript 库和框架都使用原始的 JavaScript 字符串，你可以使用 `const` 定义一个变量捕获它的类型：

```ts
// 捕获字符串的类型与值
const foo = 'Hello World';

// 使用一个捕获的类型
let bar: typeof foo;

// bar 仅能被赋值 'Hello World'
bar = 'Hello World'; // ok
bar = 'anything else'; // Error
```

在这个例子里，`bar` 有字面量类型 `Hello World`，我们在[字面量类型](./literals.md)章节已经深入讨论。

## 捕获键的名称

`keyof` 操作符能让你捕获一个类型的键。例如，你可以使用它来捕获变量的键名称，在通过使用 `typeof` 来获取类型之后：

```ts
const colors = {
  red: 'red',
  blue: 'blue'
};

type Colors = keyof typeof colors;

let color: Colors; // color 的类型是 'red' | 'blue'
color = 'red'; // ok
color = 'blue'; // ok
color = 'anythingElse'; // Error
```

这允许你很容易地拥有像字符串枚举+常量这样的类型，如上例所示。
