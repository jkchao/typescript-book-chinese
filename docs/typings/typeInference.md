# 类型推断

TypeScript 能根据一些简单的规则推断（检查）变量的类型，你可以通过实践，很快的了解它们。

## 定义变量

变量的类型，由定义推断：

```ts
let foo = 123; // foo 是 'number'
let bar = 'hello'; // bar 是 'string'

foo = bar; // Error: 不能将 'string' 赋值给 `number`
```

这是一个从右向左流动类型的示例。

## 函数返回类型

返回类型能被 `return` 语句推断，如下所示，推断函数返回为一个数字：

```ts
function add(a: number, b: number) {
  return a + b;
}
```

这是一个从底部流出类型的例子。

## 赋值

函数参数类型/返回值也能通过赋值来推断。如下所示，`foo` 的类型是 `Adder`，他能让 `foo` 的参数 `a`、`b` 是 `number` 类型。

```ts
type Adder = (a: number, b: number) => number;
let foo: Adder = (a, b) => a + b;
```

这个事实可以用下面的代码来证明，TypeScript 会发出正如你期望发出的错误警告：

```ts
type Adder = (a: number, b: number) => number;
let foo: Adder = (a, b) => {
  a = 'hello'; // Error：不能把 'string' 类型赋值给 'number' 类型
  return a + b;
};
```

这是一个从左向右流动类型的示例。

如果你创建一个函数，并且函数参数为一个回调函数，相同的赋值规则也适用于它。从 `argument` 至 `parameter` 只是变量赋值的另一种形式。

```ts
type Adder = (a: number, b: number) => number;
function iTakeAnAdder(adder: Adder) {
  return adder(1, 2);
}

iTakeAnAdder((a, b) => {
  a = 'hello'; // Error: 不能把 'string' 类型赋值给 'number' 类型
  return a + b;
});
```

## 结构化

这些简单的规则也适用于结构化的存在（对象字面量），例如在下面这种情况下 `foo` 的类型被推断为 `{ a: number, b: number }`：

```ts
const foo = {
  a: 123,
  b: 456
};

foo.a = 'hello'; // Error：不能把 'string' 类型赋值给 'number' 类型
```

数组也一样：

```ts
const bar = [1, 2, 3];
bar[0] = 'hello'; // Error：不能把 'string' 类型赋值给 'number' 类型
```

## 解构

这些也适用于解构中：

```ts
const foo = {
  a: 123,
  b: 456
};
let { a } = foo;

a = 'hello'; // Error：不能把 'string' 类型赋值给 'number' 类型
```

数组中：

```ts
const bar = [1, 2];
let [a, b] = bar;

a = 'hello'; // Error：不能把 'string' 类型赋值给 'number' 类型
```

如果函数参数能够被推断出来，那么解构亦是如此。在如下例子中，函数参数能够被解构为 `a/b` 成员：

```ts
type Adder = (number: { a: number; b: number }) => number;
function iTakeAnAdder(adder: Adder) {
  return adder({ a: 1, b: 2 });
}

iTakeAnAdder(({ a, b }) => {
  // a, b 的类型能被推断出来
  a = 'hello'; // Error：不能把 'string' 类型赋值给 'number' 类型
  return a + b;
});
```

## 类型保护

在前面章节[类型保护](./typeGuard.md)中，我们已经知道它如何帮助我们改变和缩小类型范围（特别是在联合类型下）。类型保护只是一个块中变量另一种推断形式。

## 警告

### 小心使用参数

如果类型不能被赋值推断出来，类型也将不会流入函数参数中。例如如下的一个例子，编译器并不知道 `foo` 的类型，所它也就不能推断出 `a` 或者 `b` 的类型。

```ts
const foo = (a, b) => {
  /* do something */
};
```

然而，如果 `foo` 添加了类型注解，函数参数也就能被推断（`a`，`b` 都能被推断为 `number` 类型）：

```ts
type TwoNumberFunction = (a: number, b: number) => void;
const foo: TwoNumberFunction = (a, b) => {
  /* do something */
};
```

### 小心使用返回值

尽管 TypeScript 一般情况下能推断函数的返回值，但是它可能并不是你想要的。例如如下的 `foo` 函数，它的返回值为 `any`：

```ts
function foo(a: number, b: number) {
  return a + addOne(b);
}

// 一些使用 JavaScript 库的特殊函数
function addOne(a) {
  return a + 1;
}
```

这是因为返回值的类型被一个缺少类型定义的 `addOne` 函数所影响（`a` 是 `any`，所以 `addOne` 返回值为 `any`，`foo` 的返回值是也是 `any`）。

::: tip
我发现最简单的方式是明确的写上函数返回值，毕竟这些注解是一个定理，而函数是注解的一个证据。
:::

这里还有一些其他可以想象的情景，但是有一个好消息是有编译器选项 `noImplicitAny` 可以捕获这些 bug。

### `noImplicitAny`

选项 `noImplicitAny` 用来告诉编译器，当无法推断一个变量时发出一个错误（或者只能推断为一个隐式的 `any` 类型），你可以：

- 通过显式添加 `:any` 的类型注解，来让它成为一个 `any` 类型；
- 通过一些更正确的类型注解来帮助 TypeScript 推断类型。
