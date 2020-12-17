# 名义化类型

TypeScript 的类型系统是结构化的，[这也是其主要的优点之一](https://basarat.gitbooks.io/typescript/content/docs/why-typescript.html)。然而，在实际的特定用例中，有时尽管变量具有相同的结构，你也想将他们视为不同类型。一个非常常见的用例是身份类型结构（它们可能只是在 C# 或者 Java 中表示一个它们语义化名字的字符串）。

这有一些社区使用的方式，我按照个人喜好降序排列：

## 使用字面量类型

这种模式使用泛型和字面量类型：

```ts
// 泛型 Id 类型
type Id<T extends string> = {
  type: T;
  value: string;
};

// 特殊的 Id 类型
type FooId = Id<'foo'>;
type BarId = Id<'bar'>;

// 可选：构造函数
const createFoo = (value: string): FooId => ({ type: 'foo', value });
const createBar = (value: string): BarId => ({ type: 'bar', value });

let foo = createFoo('sample');
let bar = createBar('sample');

foo = bar; // Error
foo = foo; // Okey
```

- 优点
  - 不需要类型断言。
- 缺点
  - 如上结构 `{type,value}` 可能不那么尽如人意，而且需要服务器序列化支持。

## 使用枚举

TypeScript 中[枚举](../typings/enums.md) 提供一定程度的名义化类型。如果两个枚举的命名不相同，则它们类型不相等。我们可以利用这个事实来为结构上兼容的类型，提供名义化类型。

解决办法包括：

- 创建一个只有名字的枚举；
- 利用这个枚举与实际结构体创建一个交叉类型（`&`）。

如下所示，当实际结构体仅仅是一个字符串时：

```ts
// FOO
enum FooIdBrand {
  _ = ''
}
type FooId = FooIdBrand & string;

// BAR
enum BarIdBrand {
  _ = ''
}
type BarId = BarIdBrand & string;

// user

let fooId: FooId;
let barId: BarId;

// 类型安全
fooId = barId; // error
barId = fooId; // error

// 创建一个新的
fooId = 'foo' as FooId;
barId = 'bar' as BarId;

// 两种类型都与基础兼容
let str: string;
str = fooId;
str = barId;
```

请注意上文中的 `FooIdBrand` 与 `BarIdBrand`，它们都有一个 `_` 映射到空字符串的成员，即 `{ _ = '' }`。这可以强制 TypeScript 推断出这是一个基于字符串的枚举，而不是一个数字类型的枚举。这是很重要的，因为 TypeScript 会把一个空的枚举类型（`{}`）推断为一个数字类型的枚举，在 TypeScript 3.6.2 版本及其以上时，数字类型的枚举与 `string` 的交叉类型是 `never`。

## 使用接口

因为 `number` 类型与 `enum` 类型在类型上是兼容的，因此我们不能使用上述提到的方法来处理它们。取而代之，我们可以使用接口打破这种类型的兼容性。TypeScript 编译团队仍然在使用这种方法，因此它值得一提。使用 `_` 前缀和 `Brand` 后缀是一种我强烈推荐的惯例方法（[TypeScript 也这么推荐](https://github.com/Microsoft/TypeScript/blob/7b48a182c05ea4dea81bab73ecbbe9e013a79e99/src/compiler/types.ts#L693-L698)）。

解决办法包括：

- 在类型上添加一个不用的属性，用来打破类型兼容性；
- 在新建或向下转换类型的时候使用断言。

如下所示：

```ts
// FOO
interface FooId extends String {
  _fooIdBrand: string; // 防止类型错误
}

// BAR
interface BarId extends String {
  _barIdBrand: string; // 防止类型错误
}

// 使用
let fooId: FooId;
let barId: BarId;

// 类型安全
fooId = barId; // error
barId = fooId; // error
fooId = <FooId>barId; // error
barId = <BarId>fooId; // error

// 创建新的
fooId = 'foo' as any;
barId = 'bar' as any;

// 如果你需要以字符串作为基础
var str: string;
str = fooId as any;
str = barId as any;
```
