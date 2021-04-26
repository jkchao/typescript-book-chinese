# `lib.d.ts`

当你安装 `TypeScript` 时，会顺带安装一个 `lib.d.ts` 声明文件。这个文件包含 JavaScript 运行时以及 DOM 中存在各种常见的环境声明。

- 它自动包含在 TypeScript 项目的编译上下文中；
- 它能让你快速开始书写经过类型检查的 JavaScript 代码。

你可以通过指定 `--noLib` 的编译器命令行标志（或者在 `tsconfig.json` 中指定选项 `noLib: true`）从上下文中排除此文件。

## 使用例子

看如下例子：

```ts
const foo = 123;
const bar = foo.toString();
```

这段代码的类型检查正常，因为 `lib.d.ts` 为所有 JavaScript 对象定义了 `toString` 方法。

如果你在 `noLib` 选项下，使用相同的代码，这将会出现类型检查错误：

```ts
const foo = 123;
const bar = foo.toString(); // Error: 属性 toString 不存在类型 number 上
```

现在你已经理解了 `lib.d.ts` 的重要性，至于它的内容是怎么样的，我们接下来将会解释。

## 观察 `lib.d.ts` 的内容

`lib.d.ts` 的内容主要是一些变量声明（如：`window`、`document`、`math`）和一些类似的接口声明（如：`Window`、`Document`、`Math`）。

寻找代码类型（如：`Math.floor`）的最简单方式是使用 IDE 的 `F12`（跳转到定义）。

让我们来看一个变量声明的示例，如 `window` 被定义为：

```ts
declare var window: Window;
```

这只是一个简单的 `declare var`，后面跟一个变量名称（`window`）和一个用来类型注解的接口（`Window`），这些变量通常指向一些全局的接口，例如，以下是 `Window` 接口的一小部分：

```ts
interface Window
  extends EventTarget,
    WindowTimers,
    WindowSessionStorage,
    WindowLocalStorage,
    WindowConsole,
    GlobalEventHandlers,
    IDBEnvironment,
    WindowBase64 {
  animationStartTime: number;
  applicationCache: ApplicationCache;
  clientInformation: Navigator;
  closed: boolean;
  crypto: Crypto;
  // so on and so forth...
}
```

你可以在这些接口里看到大量的类型信息，当你不使用 TypeScript 时，你需要将它们保存在你的大脑里。现在你可以使用 `intellisense` 之类东西，从而可以减少对知识的记忆。

使用这些全局变量是有利的。在不更改 `lib.d.ts` 的情况下，它可以让你添加额外的属性。接下来，我们将介绍这些概念。

## 修改原始类型

在 TypeScript 中，接口是开放式的，这意味着当你想使用不存在的成员时，只需要将它们添加至 `lib.d.ts` 中的接口声明中即可，TypeScript 将会自动接收它。注意，你需要在[全局模块](../project/modules.md)中做这些修改，以使这些接口与 `lib.d.ts` 相关联。我们推荐你创建一个称为 `global.d.ts` 的特殊文件。

这里有我们需要添加至 `Window`，`Math`，`Date` 的一些例子：

### Window

仅仅是添加至 `Window` 接口：

```ts
interface Window {
  helloWorld(): void;
}
```

这将允许你以类型安全的形式使用它：

```ts
// Add it at runtime
window.helloWorld = () => console.log('hello world');

// Call it
window.helloWorld();

// 滥用会导致错误
window.helloWorld('gracius'); // Error: 提供的参数与目标不匹配
```

### Math

全局变量 `Math` 在 `lib.d.ts` 中被定义为：

```ts
/** An intrinsic object that provides basic mathematics functionality and constants. */
declare var Math: Math;
```

即变量 `Math` 是 `Math` 的一个实例，`Math` 接口被定义为：

```ts
interface Math {
  E: number;
  LN10: number;
  // others ...
}
```

