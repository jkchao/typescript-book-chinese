# TypeScript 3.7

## 可选链（Optional Chaining）

在我们的 issue 追踪器中，可选链在 [issue #16](https://github.com/microsoft/TypeScript/issues/16) 中，自那以后，有超过 23000 条 issues 被记录在 issue 中。

可选链的核心是允许我们写下如果碰到 `null` 或者 `undefined`，TypeScript 能立即停止运行的代码。可选链耀眼的部分是使用 `?.` 运算符来访问一个可选属性的运算符。

下面代码：

```ts
let x = foo?.bar.baz();
```

告诉我们，当 `foo` 被定义了，`foo.bar.baz()` 将会执行完成；但是当 `foo` 是 `null` 或者 `undefined` 时，TypeScript 会立即停止运行，并且仅仅是返回 `undefined`。

也就是说，上文的代码等效于如下代码：

```ts
let x = foo === null || foo === undefined ? undefined : foo.bar.baz();
```

注意，如果 `bar` 是 `null` 或者 `undefined`，在访问 `bar` 时，我们的代码仍然会抛出一个错误。

与此相似，如果 `baz` 是 `null` 或者 `undefined`，在调用时，它也会抛出一个错误。`?.` 只会检查它左边的值是 `undefined` 还是 `null` - 并不会检查后面的任何属性。

你可能已经发现你可以使用 `?.` 来替代很多使用 `&&` 执行空检查的代码：

```ts
// Before
if (foo && foo.bar && foo.bar.baz) {
    // ...
}

// After-ish
if (foo?.bar?.baz) {
    // ...
}
```

注意：`?.` 与 `&&` 运算符行为略有不同，因为 `&&` 专用于 "falsy" 的值（如：空字符串、`0`、`NaN`、和 `false`），但是 `?.` 是一个仅作用于结构上的操作符，`?.` 在验证有效数据如 `0` 或者空字符串时，它并没有使用短路验证的方式。

可选链还包含另外两个运算符，首先是可选元素的访问，它的行为类似于可选属性的访问，但是它允许我们访问非标志符属性（例如：任意的字符串、数字和 symbols）：

```ts
/**
 * Get the first element of the array if we have an array.
 * Otherwise return undefined.
 */
function tryGetFirstElement<T>(arr?: T[]) {
    return arr?.[0];
    // equivalent to
    //   return (arr === null || arr === undefined) ?
    //       undefined :
    //       arr[0];
}
```

另外一个是可选调用，它能让我们有条件的调用表达式：

```ts
async function makeRequest(url: string, log?: (msg: string) => void) {
    log?.(`Request started at ${new Date().toISOString()}`);
    // roughly equivalent to
    //   if (log != null) {
    //       log(`Request started at ${new Date().toISOString()}`);
    //   }

    const result = (await fetch(url)).json();

    log?.(`Request finished at at ${new Date().toISOString()}`);

    return result;
}
```

可选链的「短路运算」行为被局限在属性的访问、调用以及元素的访问 --- 它不会沿伸到后续的表达式中，也就是说：

```ts
let result = foo?.bar / someComputation()
```

可选链不会阻止除法运算或者 `someComputation()` 调用，它等价于：

```ts
let temp = foo === null || foo === undefined ? undefined : foo.bar;

let result = temp / someComputation();
```

它可能会导致除法运算的结果是 `undefined`，这就是为什么在 `strictNullChecks` 选项下，会抛出一个错误：

```ts
function barPercentage(foo?: { bar: number }) {
    return foo?.bar / 100;
    //     ~~~~~~~~
    // Error: Object is possibly undefined.
}
```

更多的信息，你可以阅读 [proposal](https://github.com/tc39/proposal-optional-chaining/) 以及该原始的 [PR](https://github.com/microsoft/TypeScript/pull/33294)

## Nullish Coalescing

nullish coalescing 运算符是另一个即将推出的 ECMAScript 功能，它与 Optional chaining 一同被推出，并且我们团队一直参与了 TC39 的有关讨论。

你可以这么想它的功能 - `??` 运算符 - 当处理 `null` 或者 `undefined` 时，它可以作为一种「倒退」到默认值的方式，当我们写下如下代码：

```ts
let x = foo ?? bar();
```

这种方式来表示当 `foo` 值存在时，`foo` 会被使用，但是当它是 `null` 或 `undefined`，它会计算 `bar()`。

它等价于如下代码：

```ts
let x = foo !== null && foo !== undefined ? foo : bar();
```

当尝试使用一个默认值时，`??` 运算符可以被 `||` 替代。例如，在下面的代码片段中，当尝试获取最后一次储存在 localStorage 中的 `volume` 时（如果它存在）；但是当使用 `||`，这会有个 bug：

```ts
function initializeAudio() {
  let volume = localStorage.volume || 0.5;

  // ...
}
```

当 `localStore.volume` 的值是 `0` 时，在这段代码里，将会把 `volume` 的值设置为 `0.5`。`??` 运算符能避免一些从 `0`、`NaN` 以及`''` 这些被认为是 `falsy` 值的意外行为。

## 断言函数

有一类特定的函数，在非预期结果出现时会抛出一个错误。这类函数就叫做断言函数。例如，Node.js 有一个专用的断言函数叫 `assert`。

```js
assert(someValue === 42);
```

在这个示例中，如果 `someValue` 不等于 `42`，那么 `assert` 就会抛出一个 `AssertionError`。

JavaScript 中的断言经常用于确保传入的是正确的类型。
比如，

```js
function multiply(x, y) {
  assert(typeof x === 'number');
  assert(typeof y === 'number');

  return x * y;
}
```

不幸的是，在 TypeScript 中,这些检查可能从来不会被正确的编写。对于松散类型代码，意味着 TypeScript 检查较少，而对于稍微规范一些的写法，一般要求使用者添加类型断言。

```ts
function yell(str) {
  assert(typeof str === 'string');

  return str.toUppercase();
  // Oops! We misspelled 'toUpperCase'.
  // Would be great if TypeScript still caught this!
}
```

这里有可供选择的替代写法，可以让 TypeScript 分析出问题，不过并不方便。

```ts
function yell(str) {
  if (typeof str !== 'string') {
    throw new TypeError('str should have been a string.');
  }
  // Error caught!
  return str.toUppercase();
}
```

TypeScript 的目标是以最小的改动为现存的 JavaScript 结构添加类型声明。因此，TypeScript 3.7 引入了一个「断言签名（assertion signatures）」的新概念，用来模拟这些断言函数。

第一种断言签名，模拟 Node 中的 `assert` 函数的功能。它确保在断言的范围内，断言条件必须为这个真。

```ts
function assert(condition: any, msg?: string): asserts condition {
    if (!condition) {
        throw new AssertionError(msg)
    }
}
```

`asserts condition` 的意思是，如果 `assert` 函数有返回，传入 `condition` 的参数必须为真，因为如果不是这样，它肯定会抛出一个错误。这意味着，在剩下的作用域中（if 条件后）`condition` 必须为 `truthy`。

举一个例子，用这个断言函数意味着我们可以实现捕获之前的 `yell` 示例的错误。

```ts
function yell(str) {
    assert(typeof str === "string");

    return str.toUppercase();
    //         ~~~~~~~~~~~
    // error: Property 'toUppercase' does not exist on type 'string'.
    //        Did you mean 'toUpperCase'?
}

function assert(condition: any, msg?: string): asserts condition {
    if (!condition) {
        throw new AssertionError(msg)
    }
}
```

另外一种断言签名不是用来校验一个条件，而是告诉 TypeScript 某个变量或属性有不同的类型。

```ts
function assertIsString(val: any): asserts val is string {
    if (typeof val !== "string") {
        throw new AssertionError("Not a string!");
    }
}
```

这里 `asserts val is string` 确保在 `assertIsString` 在被调用之后, 任何传入的变量将被认为是一个 `string`.

```ts
function yell(str: any) {
  assertIsString(str);

  // Now TypeScript knows that 'str' is a 'string'.

  return str.toUppercase();
  //         ~~~~~~~~~~~
  // error: Property 'toUppercase' does not exist on type 'string'.
  //        Did you mean 'toUpperCase'?
}
```

这里的断言签名非常类似于类型谓词（predicate）签名：

```ts
function isString(val: any): val is string {
  return typeof val === 'string';
}

function yell(str: any) {
  if (isString(str)) {
    return str.toUppercase();
  }
  throw 'Oops!';
}
```

就像类型谓词签名一样，这些断言签名非常强大的。我们可以用它们实现一些非常复杂的想法和设计。

```ts
function assertIsDefined<T>(val: T): asserts val is NonNullable<T> {
    if (val === undefined || val === null) {
        throw new AssertionError(
            `Expected 'val' to be defined, but received ${val}`
        );
    }
}
```

想阅读更多断言签名相关内容， [签出原始的 pull request](https://github.com/microsoft/TypeScript/pull/32695).

## 更好的支持返回函数的 `never`

为了能使断言签名工作，其中的一个工作是，TypeScript 需要对调用时的函数，以及位置信息编码更多的信息。这给了我们扩展另一类函数的机会：返回 `never` 的函数。

返回为 `never` 的函数，即是永远没有返回的函数。它表明抛出了异常、由于错误发生暂停、或者程序退出的情况。例如：[`process.exit(...)` 中的 `@types/node`](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/5299d372a220584e75a031c13b3d555607af13f8/types/node/globals.d.ts#l874) 指定返回为 `never`。

为了确保函数永远不会返回潜在的 `undefined`，或者从所有的代码路径中有效返回，TypeScript 需要一些句法（syntactic）信号 - 可以是函数末尾的 `return` 或者 `thorw`。因此使用者就会发现自己正在返回它们的故障函数：

```ts
function dispatch(x: string | number): SomeType {
  if (typeof x === 'string') {
    return doThingWithString(x);
  } else if (typeof x === 'number') {
    return doThingWithNumber(x);
  }
  return process.exit(1);
}
```

现在，当函数被调用时，TypeScript 能识别出它们会影响的流程并说明原因。

```ts
function dispatch(x: string | number): SomeType {
  if (typeof x === 'string') {
    return doThingWithString(x);
  } else if (typeof x === 'number') {
    return doThingWithNumber(x);
  }
  process.exit(1);
}
```

与断言函数一样，具体详情，你可以查看此 [PR](https://github.com/microsoft/TypeScript/pull/32695)

## 递归的类型别名

类型别名在如何“递归”引用方面一直存在局限性，原因在于对类型别名的任何使用都必须能够用这个来代替自己。在某些情况下，这是不可能的，因此编译器，会拒绝某些别名的递归：

```ts
type Foo = Foo;
```

这是一个合理的限制，因为 `Foo` 的任何使用都可以被 `Foo` 替代，`Foo` 的任何使用都可以被 `Foo` 替代（无限循环），到最后，没有类型可以替代 `Foo`

这与其他语言处理类型别名时是一致的。但是在用户如何利用该功能方面，它确实造成了一些令人疑惑的情景，例如，在 TypeScript 3.6 及其以下版本时，下面的代码会抛出错误：

```ts
type ValueOrArray<T> = T | Array<ValueOrArray<T>>;
//   ~~~~~~~~~~~~
// error: Type alias 'ValueOrArray' circularly references itself.
```

这很令人疑惑，因为从技术上讲，这没有错误。使用者也可以通过引入接口的方式来实现上述中相同作用的代码：

```ts
type ValueOrArray<T> = T | ArrayOfValueOrArray<T>;

interface ArrayOfValueOrArray<T> extends Array<ValueOrArray<T>> {}
```

因为接口（和其他对象类型）引入了一个中间类型，并且不需要立马构建它们的完整结构，因此 TypeScript 在使用这种结构时没有问题。但是对于使用者来说，引入一个中间类型来说，并不是很直观。原则上，直接使用 `Array` 的 `ValueOrArray` 的原始版本确实没有任何问题。假如编译器有一点“偷懒”，并且只在必要时才计算 `Array` 的类型参数，则 TypeScript 可以正确表示出这些。

这正是 TypeScript 3.7 所引入的内容，在最顶级的类型别名中，TypeScript 将会推迟解析类型参数，已允许这种情况的发生。

这意味着，以下代码能成立：

```ts
type Json = string | number | boolean | null | JsonObject | JsonArray;

interface JsonObject {
  [property: string]: Json;
}

interface JsonArray extends Array<Json> {}
```

在没有中间 interface 时，能重写为以下形式：

```ts
type Json = string | number | boolean | null | { [property: string]: Json } | Json[];
```

这种新的行为，可以让我们在元组中递归使用类型别名，下面的代码，在以前会抛出错误，但是现在是有效的：

```ts
type VirtualNode = string | [string, { [key: string]: any }, ...VirtualNode[]];

const myNode: VirtualNode = [
  'div',
  { id: 'parent' },
  ['div', { id: 'first-child' }, "I'm the first child"],
  ['div', { id: 'second-child' }, "I'm the second child"]
];
```

更多信息，你可以查看 [PR](https://github.com/microsoft/TypeScript/pull/33050)。

## `--declaration` and `--allowJs`

`--declaration` 选项可以让我们从 TypeScript 源文件（如 `.ts`、`.tsx` 文件）中生成 `.d.ts`（声明文件）。这些 `.d.ts` 文件为什么很重要，有以下原因：

首先，它们允许 TypeScript 在不需要重新检查源代码的情况下，能对其他项目进行类型检查。其次，它们允许 TypeScript 与没有使用 TypeScript 构建的 JavaScript 库之间更好的协作。最后，一个被经常忽略小细节：当使用由 TypeScript 驱动的编辑器来获得一些更好功能（比如自动完成）时，TypeScript 和 JavaScript 用户都可以从这些文件中受益。

不幸的是，`--declaration` 与 `--allowJs` 并不能一起使用，`--declaration` 选项会混合 TypeScript 和 JavaScript 输入文件。这是一个令人沮丧的限制，因为它意味着用户在迁移代码库时，不能使用 `--declaration` 选项，即使是使用了 JSDoc 形式的注释。TypeScript 3.7 改变了此行为，它能让两个选项同时使用。

此功能带来最有影响力的结果，可能并不容易被发现：在 TypeScript 3.7 中，用户在 JavaScript 库中写的 JSDoc 注释，能帮助 TypeScript 用户。

它之所以能实现，是因为：当使用 `allowJs` 时，TypeScript 会尽可能的分析代码来了解常见的 JavaScript 模式。然而，一些在 JavaScript 能表示的模式，并不一定能在 TypeScript 等效表示出来。当 `declaration` 选项打开时，TypeScript 会找出将 JSDoc 注释和 CommonJS 输出到 `.d.ts` 文件中的类型声明的最佳方式。

请看如下例子：

```js
const assert = require('assert');

module.exports.blurImage = blurImage;

/**
 * Produces a blurred image from an input buffer.
 *
 * @param input {Uint8Array}
 * @param width {number}
 * @param height {number}
 */
function blurImage(input, width, height) {
  const numPixels = width * height * 4;
  assert(input.length === numPixels);
  const result = new Uint8Array(numPixels);

  // TODO

  return result;
}
```

将会产生如下的 `.d.ts`

```ts
/**
 * Produces a blurred image from an input buffer.
 *
 * @param input {Uint8Array}
 * @param width {number}
 * @param height {number}
 */
export function blurImage(input: Uint8Array, width: number, height: number): Uint8Array;
```

使用 `@param` 注解也有益处：

```js
/**
 * @callback Job
 * @returns {void}
 */

/** Queues work */
export class Worker {
  constructor(maxDepth = 10) {
    this.started = false;
    this.depthLimit = maxDepth;
    /**
     * NOTE: queued jobs may add more items to queue
     * @type {Job[]}
     */
    this.queue = [];
  }
  /**
   * Adds a work item to the queue
   * @param {Job} work
   */
  push(work) {
    if (this.queue.length + 1 > this.depthLimit) throw new Error('Queue full!');
    this.queue.push(work);
  }
  /**
   * Starts the queue if it has not yet started
   */
  start() {
    if (this.started) return false;
    this.started = true;
    while (this.queue.length) {
      /** @type {Job} */ (this.queue.shift())();
    }
    return true;
  }
}
```

将会生成如下 `.d.ts`

```ts
/**
 * @callback Job
 * @returns {void}
 */
/** Queues work */
export class Worker {
  constructor(maxDepth?: number);
  started: boolean;
  depthLimit: number;
  /**
   * NOTE: queued jobs may add more items to queue
   * @type {Job[]}
   */
  queue: Job[];
  /**
   * Adds a work item to the queue
   * @param {Job} work
   */
  push(work: Job): void;
  /**
   * Starts the queue if it has not yet started
   */
  start(): boolean;
}
export type Job = () => void;
```

注意，如果你想一起使用这些选项，TypeScript 不需要含有对应的 `.js` 文件，如果只是需要 TypeScript 生成简单的 `.d.ts` 文件，使用 `--emitDeclarationOnly` 选项即可。

更多详情，请参考 [PR](https://github.com/microsoft/TypeScript/pull/32372)

For more details, you can [check out the original pull request](https://github.com/microsoft/TypeScript/pull/32372).

## `useDefineForClassFields` 标记与 `declare` 属性修饰符

当在 TypeScript 中实现 class 中的公有字段时，我们尽可能的实现了以下代码功能：

```ts
class C {
  foo = 100;
  bar: string;
}
```

它等同于构造函数内的相似语句：

```ts
class C {
  constructor() {
    this.foo = 100;
  }
}
```

不幸的是，虽然这是 TC39 早期提案的发展方向，但是极有可能对于公共 class 字段有不同的标准化方向。因此，原始的代码可能会被编译成如下代码：

```ts
class C {
  constructor() {
    Object.defineProperty(this, 'foo', {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 100
    });
    Object.defineProperty(this, 'bar', {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
}
```

当然 TypeScript 3.7 版本在默认情况下编译出的代码不会有任何改变（与以前版本相同），我们一直在逐步更改，来帮助用户减少可能发生的破坏性更改。我们提供来一个新的标志 `useDefineForClassFields` 来使用此种模式，并带有一些新的逻辑检查。

最大的两个改变如下：

- 使用 `Object.defineProperty` 来初始化声明。
- 初始化的值都是 undefined，即使是它们没有被初始化。

对于使用继承的代码来说，这可能会造成很多问题。首先，来自于基类的 set 访问器，不再会被触发 -- 它可能会被完全重写。

```ts
class Base {
  set data(value: string) {
    console.log('data changed to ' + value);
  }
}

class Derived extends Base {
  // No longer triggers a 'console.log'
  // when using 'useDefineForClassFields'.
  data = 10;
}
```

其次，在基类中使用一个类字段来专门指定一个属性，它也不会正常工作。

```ts
interface Animal {
  animalStuff: any;
}
interface Dog extends Animal {
  dogStuff: any;
}

class AnimalHouse {
  resident: Animal;
  constructor(animal: Animal) {
    this.resident = animal;
  }
}

class DogHouse extends AnimalHouse {
  // Initializes 'resident' to 'undefined'
  // after the call to 'super()' when
  // using 'useDefineForClassFields'!
  resident: Dog;

  constructor(dog: Dog) {
    super(dog);
  }
}
```

这两个问题，可以归结为在没有初始化的情况下，混合属性与访问器时，将会有重复声明出现。

为了检查访问器是否有上述问题，TypeScript 3.7 将会在 .d.ts 中编译出 `get`/`set`，于是 TypeScript 能够检查出是否有重写访问器的问题。

```ts
class Base {
  set data(value: string) {
    console.log('data changed to ' + value);
  }
}

class Derived extends Base {
  constructor() {
    data = 10;
  }
}
```

为了解决第二个问题，你可以添加一个显示的初始化值，或者添加一个 `declare` 修饰符来表明该属性不会被编译出任何值。

```ts
interface Animal {
  animalStuff: any;
}
interface Dog extends Animal {
  dogStuff: any;
}

class AnimalHouse {
  resident: Animal;
  constructor(animal: Animal) {
    this.resident = animal;
  }
}

class DogHouse extends AnimalHouse {
  declare resident: Dog;
  //      ^^^^^^^^
  // 'resident' now has a 'declare' modifier,
  // and won't produce any output code.

  constructor(dog: Dog) {
    super(dog);
  }
}
```

现在，只有当编译目标是 ES5 及其以上时，`useDefineForClassFields` 编译选项才可用，因为 ES3 并没有 `Object.defineProperty`。要实现类似的问题检查，你可以创建一个编译目标为 ES5 并且使用 `--noEmit` 来避免完全构建的单独项目。

更多的信息，你可以查看此 [PR](https://github.com/microsoft/TypeScript/pull/33509)。

## 编辑有项目引用的项目，无需构建

TypeScript 的项目引用功能给我们提供了一个方便的方式来拆分代码库，从而能让我们能实现更快地编译。
遗憾的是，当我们编辑一个依赖未被构建（或者构建结果已过期）的项目时，会得到不好的编辑体验。

在 TypeScript 3.7 中，当打开一个有依赖的项目时，TypeScript 将会自动地使用原始 `.ts`/`.tsx` 文件来代替。
这意味着在有依赖引用的项目中，代码的修改会马上同步和生效，从而编辑体验会有所提升，

你可以打开编译器选项 `disableSourceOfProjectReferenceRedirect` 来禁用这个引用的功能，因为在超大型项目中这个功能可能会影响性能。

你可以 [阅读它的 pull request，获取更多相关信息](https://github.com/microsoft/TypeScript/pull/32028).

## 没有调用的函数检查

一个常见且危险的错误是忘记调用一个函数，特别是当函数具有零参数或用暗示它可能是属性而不是函数的方式名称时。

```ts
interface User {
  isAdministrator(): boolean;
  notify(): void;
  doNotDisturb?(): boolean;
}

// later...

// Broken code, do not use!
function doAdminThing(user: User) {
  // oops!
  if (user.isAdministrator) {
    sudo();
    editTheConfiguration();
  } else {
    throw new AccessDeniedError('User is not an admin');
  }
}
```

在这里，我们忘记调用 `isAdministrator`，该代码错误的允许非管理员用户编辑配置。

在 TypeScript 3.7 中，它就会抛出错误：

```ts
function doAdminThing(user: User) {
    if (user.isAdministrator) {
    //  ~~~~~~~~~~~~~~~~~~~~
    // error! This condition will always return true since the function is always defined.
    //        Did you mean to call it instead?
```

这个检查是一个破坏性的更改，因此这个错误仅仅是发生在 `if` 条件语句中，并且如果 `strictNullChecks` 关闭或者在 if 块中，函数有被调用，不会发出此错误。

```ts
interface User {
  isAdministrator(): boolean;
  notify(): void;
  doNotDisturb?(): boolean;
}

function issueNotification(user: User) {
  if (user.doNotDisturb) {
    // OK, property is optional
  }
  if (user.notify) {
    // OK, called the function
    user.notify();
  }
}
```

如果你想在没有调用函数的前提下，对它进行测试。你可以修改它的声明，让它可能是 `undefined/null`，或者使用 `!!` 来写下一些 `if(!!user.isAdministrator)` 来表明这种行为是故意的。
