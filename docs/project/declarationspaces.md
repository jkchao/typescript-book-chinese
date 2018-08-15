# 声明空间

在 TypeScript 里存在两种声明空间：类型声明空间与变量声明空间。这些概念，将会在下文中和大家探讨。

## 类型声明空间

类型声明空间包含用来当做类型注释的内容，例如以下的一些类型声明：

```ts
class Foo {}
interface Bar {}
type Bas = {}
```

这意味着，你能将 `Foo`, `Bar`, `Bas` 做为类型注释使用，例如：

```ts
const foo: Foo
const bar: Bar
const bas: Bas
```

注意，尽管你定义了 `interface Bar`，你并不能够将它做为一个变量使用，因为它没有在变量声明空间起作用，如下所示：

```ts
interface Bar {}
const bar = Bar  // Error: "cannot find name 'Bar'"
```

提示 `cannot find name 'Bar'` 的原因是名称 `Bar` 并未定义在变量声明空间。这将带领我们进入下一个主题 "变量声明空间"。

## 变量声明空间

变量声明空间包含可用作变量的内容，我们可以注意到，让 `Class Foo` 提供了一个类型 `Foo` 到类型声明空间。猜猜发生了什么，它同样提供了一个变量 `Foo` 到变量声明空间，如下所示：

```ts
class Foo {}
const someVar = Foo
const someOtherVar = 123
```

这很棒，尤其是当你想把一个类来当做变量传递时。

::: warning
我们并不能使用一些像 `interface` 这类只能用于类型声明空间的内容，来当做变量使用。
:::

与此相似，一些像你用 `var` 声明的变量，也仅能在变量声明空间使用，不能用作类型注释。

```js
const foo = 123
const var: foo // ERROR: "cannot find name 'foo'"
```

提示 `cannot find name` 的原因是，名称 `foo` 没有定义在类型声明空间里。