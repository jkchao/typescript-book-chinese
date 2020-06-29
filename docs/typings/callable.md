# 可调用的

你可以使用类型别名或者接口来表示一个可被调用的类型注解：

```ts
interface ReturnString {
  (): string;
}
```

它可以表示一个返回值为 `string` 的函数：

```ts
declare const foo: ReturnString;

const bar = foo(); // bar 被推断为一个字符串。
```

## 一个实际的例子

当然，像这样一个可被调用的类型注解，你也可以根据实际来传递任何参数、可选参数以及 rest 参数，这有一个稍微复杂的例子：

```ts
interface Complex {
  (foo: string, bar?: number, ...others: boolean[]): number;
}
```

一个接口可提供多种调用签名，用以特殊的函数重载：

```ts
interface Overloaded {
  (foo: string): string;
  (foo: number): number;
}

// 实现接口的一个例子：
function stringOrNumber(foo: number): number;
function stringOrNumber(foo: string): string;
function stringOrNumber(foo: any): any {
  if (typeof foo === 'number') {
    return foo * foo;
  } else if (typeof foo === 'string') {
    return `hello ${foo}`;
  }
}

const overloaded: Overloaded = stringOrNumber;

// 使用
const str = overloaded(''); // str 被推断为 'string'
const num = overloaded(123); // num 被推断为 'number'
```

这也可以用于内联注解中：

```ts
let overloaded: {
  (foo: string): string;
  (foo: number): number;
};
```

## 箭头函数

为了使指定可调用的类型签名更容易，TypeScript 也允许你使用简单的箭头函数类型注解。例如，在一个以 number 类型为参数，以 string 类型为返回值的函数中，你可以这么写：

```ts
const simple: (foo: number) => string = foo => foo.toString();
```

::: tip
它仅仅只能作为简单的箭头函数，你无法使用重载。如果想使用重载，你必须使用完整的 `{ (someArgs): someReturn }` 的语法
:::

## 可实例化

可实例化仅仅是可调用的一种特殊情况，它使用 `new` 作为前缀。它意味着你需要使用 `new` 关键字去调用它：

```ts
interface CallMeWithNewToGetString {
  new (): string;
}

// 使用
declare const Foo: CallMeWithNewToGetString;
const bar = new Foo(); // bar 被推断为 string 类型
```