当你想在 `Math` 全局变量上添加你需要的属性时，你只需要把它添加到 `Math` 的全局接口上即可，例如：在[`seedrandom Project`](https://www.npmjs.com/package/seedrandom)项目里，它添加了 `seedrandom` 函数至全局的 `Math` 对象上，这很容易被声明：

```ts
interface Math {
  seedrandom(seed?: string): void;
}
```

你可以像下面一样使用它：

```ts
Math.seedrandom();

Math.seedrandom('Any string you want');
```

### Date

如果你在 `lib.d.ts` 中寻找 `Date` 定义的声明，你将会找到如下代码：

```ts
declare var Date: DateConstructor;
```

接口 `DateConstructor` 与上文中 `Math` 和 `Window` 接口一样，它涵盖了可以使用的 `Date` 全局变量的成员（如：`Date.now()`）。除此之外，它还包含了可以让你创建 `Date` 实例的构造函数签名（如：`new Date()`）。`DateConstructor` 接口的一部分代码如下所示：

```ts
interface DateConstructor {
  new (): Date;
  // 一些其他的构造函数签名

  now(): number;

  // 其他成员函数
}
```

在 [datejs](https://github.com/abritinthebay/datejs) 里，它在 `Date` 的全局变量以及 `Date` 实例上同时添加了成员，因此这个库的 TypeScript 定义看起来像如下所示（社区已经[定义](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/datejs/index.d.ts)好了）：

```ts
// DateJS 公开的静态方法
interface DateConstructor {
  /** Gets a date that is set to the current date. The time is set to the start of the day (00:00 or 12:00 AM) */
  today(): Date;
  // ... so on and so forth
}

// DateJS 公开的实例方法
interface Date {
  /** Adds the specified number of milliseconds to this instance. */
  addMilliseconds(milliseconds: number): Date;
  // ... so on and so forth
}
```

这允许你在类型安全的情况下做：

```ts
const today = Date.today();
const todayAfter1second = today.addMilliseconds(1000);
```

### string

如果你在 `lib.d.ts` 里寻找 `string`，你将会找到与 `Date` 相类似的内容（全局变量 `String`，`StringConstructor` 接口，`String` 接口）。但值得注意的是，`String` 接口也会影响字符串字面量，如下所示：

```ts
interface String {
  endsWith(suffix: string): boolean;
}

String.prototype.endsWith = function(suffix: string): boolean {
  const str: string = this;
  return str && str.indexOf(suffix, str.length - suffix.length) !== -1;
};

console.log('foo bar'.endsWith('bas')); // false
console.log('foo bas'.endsWith('bas')); // true
```

### 终极 string

基于可维护性，我们推荐创建一个 `global.d.ts` 文件。然而，如果你愿意，你可以通过使用 `declare global { /* global namespace */ }`，从文件模块中进入全局命名空间：

```ts
// 确保是模块
export {};

declare global {
  interface String {
    endsWith(suffix: string): boolean;
  }
}

String.prototype.endsWith = function(suffix: string): boolean {
  const str: string = this;
  return str && str.indexOf(suffix, str.length - suffix.length) !== -1;
};

console.log('foo bar'.endsWith('bas')); // false
console.log('foo bas'.endsWith('bas')); // true
```

## 使用你自己定义的 `lib.d.ts`

正如上文所说，使用 `--noLib` 编译选项会导致 TypeScript 排除自动包含的 `lib.d.ts` 文件。为什么这个功能是有效的，我例举了一些常见原因：

- 运行的 JavaScript 环境与基于标准浏览器运行时环境有很大不同；
- 你希望在代码里严格的控制全局变量，例如：`lib.d.ts` 将 `item` 定义为全局变量，你不希望它泄漏到你的代码里。

一旦你排除了默认的 `lib.d.ts` 文件，你就可以在编译上下文中包含一个命名相似的文件，TypeScript 将提取该文件进行类型检查。

::: tip
小心使用 `--noLib` 选项，一旦你使用了它，当你把你的项目分享给其他人时，它们也将被迫使用 `--noLib` 选项，更糟糕的是，如果将这些代码放入你的项目中，你可能需要将它们移植到基于你的代码的 `lib` 中。
:::

## 编译目标对 `lib.d.ts` 的影响

设置编译目标为 `es6` 时，能导致 `lib.d.ts` 包含更多像 Promise 现代（es6）内容的环境声明。编译器目标的这种作用，改变了代码的环境，这对某些人来说是理想的，但是这对另外一些人来说造成了困扰，因为它将编译出的代码与环境混为一谈。

当你想对环境进行更细粒的控制时，你应该使用我们接下来将要讨论的 `--lib` 选项。

## `--lib` 选项

有时，你想要解耦编译目标（即生成的 JavaScript 版本）和环境库支持之间的关系。例如对于 Promise，你的编译目标是 `--target es5`，但是你仍然想使用它，这时，你可以使用 `lib` 对它进行控制。

::: tip
使用 `--lib` 选项可以将任何 `lib` 与 `--target` 解耦。
:::

你可以通过命令行或者在 `tsconfig.json` 中提供此选项（推荐）：

### 命令行

```ts
tsc --target es5 --lib dom,es6
```

### config.json

```json
"compilerOptions": {
    "lib": ["dom", "es6"]
}
```

`lib` 分类如下：

- JavaScript 功能
  - es5
  - es6
  - es2015
  - es7
  - es2016
  - es2017
  - esnext
- 运行环境
  - dom
  - dom.iterable
  - webworker
  - scripthost
- ESNext 功能选项
  - es2015.core
  - es2015.collection
  - es2015.generator
  - es2015.iterable
  - es2015.promise
  - es2015.proxy
  - es2015.reflect
  - es2015.symbol
  - es2015.symbol.wellknown
  - es2016.array.include
  - es2017.object
  - es2017.sharedmemory
  - esnext.asynciterable

::: tip NOTE

`--lib` 选项提供非常精细的控制，因此你最有可能从运行环境与 JavaScript 功能类别中分别选择一项，如果你没有指定 `--lib`，则会导入默认库：

- `--target` 选项为 es5 时，会导入 es5, dom, scripthost。
- `--target` 选项为 es6 时，会导入 es6, dom, dom.iterable, scripthost。

:::

我个人的推荐：

```json
"compilerOptions": {
  "target": "es5",
  "lib": ["es6", "dom"]
}
```

包括使用 Symbol 的 ES5 使用例子：

```json
"compilerOptions": {
  "target": "es5",
  "lib": ["es5", "dom", "scripthost", "es2015.symbol"]
}
```

## 在旧的 JavaScript 引擎时使用 Polyfill

> [关于此主题的一个视频](https://egghead.io/lessons/typescript-using-es6-and-esnext-with-typescript)

要使用一些新功能如 `Map`、`Set`、`Promise`（随着时间推移会变化），你可以使用现代的 `lib` 选项，并且需要安装 `core-js`：

```shell
npm install core-js --save-dev
```

接着，在你的项目里导入它：

```ts
import 'core-js';
```
