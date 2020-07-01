# TypeScript 3.8

[TypeScript 3.8](http://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-8.html) 将会带来了许多特性，其中包含一些新的或即将到来的 ECMAScript 特性、仅仅导入/导出声明语法等。

## 仅仅导入/导出声明

为了能让我们导入类型，TypeScript 重用了 JavaScript 导入语法。例如在下面的这个例子中，我们确保 JavaScript 的值 `doThing` 以及 TypeScript 类型 `Options` 一同被导入

```ts
// ./foo.ts
interface Options {
  // ...
}

export function doThing(options: Options) {
  // ...
}

// ./bar.ts
import { doThing, Options } from './foo.js';

function doThingBetter(options: Options) {
  // do something twice as good
  doThing(options);
  doThing(options);
}
```

这很方便的，因为在大多数的情况下，我们不必担心导入了什么 —— 仅仅是我们想导入的内容。

遗憾的是，这仅是因为一个被称之为「导入省略」的功能而起作用。当 TypeScript 输出一个 JavaScript 文件时，TypeScript 会识别出 `Options` 仅仅是当作了一个类型来使用，它将会删除 `Options`

```ts
// ./foo.js
export function doThing(options: Options) {
  // ...
}

// ./bar.js
import { doThing } from './foo.js';

function doThingBetter(options: Options) {
  // do something twice as good
  doThing(options);
  doThing(options);
}
```

在通常情况下，这种行为都是比较好的。但是它会导致一些其他问题。

首先，在一些场景下，TypeScript 会混淆导出的究竟是一个类型还是一个值。比如在下面的例子中， `MyThing` 究竟是一个值还是一个类型？

```ts
import { MyThing } from './some-module.js';

export { MyThing };
```

如果单从这个文件来看，我们无从得知答案。如果 `Mything` 仅仅是一个类型，Babel 和 TypeScript 使用的 `transpileModule` API 编译出的代码将无法正确工作，并且 TypeScript 的 `isolatedModules` 编译选项将会提示我们，这种写法将会抛出错误。问题的关键在于，没有一种方式能识别它仅仅是个类型，以及是否应该删除它，因此「导入省略」并不够好。

同时，这也存在另外一个问题，TypeScript 导入省略将会去除只包含用于类型声明的导入语句。对于含有副作用的模块，这造成了明显的不同行为。于是，使用者将会不得不添加一条额外的声明语句，来确保有副作用。

```ts
// This statement will get erased because of import elision.
import { SomeTypeFoo, SomeOtherTypeBar } from './module-with-side-effects';

// This statement always sticks around.
import './module-with-side-effects';
```

一个我们看到的具体例子是出现在 Angularjs（1.x）中， `services` 需要在全局在注册（它是一个副作用），但是导入的 `services` 仅仅用于类型声明中。

```ts
// ./service.ts
export class Service {
  // ...
}
register('globalServiceId', Service);

// ./consumer.ts
import { Service } from './service.js';

inject('globalServiceId', function(service: Service) {
  // do stuff with Service
});
```

结果 `./service.js` 中的代码不会被执行，导致在运行时会被中断。

为了避免这类行为，我们意识到在什么该被导入/删除方面，需要给使用者提供更细粒度的控制。

在 TypeScript 3.8 版本中，我们添加了一个仅仅导入/导出声明语法来作为解决方式。

```ts
import type { SomeThing } from "./some-module.js";

export type { SomeThing };
```

`import type` 仅仅导入被用于类型注解或声明的声明语句，它总是会被完全删除，因此在运行时将不会留下任何代码。与此相似，`export type` 仅仅提供一个用于类型的导出，在 TypeScript 输出文件中，它也将会被删除。

值得注意的是，类在运行时具有值，在设计时具有类型。它的使用与上下文有关。当使用 `import type` 导入一个类时，你不能做类似于从它继承的操作。

```ts
import type { Component } from "react";

interface ButtonProps {
    // ...
}

class Button extends Component<ButtonProps> {
    //               ~~~~~~~~~
    // error! 'Component' only refers to a type, but is being used as a value here.

    // ...
}
```

如果在之前你使用过 Flow，它们的语法是相似的。一个不同的地方是我们添加了一个新的限制条件，来避免可能混淆的代码。

```ts
// Is only 'Foo' a type? Or every declaration in the import?
// We just give an error because it's not clear.

import type Foo, { Bar, Baz } from "some-module";
//     ~~~~~~~~~~~~~~~~~~~~~~
// error! A type-only import can specify a default import or named bindings, but not both.
```

与 `import type` 相关联，我们提供来一个新的编译选项：`importsNotUsedAsValues`，通过它可以来控制没被使用的导入语句将会被如何处理，它的名字是暂定的，但是它提供来三个不同的选项。

- `remove`，这是现在的行为 —— 丢弃这些导入语句。这仍然是默认行为，没有破坏性的更改
- `preserve`，它将会保留所有的语句，即使是从来没有被使用。它可以保留副作用
- `error`，它将会保留所有的导入（与 `preserve` 选项相同）语句，但是当一个值的导入仅仅用于类型时将会抛出错误。如果你想确保没有意外导入任何值，这会是有用的，但是对于副作用，你仍然需要添加额外的导入语法。

对于该特性的更多信息，参考该 [PR](https://github.com/microsoft/TypeScript/pull/35200)。

## ECMAScript 私有字段

TypeScript 3.8 支持在 ECMAScript 中处于 [stage-3](https://github.com/tc39/proposal-class-fields/) 中的私有字段。

```ts
class Person {
    #name: string

    constructor(name: string) {
        this.#name = name;
    }

    greet() {
        console.log(`Hello, my name is ${this.#name}!`);
    }
}

let jeremy = new Person("Jeremy Bearimy");

jeremy.#name
//     ~~~~~
// Property '#name' is not accessible outside class 'Person'
// because it has a private identifier.
```

不同于正常属性（甚至是使用 `private` 修饰符声明的属性），私有字段有一些需要记住的规则：

- 私有字段使用 `#` 字符作为开始，通常，我们也把这些称为私有名称。
- 每个私有字段的名字，在被包含的类中，都是唯一的
- 在 TypeScript 中，像 `public` 和 `private` 修饰符不能用于私有字段
- 私有字段不能在所包含的类之外访问 —— 即使是对于 JavaScript 使用者来说也是如此。通常，我们把这种称为「hard privacy」。

除了「hard privacy」，私有字段的另外一个优点是我们先前提到的唯一性。

正常的属性容易被子类所改写

```ts
class C {
  foo = 10;

  cHelper() {
    return this.foo;
  }
}

class D extends C {
  foo = 20;

  dHelper() {
    return this.foo;
  }
}

let instance = new D();
// 'this.foo' refers to the same property on each instance.
console.log(instance.cHelper()); // prints '20'
console.log(instance.dHelper()); // prints '20'
```

使用私有字段时，你完全不必对此担心，因为每个私有字段，在所包含的类中，都是唯一的

```ts
class C {
    #foo = 10;

    cHelper() {
        return this.#foo;
    }
}

class D extends C {
    #foo = 20;

    dHelper() {
        return this.#foo;
    }
}

let instance = new D();
// 'this.#foo' refers to a different field within each class.
console.log(instance.cHelper()); // prints '10'
console.log(instance.dHelper()); // prints '20'
```

另外有一个值得注意的地方，访问一个有其他类型的私有字段，都将导致 `TypeError`。

```ts
class Square {
    #sideLength: number;

    constructor(sideLength: number) {
        this.#sideLength = sideLength;
    }

    equals(other: any) {
        return this.#sideLength === other.#sideLength;
    }
}

const a = new Square(100);
const b = { sideLength: 100 };

// Boom!
// TypeError: attempted to get private field on non-instance
// This fails because 'b' is not an instance of 'Square'.
console.log(a.equals(b));
```

对于类属性来说，JavaScript 总是允许使用者访问没被声明的属性，而 TypeScript 需要使用者在访问之前先定义声明。使用私有字段时，无论时 `.js` 文件还是 `.ts`，都需要先声明。

```ts
class C {
    /** @type {number} */
    #foo;

    constructor(foo: number) {
        // This works.
        this.#foo = foo;
    }
}
```

更多信息，请查看此 [PR](https://github.com/Microsoft/TypeScript/pull/30829)。

### 该使用哪个？

我们已经收到很多关于「我该使用 `private` 关键字，还是使用 ECMAScript 提供的私有字段 `#` 了？」这类的问题。

像所有其他好的问题一样，答案总是令人遗憾的：它取决你。

在属性方面，TypeScript `private` 修饰符在编译后将会被删除 —— 因此，尽管有数据存在，但是在输出的 JavaScript 代码中没有关于该属性声明的任何编码。在运行时，它的行为就像一个普通的属性。当你使用 `private` 关键字时，私有属性的有关行为只会出现在编译阶段/设计阶段，而对于 JavaScript 消费者来说，则是完全无感知的。

```ts
class C {
  private foo = 10;
}

// This is an error at compile time,
// but when TypeScript outputs .js files,
// it'll run fine and print '10'.
console.log(new C().foo); // prints '10'
//                  ~~~
// error! Property 'foo' is private and only accessible within class 'C'.

// TypeScript allows this at compile-time
// as a "work-around" to avoid the error.
console.log(new C()['foo']); // prints '10'
```

另一方面，ECMAScript 私有属性无法在类之外访问。

```ts
class C {
    #foo = 10;
}

console.log(new C().#foo); // SyntaxError
//                  ~~~~
// TypeScript reports an error *and*
// this won't work at runtime!

console.log(new C()["#foo"]); // prints undefined
//          ~~~~~~~~~~~~~~~
// TypeScript reports an error under 'noImplicitAny',
// and this prints 'undefined'.
```

「hard privacy」对于确保没有人能使用你的任何内部变量是有用的，如果你是一个库的作者，移除或者重命名一个私有字段不会造成任何重大变化。

正如上文所述，使用 ECMAScript 的私有字段，创建子类会更容易，因为它们是**真**私有。当使用 ECMAScript 私有字段时，子类无需担心字段名字的冲突。当使用 TypeScript `private` 属性声明时，使用者仍然需要小心不要覆盖父类中的相同字段。

最后，还有一些你需要考虑的事情，比如你打算让你的代码在哪运行？当前，TypeScript 只有在编译目标为 ECMAScript 2015（ES6）及其以上时，才能支持该私有字段。因为我们在底层使用 `WeakMaps` 实现这种方法 —— `WeakMaps` 并不能以一种不会导致内存泄漏的方式 polyfill。对比而言，TypeScript 的 `private` 声明属性能在所有的编译目标下正常工作 —— 甚至是 ECMAScript 3。

## `export * as ns` 语法

以下方式很常见

```ts
import * as utilities from './utilities.js';
export { utilities };
```

在 ECMAScript 2020 中，添加了一种新的语法来支持该模式：

```TS
export * as utilities from "./utilities.js";
```

这是一次 JavaScript 代码质量的改进，TypeScript 3.8 实现了此语法。

当你的编译目标早于 `es2020` 时，TypeScript 将会按照第一个代码片段输出内容。

## `Top-Level await`

大多数使用 JavaScript 提供 I/O（如 http 请求）的现代环境都是异步的，并且很多现代 API 都返回 `Promise`。尽管它在使操作无阻塞方面有诸多优点，但是它确实在一些如读取文件或外部内容时，会让人厌烦。

```ts
fetch('...')
  .then(response => response.text())
  .then(greeting => {
    console.log(greeting);
  });
```

为了避免使用 `Promise` 中 `.then` 的链式操作符，JavaScript 使用者通常会引入 `async` 函数以使用 `await`，在定义该函数之后，立即调用该函数。

```ts
async function main() {
  const response = await fetch('...');
  const greeting = await response.text();
  console.log(greeting);
}

main().catch(e => console.error(e));
```

为了避免引入 `async` 函数，我们可以使用一个简便的语法，它在即将到来的 ECMAScript feature 中被称为 `top-level await`。

在当前的 JavaScript 中（以及其他具有相似功能的大多数其他语言），`await` 仅仅只能用于 `async` 函数内部。然而，使用 `top-level await` 时，我们可以在一个模块的顶层使用 `await`。

```ts
const response = await fetch('...');
const greeting = await response.text();
console.log(greeting);

// Make sure we're a module
export {};
```

这里有一个细节：`top-level await` 仅仅只能在一个模块的顶层工作 —— 仅当 TypeScript 发现文件代码中含有 `export` 或者 `import` 时，才会认为该文件是一个模块。在一些基础的实践中，你可能需要写下 `export {}` 作为样板，来确保这种行为。

`top-level await` 并不会在你可能期望的所有环境下工作。现在，只有在编译目标选项是 `es2017` 及其以上，`top-level await` 才能被使用，并且 `module` 选项必须为 `esnext` 或者 `system`。

更多相关信息，请查看该 [PR](https://github.com/microsoft/TypeScript/pull/35813)。

## JSDoc 属性修饰符

TypeScript 3.8 通过打开 `allowJs` 选项，能支持 JavaScript 文件，并且当使用 `checkJs` 选项或者在你的 `.js` 文件顶部中添加 `// @ts-check` 注释时，TypeScript 能对这些 `.js` 文件进行类型检查。

由于 JavaScript 文件没有专用的语法来进行类型检查，因此 TypeScript 选择利用 JSDoc。TypeScript 3.8 能理解一些新的 JSDoc 属性标签。

首先是所有的访问修饰符：`@public`、`@private`、`@protected`。这些标签的工作方式与 TypeScript 中 `public`、`private`、`protected` 相同。

```js
// @ts-check

class Foo {
  constructor() {
    /** @private */
    this.stuff = 100;
  }

  printStuff() {
    console.log(this.stuff);
  }
}

new Foo().stuff;
//        ~~~~~
// error! Property 'stuff' is private and only accessible within class 'Foo'.
```

- `@public` 是默认的，可以省略，它代表了一个属性可以从任何地方访问它
- `@private` 表示一个属性只能在包含的类中访问
- `@protected` 表示该属性只能在所包含的类及子类中访问，但不能在类的实例中访问

下一步，我们计划添加 `@readonly` 修饰符，来确保一个属性只能在初始化时被修改：

```ts
// @ts-check

class Foo {
  constructor() {
    /** @readonly */
    this.stuff = 100;
  }

  writeToStuff() {
    this.stuff = 200;
    //   ~~~~~
    // Cannot assign to 'stuff' because it is a read-only property.
  }
}

new Foo().stuff++;
//        ~~~~~
// Cannot assign to 'stuff' because it is a read-only property.
```

## watchOptions

一直以来，TypeScript 致力于在 `--watch` 模式下和编辑器中提供可靠的文件监听功能。尽管在大部分情况下，它都能很好的工作，但是在 Node.js 中，文件监控非常困难，这主要体现在我们的代码逻辑中。在 Node.js 中内置的 API 中，要么占用大量的 CPU 资源，要么不准确（[fs.watchFile](https://nodejs.org/api/fs.html#fs_fs_watchfile_filename_options_listener)），甚至它们在各个平台的行为不一致（[fs.watch](https://nodejs.org/api/fs.html#fs_fs_watch_filename_options_listener)）。除此之外，我们几乎不可能确定哪个 API 会更好的工作，因为它们不仅依赖于平台，还取决于文件所在的文件系统。

这一直是个难题，因为 TypeScript 需要在更多平台上运行，而不仅仅是 Node.js。并且需要考虑到避免依赖模块完全独立。这尤其适用于对 Node.js 原生模块有依赖的模块。

由于每个项目在不同的策略下都可能更好的工作，TypeScript 3.8 在 `tsconfig.json` 和 `jsconfig.json` 中添加了一个新的 `watchOptions` 字段，它可以让使用者告诉编译器/语言服务，应该使用哪种监听策略来跟踪文件或目录。

```ts
{
    // Some typical compiler options
    "compilerOptions": {
        "target": "es2020",
        "moduleResolution": "node",
        // ...
    },

    // NEW: Options for file/directory watching
    "watchOptions": {
        // Use native file system events for files and directories
        "watchFile": "useFsEvents",
        "watchDirectory": "useFsEvents",

        // Poll files for updates more frequently
        // when they're updated a lot.
        "fallbackPolling": "dynamicPriority"
    }
}
```

`watchOptions` 包含四种新的选项

- `watchFile`：监听单个文件的策略，它可以有以下值
  - `fixedPollingInterval`，以固定的时间间隔，检查文件的更改
  - `priorityPollingInterval`，以固定的时间间隔，检查文件的更改，但是使用「启发法」（heuristics）检查某些类型的文件的频率比其他文件低。（heuristics 概念可参考 [wiki](https://zh.wikipedia.org/wiki/%E5%90%AF%E5%8F%91%E6%B3%95)）
  - `dynamicPriorityPolling`，使用动态队列，在该队列中，较少检查不经常修改的文件
  - `useFsEvents`（默认），尝试使用操作系统/文件系统原生事件来监听文件更改
  - `useFsEventsOnParentDirectory`，尝试使用操作系统/文件系统原生事件来监听文件、目录的更改，这样可以使用较小的文件监听程序，但是准确性可能较低
- `watchDirectory`，在缺少递归文件监听功能的系统中，使用哪种策略监听整个目录树，它可以有以下值
  - `fixedPollingInterval`，以固定的时间间隔，检查目录树的更改
  - `dynamicPriorityPolling`，使用动态队列，在该队列中，较少检查不经常修改的目录
  - `useFsEvents`（默认），尝试使用操作系统/文件系统原生事件来监听目录更改
- `fallbackPolling`，当使用文件系统的事件，该选项用来指定使用特定策略，它可以有以下值
  - `fixedPollingInterval`，同上
  - `priorityPollingInterval`，同上
  - `dynamicPriorityPolling`，同上
- `synchronousWatchDirectory`，在目录上禁用延迟监听功能。在可能一次发生大量文件（如 node_modules）更改时，它非常有用，但是你可能需要一些不太常见的设置时，禁用它。

## “快速和宽松”的增量检查

TypeScript 3.8 带来了一种新的变异选项 —— `assumeChangesOnlyAffectDirectDependencies`。当该选项开启时，TypeScript 将不会重新检查/构建可能受影响的文件，仅仅重新检查/构建已更改的文件和直接导入它们的文件。

例如：`fileD.ts` 导入 `fileC.ts`，`fileC.ts` 导入 `fileB.ts`，`fileB.ts` 导入 `fileA.ts` 文件。

```ts
fileA.ts < -fileB.ts < -fileC.ts < -fileD.ts;
```

在 `--watch` 模式下，改变 `fileA.ts` 文件通常意味着 TypeScript 需要至少重新检查 `fileB.ts`、`fileC.ts` 和 `fileD.ts`，当使用 `assumeChangesOnlyAffectDirectDependencies` 时，`fileA.ts` 改变，意味着只需要检查 `fileA.ts` 和 `fileB.ts` 即可。

在类似与 VSCode 的代码库中，使用该编译选项时，某些文件的构建时间从大约 14s 减小到 1s。然而我们并不推荐所有的代码库中都使用该编译选项，你可能对拥有庞大代码库时，延迟提示所有错误更感兴趣（例如一个专用的配置文件 `tsconfig.fullbuild.json` 或者是 CI 中）。
