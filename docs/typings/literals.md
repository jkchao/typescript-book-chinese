# 字面量类型

字面量是 JavaScript 本身提供的一个准确变量。

## 字符串字面量

你可以使用一个字符串字面量作为一个类型：

```ts
let foo: 'Hello';
```

在这里，我们创建了一个被称为 `foo` 变量，它仅接收一个字面量值为 `Hello` 的变量：

```ts
let foo: 'Hello';
foo = 'Bar'; // Error: 'bar' 不能赋值给类型 'Hello'
```

它们本身并不是很实用，但是可以在一个联合类型中组合创建一个强大的（实用的）抽象：

```ts
type CardinalDirection = 'North' | 'East' | 'South' | 'West';

function move(distance: number, direction: CardinalDirection) {
  // ...
}

move(1, 'North'); // ok
move(1, 'Nurth'); // Error
```

## 其他字面量类型

TypeScript 同样也提供 `boolean` 和 `number` 的字面量类型：

```ts
type OneToFive = 1 | 2 | 3 | 4 | 5;
type Bools = true | false;
```

## 推断

通常，你会得到一个类似于 `Type string is not assignable to type 'foo'` 的错误，如下：

```ts
function iTakeFoo(foo: 'foo') {}
const test = {
  someProp: 'foo'
};

iTakeFoo(test.someProp); // Error: Argument of type string is not assignable to parameter of type 'foo'
```

这是由于 `test` 被推断为 `{ someProp: string }`，我们可以采用一个简单的类型断言来告诉 TypeScript 你想推断的字面量：

```ts
function iTakeFoo(foo: 'foo') {}

const test = {
  someProp: 'foo' as 'foo'
};

iTakeFoo(test.someProp); // ok
```

或者使用类型注解的方式，来帮助 TypeScript 推断正确的类型：

```ts
function iTakeFoo(foo: 'foo') {}

type Test = {
  someProp: 'foo';
};

const test: Test = {
  // 推断 `someProp` 永远是 'foo'
  someProp: 'foo'
};

iTakeFoo(test.someProp); // ok
```

## 使用用例

TypeScript 枚举类型是基于数字的，你可以使用带字符串字面量的联合类型，来模拟一个基于字符串的枚举类型，就好像上文中提出的 `CardinalDirection`。你甚至可以使用下面的函数来生成 `key: value` 的结构：

```ts
// 用于创建字符串列表映射至 `K: V` 的函数
function strEnum<T extends string>(o: Array<T>): { [K in T]: K } {
  return o.reduce((res, key) => {
    res[key] = key;
    return res;
  }, Object.create(null));
}
```

然后，你就可以使用 `keyof`、`typeof` 来生成字符串的联合类型。下面是一个完全的例子：

```ts
// 用于创建字符串列表映射至 `K: V` 的函数
function strEnum<T extends string>(o: Array<T>): { [K in T]: K } {
  return o.reduce((res, key) => {
    res[key] = key;
    return res;
  }, Object.create(null));
}

// 创建 K: V
const Direction = strEnum(['North', 'South', 'East', 'West']);

// 创建一个类型
type Direction = keyof typeof Direction;

// 简单的使用
let sample: Direction;

sample = Direction.North; // Okay
sample = 'North'; // Okay
sample = 'AnythingElse'; // ERROR!
```

## 辨析联合类型

我们将会在此书的稍后章节讲解它。
