# 类型系统的行为

## 什么是结构化类型

TypeScript 使用**结构化类型**，这个系统并不同于你可能使用过的一些其他流行语言（如：Java、C# 等）的类型系统。

结构化类型系统背后的思想是如果他们的成员类型是兼容的，则他们是兼容的。例如：在 C# 或者 Java 中，有两个名为 `MyPoint` 和 `YourPoint` 的类，它们都具有公共 `int` 类型的属性 `x` 和 `y`，这两个类是不可互换的。但在结构化的类型系统中（TypeScript），这些类型具有不同名称的事实并不重要，因为它们具有相同类型的相同成员，所以它们是相同的（可以互换的）。

这也适用于子类型关系。例如：在 C++ 中，你只能使用 `Dog` 来替代 `Animal`，如果明确 `Animal` 是 `Dog` 的父类。在 TypeScript 中，并不是这种情况，具有至少与 `Animal` 一样多的成员（适当的类型）的 `Dog`，才是 `Animal` 的子类型，而不管是否是继承关系。

这对于习惯于使用名义类型语言的程序员来说，会产生一些令人惊讶的后果。在这个 FAQs 中的许多问题，都可以追溯到结构化类型及其含义。一旦你掌握了他的基础知识，就很容易理解了。

### 什么是类型删除

TypeScript 移除了类型断言、接口、类型别名和一些其他编译期间的类型系统结构。

输入：

```ts
var x: SomeInterface;
```

输出：

```ts
var x;
```

这意味着，在运行时，没有信息表明一些变量 `x` 被声明为 `SomeInterface` 类型。

对于习惯用使用反射或其他元数据系统的程序员来说，缺少的运行时类型信息可能会令人惊讶。FAQs 中的许多问题都可以归结为「因为类型被删除」。

### 为什么没有 setter 时的 getter，没有被认为是只读？

> 我写下一段代码，并且期望它会抛出错误

```ts
class Foo {
  get bar() {
    return 42;
  }
}
let x = new Foo();
// Expected error here
x.bar = 10;
```

