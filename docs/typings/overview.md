# 概览

## TypeScript 类型系统

在讨论[为什么使用 TypeScript](https://jkchao.github.io/typescript-book-chinese/#whys) 时，我们表述了 TypeScript 类型系统的主要功能。以下是一些关键点：

- TypeScript 的类型系统被设计为可选的，因此，你的 JavaScript 就是 TypeScript;
- TypeScript 不会阻止 JavaScript 的运行，即使存在类型错误也不例外，这能让你的 JavaScript 逐步迁移至 TypeScript。

现在让我们开始学习 TypeScript 类型系统的语法吧，在这一章节中，你将能给你的代码加上类型注解，并且能看到它的益处。这将为我们进一步了解类型系统做铺垫。

## 基本注解

如前文所提及，类型注解使用 `:TypeAnnotation` 语法。在类型声明空间中可用的任何内容都可以用作类型注解。

在下面这个例子中，使用了变量、函数参数以及函数返回值的类型注解：

```ts
const num: number = 123;
function identity(num: number): number {
  return num;
}
```

## 原始类型

JavaScript 原始类型也同样适应于 TypeScript 的类型系统，因此 `string`、`number`、`boolean` 也可以被用作类型注解：

```ts
let num: number;
let str: string;
let bool: boolean;

num = 123;
num = 123.456;
num = '123'; // Error

str = '123';
str = 123; // Error

bool = true;
bool = false;
bool = 'false'; // Error
```

## 数组

TypeScript 为数组提供了专用的类型语法，因此你可以很轻易的注解数组。它使用后缀 `[]`， 接着你可以根据需要补充任何有效的类型注解（如：`:boolean[]`）。它能让你安全的使用任何有关数组的操作，而且它也能防止一些类似于赋值错误类型给成员的行为。如下所示：

```ts
let boolArray: boolean[];

boolArray = [true, false];
console.log(boolArray[0]); // true
console.log(boolArray.length); // 2

boolArray[1] = true;
boolArray = [false, false];

boolArray[0] = 'false'; // Error
boolArray = 'false'; // Error
boolArray = [true, 'false']; // Error
```

## 接口

接口是 TypeScript 的一个核心知识，它能合并众多类型声明至一个类型声明：

```ts
interface Name {
  first: string;
  second: string;
}

let name: Name;
name = {
  first: 'John',
  second: 'Doe'
};

name = {
  // Error: 'Second is missing'
  first: 'John'
};

name = {
  // Error: 'Second is the wrong type'
  first: 'John',
  second: 1337
};
```

在这里，我们把类型注解：`first: string` + `second: string` 合并到了一个新的类型注解 `Name` 里，这样能强制对每个成员进行类型检查。接口在 TypeScript 拥有强大的力量，稍后，我们将会用一个内容专门阐述如何更好的使用它。

## 内联类型注解

与创建一个接口不同，你可以使用内联注解语法注解任何内容：`:{ /*Structure*/ }`：

```ts
let name: {
  first: string;
  second: string;
};

name = {
  first: 'John',
  second: 'Doe'
};

name = {
  // Error: 'Second is missing'
  first: 'John'
};

name = {
  // Error: 'Second is the wrong type'
  first: 'John',
  second: 1337
};
```

内联类型能为你快速的提供一个类型注解。它可以帮助你省去为类型起名的麻烦（你可能会使用一个很糟糕的名称）。然而，如果你发现需要多次使用相同的内联注解时，那么考虑把它重构为一个接口（或者是 `type alias`，它会在接下来的部分提到）是一个不错的主意。

## 特殊类型

除了被提到的一些原始类型，在 TypeScript 中，还存在一些特殊的类型，它们是 `any`、 `null`、 `undefined` 以及 `void`。

### any

`any` 类型在 TypeScript 类型系统中占有特殊的地位。它提供给你一个类型系统的「后门」,TypeScript 将会把类型检查关闭。在类型系统里 `any` 能够兼容所有的类型（包括它自己）。因此，所有类型都能被赋值给它，它也能被赋值给其他任何类型。以下有一个证明例子：

```ts
let power: any;

// 赋值任意类型
power = '123';
power = 123;

// 它也兼容任何类型
let num: number;
power = num;
num = power;
```

当你把 JavaScript 迁移至 TypeScript 时，你将会经常性使用 `any`。但你必须减少对它的依赖，因为你需要确保类型安全。当使用 `any` 时，你基本上是在告诉 TypeScript 编译器不要进行任何的类型检查。

### null 和 undefined

在类型系统中，JavaScript 中的 null 和 undefined 字面量和其他被标注了 `any` 类型的变量一样，都能被赋值给任意类型的变量，如下例子所示：

```ts
// strictNullChecks: false

let num: number;
let str: string;

// 这些类型能被赋予
num = null;
str = undefined;
```

### void

使用 `:void` 来表示一个函数没有一个返回值

```ts
function log(message: string): void {
  console.log(message);
}
```

## 泛型

在计算机科学中，许多算法和数据结构并不会依赖于对象的实际类型。但是，你仍然会想在每个变量里强制提供约束。例如：在一个函数中，它接受一个列表，并且返回这个列表的反向排序，这里的约束是指传入至函数的参数与函数的返回值：

```ts
function reverse<T>(items: T[]): T[] {
  const toreturn = [];
  for (let i = items.length - 1; i >= 0; i--) {
    toreturn.push(items[i]);
  }
  return toreturn;
}

const sample = [1, 2, 3];
let reversed = reverse(sample);

console.log(reversed); // 3, 2, 1

// Safety
reversed[0] = '1'; // Error
reversed = ['1', '2']; // Error

reversed[0] = 1; // ok
reversed = [1, 2]; // ok
```

在上个例子中，函数 `reverse` 接受一个类型为 `T`（注意在 `reverse<T>` 中的类型参数） 的数组（`items: T[]`），返回值为类型 T 的一个数组（注意：T[]），函数 `reverse` 的返回值类型与它接受的参数的类型一样。当你传入 `const sample = [1, 2, 3]` 时，TypeScript 能推断出 `reverse` 为 `number[]` 类型，从而能给你类型安全。与此相似，当你传入一个类型为 `string[]` 类型的数组时，TypeScript 能推断 `reverse` 为 `string`[] 类型，如下例子所示：

```ts
const strArr = ['1', '2'];
let reversedStrs = reverse(strArr);

reversedStrs = [1, 2]; // Error
```

事实上，JavaScript 数组已经拥有了 `reverse` 的方法，TypeScript 也确实使用了泛型来定义其结构：

```ts
interface Array<T> {
  reverse(): T[];
}
```

这意味着，当你在数组上调用 `.reverse` 方法时，将会获得类型安全：

```ts
let numArr = [1, 2];
let reversedNums = numArr.reverse();

reversedNums = ['1', '2']; // Error
```

当稍后在 [环境声明](./ambient.md) 章节中提及 `lib.d.ts` 时，我们会讨论更多关于 `Array<T>` 的信息。

## 联合类型

在 JavaScript 中，你可能希望属性为多种类型之一，如字符串或者数组。这正是 TypeScript 中联合类型能派上用场的地方（它使用 `|` 作为标记，如 `string | number`）。关于联合类型，一个常见的用例是一个可以接受字符串数组或单个字符串的函数：

```ts
function formatCommandline(command: string[] | string) {
  let line = '';
  if (typeof command === 'string') {
    line = command.trim();
  } else {
    line = command.join(' ').trim();
  }

  // Do stuff with line: string
}
```

## 交叉类型

在 JavaScript 中， `extend` 是一种非常常见的模式，在这种模式中，你可以从两个对象中创建一个新对象，新对象拥有着两个对象所有的功能。交叉类型可以让你安全的使用此种模式：

```ts
function extend<T extends object, U extends object>(first: T, second: U): T & U {
  const result = <T & U>{};
  for (let id in first) {
    (<T>result)[id] = first[id];
  }
  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      (<U>result)[id] = second[id];
    }
  }

  return result;
}

const x = extend({ a: 'hello' }, { b: 42 });

// 现在 x 拥有了 a 属性与 b 属性
const a = x.a;
const b = x.b;
```

## 元组类型

JavaScript 并不支持元组，开发者们通常只能使用数组来表示元组。而 TypeScript 支持它，开发者可以使用 `:[typeofmember1, typeofmember2]` 的形式，为元组添加类型注解，元组可以包含任意数量的成员，示例：

```ts
let nameNumber: [string, number];

// Ok
nameNumber = ['Jenny', 221345];

// Error
nameNumber = ['Jenny', '221345'];
```

将其与 TypeScript 中的解构一起使用：

```ts
let nameNumber: [string, number];
nameNumber = ['Jenny', 322134];

const [name, num] = nameNumber;
```

## 类型别名

TypeScript 提供了为类型注解设置别名的便捷语法，你可以使用 `type SomeName = someValidTypeAnnotation` 来创建别名：

```ts
type StrOrNum = string | number;

// 使用
let sample: StrOrNum;
sample = 123;
sample = '123';

// 会检查类型
sample = true; // Error
```

与接口不同，你可以为任意的类型注解提供类型别名（在联合类型和交叉类型中比较实用），下面是一些能让你熟悉类型别名语法的示例。

```ts
type Text = string | { text: string };
type Coordinates = [number, number];
type Callback = (data: string) => void;
```

:::tip

- 如果你需要使用类型注解的层次结构，请使用接口。它能使用 `implements` 和 `extends`
- 为一个简单的对象类型（如上面例子中的 Coordinates）使用类型别名，只需要给它一个语义化的名字即可。另外，当你想给联合类型和交叉类型提供一个语义化的名称时，一个类型别名将会是一个好的选择。

:::

## 最后

现在你已经能够为你的大部分 JavaScript 代码添加类型注解，接着，让我们深入了解 TypeScript 的类型系统吧。