这在 TypeScript 2.0 + 中会抛出错误。具体请看 [#12](https://github.com/Microsoft/TypeScript/issues/12)

### 为什么函数参数是双向协变

> 我写下一段代码，并且期望它会抛出错误

```ts
function trainDog(d: Dog) { ... }
function cloneAnimal(source: Animal, done: (result: Animal) => void): void { ... }
let c = new Cat();

// Runtime error here occurs because we end up invoking 'trainDog' with a 'Cat'
cloneAnimal(c, trainDog);
```

这是由于类型系统中缺乏显示协变/逆变注解而导致的不健全。由于协变/逆变的缺失，当被问及到 `(x: Dog) => void` 是否能够赋值给 `(x: Animal) => void` 时，TypeScript 必须更加的宽容处理。

为了理解为什么是这样，思考两个问题：`Dog[]` 是 `Animal[]` 的子类型吗？在 TypeScript 中 `Dog[]` 是否应该是 `Animal[]` 的子类型？

第二个问题很容易分析，如果它的答案是 `no` 了？

```ts
function checkIfAnimalsAreAwake(arr: Animal[]) { ... }

let myPets: Dog[] = [spot, fido];

// Error? Can't substitute Dog[] for Animal[] ?
checkIfAnimalsAreAwake(myPets);
```

这将是非常烦人。在 `checkIfAnimalsAreAwake` 没有修改 arr 的情况下，这段代码 100% 是正确的。没有充足的理由来认为 `Dog[]` 不能被赋值给 `Animal[]` - 在这里很明显，一组 `Dog` 是一组 `Anumal`。

回到第一个问题，类型系统什么时候会决定 `Dog[]` 是 `Animal[]` 的子类型。它将会进行以下计算（写到这里，编译器好像没有进行任何优化），以及其他一些：

- `Dog[]` 可以被赋值给 `Animal[]` 类型吗？
- `Dog[]` 的每个成员都可以被赋值给 `Animal[]` 吗？
  - `Dog[].push` 可以赋值给 `Animal[].push` 吗？
    - 类型 `(x: Dog) => number` 可以赋值给 `(x: Animal) => number` 吗？
      - `(x: Dog) => number` 的第一个参数的类型，可以赋值给 `(x: Animal) => numbder` 的第一个参数吗？
        - `Dog` 可以赋值给 `Animal` 吗？
          - 是的

如你在这里所看到的一样，类型系统在检查类型是否可以赋值时，它会提问「`(x: Dog) => number` 的类型能赋值给 `(x: Animal) => number` 吗？」，这与类型系统要求原始类型所需的问题相同。如果 TypeScript 强制函数参数进行逆变（`Animal` 可以赋值给 `Dog`），这可能会导致 `Dog[]` 并不能赋值给 `Animal[]`。

总的来说，在 TypeScript 的类型系统里，一个可以接受更多特定类型参数的函数是否能够赋值给一个较少特定类型参数的函数的问题，它的答案有一个先决条件 - 是否有更多特定类型的数组能够赋值到一个较少特定类型的数组。在大多数情况下，如果后者不是这情情况，则认为是不被允许的。所以我们必须对函数参数类型的特定情况进行正确的权衡。

### 为什么有更少参数的函数能够赋值给更多参数的函数

> 我写下这段代码，并期望它抛出错误

```ts
function handler(arg: string) {
  // ....
}

function doSomething(callback: (arg1: string, arg2: number) => void) {
  callback('hello', 42);
}

// Expected error because 'doSomething' wants a callback of
// 2 parameters, but 'handler' only accepts 1
doSomething(handler);
```

这是预期和期望的行为。首先，参考在顶部的 FAQ 中的 「substitutability」 - `handler` 是回调函数中的有效参数，因为它可以安全的忽略额外的参数。

其次，让我们来探讨下另外一个用例：

```ts
let items = [1, 2, 3];
items.forEach(arg => console.log(arg));
```

这也可以看成是一个「期望的错误」。在运行时，`forEach` 使用三个参数调用指定的回调函数，但是在大多数情况下，回调函数仅仅使用一个或者两个参数。这是一种非常常见的 JavaScript 模式，必须明确声明所有未使用的参数是很麻烦的。

> 但是 `forEach` 仅仅是标记它的参数作为可选项，例如：`forEach(callback: (element?: T, index?: number, array?: T[]))`

这并不是可选的回调函数的含义。始终从函数调用者的角度去读取函数签名。如果 `forEach` 声明回调函数是可选的，这意味着 `forEach` 可能会使用 0 参数来调用回调函数。

一个可选的回调函数参数的含义是：

```ts
// Invoke the provided function with 0 or 1 argument
function maybeCallWithArg(callback: (x?: number) => void) {
  if (Math.random() > 0.5) {
    callback();
  } else {
    callback(42);
  }
}
```

`forEach` 总是为其回调函数提供所有的三个参数。你不必检查 `index` 参数是否为 undefined - 它总是在这里，不是可选的。

目前在 TypeScript 没有存在一种方法可以指示回调函数的参数必须存在。注意，这种强制址执行，并不会修复一个错误。换句话说，我们假设，每一个回调函数必须至少有一个参数，你可能会写下以下代码：

```ts
[1, 2, 3].forEach(() => console.log('just counting'));
//   ~~ Error, not enough arguments?
```

我们可以通过添加一个参数来修复它，但是它可能不是很正确

```ts
[1, 2, 3].forEach(x => console.log('just counting'));
// OK, but doesn't do anything different at all
```

### 为什么一个返回值不是 `void` 的类型，可以赋值给一个返回值为 `void` 的参数？

> 我写下这段代码，并期望它抛出错误

```ts
function doSomething(): number {
  return 42;
}

function callMeMaybe(callback: () => void) {
  callback();
}

// Expected an error because 'doSomething' returns number, but 'callMeMaybe'
// expects void-returning function
callMeMaybe(doSomething);
```

这是预期和期望的行为。首先，参考在顶部的 FAQ 中的 「substitutability」- 事实上相比于 `callMeMaybe`, `doSomething` 返回「更多」的信息，`callMeMaybe` 是一个有效的替代品。

其次，让我们来探讨下另外一个用例：

```ts
let items = [1, 2];
callMeMaybe(() => items.push(3));
```

这也可以看成是一个「期望的错误」。 `Array#push` 会返回一个数字（数组的新长度），但是在用于一个返回值为 `void` 的函数上，它是一个安全的替代品。

另外一种思考这个问题的方式是：一个返回值类型为 `void` 的函数，它会说：“如果你的返回值存在，我将不会检查它”。

### 为什么所有新的类型，都能赋值给一个空的接口

> 我写下这段代码，并期望它抛出错误

```ts
interface Thing {
  /* nothing here */
}
function doSomething(a: Thing) {
  // mysterious implementation here
}
// Expected some or all of these to be errors
doSomething(window);
doSomething(42);
doSomething('huh?');
```

没有成员的类型，能够被任何类型替代。在这个例子中，`window`、`42`、`huh` 都是 `Thing` 的成员。

通常来说，你永远不应该声明没有属性的 `interface`。

### 我可以用名义上的类型别名吗

> 我写下这段代码，并期望它抛出错误

```ts
type SomeUrl = string;
type FirstName = string;
let x: SomeUrl = 'http://www.typescriptlang.org/';
let y: FirstName = 'Bob';
x = y; // Expected error
```

类型别名只是一个简单的别名，它们无法区分自己所表示的类型。

这有一个涉及到使用交叉类型的解决办法：

```ts
// Strings here are arbitrary, but must be distinct
type SomeUrl = string & { 'this is a url': {} };
type FirstName = string & { 'person name': {} };

// Add type assertions
let x = <SomeUrl>'';
let y = <FirstName>'bob';
x = y; // Error

// OK
let xs: string = x;
let ys: string = y;
xs = ys;
```

你需要在创建值的任何位置添加类型断言，它仍然可以使用 `string` 别名，并且会失去类型的安全性。

### 如何防止两种类型在结构上兼容

> 我写下这段代码，并期望它抛出错误

```ts
interface ScreenCoordinate {
  x: number;
  y: number;
}
interface PrintCoordinate {
  x: number;
  y: number;
}
function sendToPrinter(pt: PrintCoordinate) {
  // ...
}
function getCursorPos(): ScreenCoordinate {
  // Not a real implementation
  return { x: 0, y: 0 };
}
// This should be an error
sendToPrinter(getCursorPos());
```

如果你真的希望两种类型不兼容，有一种方式添加一个 「brand」 成员：

```ts
interface ScreenCoordinate {
  _screenCoordBrand: any;
  x: number;
  y: number;
}
interface PrintCoordinate {
  _printCoordBrand: any;
  x: number;
  y: number;
}

// Error
sendToPrinter(getCursorPos());
```

 请注意，这将需要在创建「brand」的地方使用类型断言：

```ts
function getCursorPos(): ScreenCoordinate {
  // Not a real implementation
  return <ScreenCoordinate>{ x: 0, y: 0 };
}
```

另外你也可以查看此 [#202](https://github.com/Microsoft/TypeScript/issues/202) 来获取更多有关于解决此问题的办法；

### 如果对象实现了某个接口，我怎么在运行时检查

> 我写下了像下面的一段代码

```ts
interface SomeInterface {
  name: string;
  length: number;
}
interface SomeOtherInterface {
  questions: string[];
}

function f(x: SomeInterface | SomeOtherInterface) {
  // Can't use instanceof on interface, help?
  if (x instanceof SomeInterface) {
    // ...
  }
}
```

在编译时期， TypeScript 的类型被删除。这意味着没有用于执行运行时类型检查的内置机制。这完全取决与你想如何鉴别对象。一个比较广泛的用法是检查某个对象里的属性。你可以使用用户定义的类型保护来实现它：

```ts
function isSomeInterface(x: any): x is SomeInterface {
  return typeof x.name === 'string' && typeof x.length === 'number';

function f(x: SomeInterface|SomeOtherInterface) {
  if (isSomeInterface(x)) {
    console.log(x.name); // Cool!
  }
}
```

### 为什么错误的转化不会引起运行时的错误

> 我写下一些代码：

```ts
let x: any = true;
let y = <string>x; // Expected: runtime error (can't convert boolean to string)
```

或者是这样：

```ts
let a: any = 'hmm';
let b = a as HTMLElement; // expected b === null
```

TypeScript 拥有类型断言，但这并不是一个「casts」 `<T> x` 的意思：“TypeScript，请将 `x` 的类型认为是 `T`，而不是执行类型安全的运行时转换。因为类型被删除，没有直接等价于 C# 的 `expr as` 或者是 `(type)expr` 的语法。
