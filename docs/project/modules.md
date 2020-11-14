# 模块

## 全局模块

在默认情况下，当你开始在一个新的 TypeScript 文件中写下代码时，它处于全局命名空间中。如在 foo.ts 里的以下代码。

```ts
const foo = 123;
```

如果你在相同的项目里创建了一个新的文件 `bar.ts`，TypeScript 类型系统将会允许你使用变量 `foo`，就好像它在全局可用一样：

```ts
const bar = foo; // allowed
```

毋庸置疑，使用全局变量空间是危险的，因为它会与文件内的代码命名冲突。我们推荐使用下文中将要提到的文件模块。

## 文件模块

文件模块也被称为外部模块。如果在你的 TypeScript 文件的根级别位置含有 `import` 或者 `export`，那么它会在这个文件中创建一个本地的作用域。因此，我们需要把上文 `foo.ts` 改成如下方式（注意 `export` 用法）：

```ts
export const foo = 123;
```

在全局命名空间里，我们不再有 `foo`，这可以通过创建一个新文件 `bar.ts` 来证明：

```ts
const bar = foo; // ERROR: "cannot find name 'foo'"
```

如果你想在 `bar.ts` 里使用来自 `foo.ts` 的内容，你必须显式地导入它，更新后的 `bar.ts` 如下所示。

```ts
import { foo } from './foo';
const bar = foo; // allow
```

在 `bar.ts` 文件里使用 `import` 时，它不仅允许你使用从其他文件导入的内容，还会将此文件 `bar.ts` 标记为一个模块，文件内定义的声明也不会“污染”全局命名空间

## 文件模块详情

文件模块拥有强大的功能和较强的可用性。下面我们来讨论它的功能及一些用法。

### 澄清：commonjs, amd, es modules, others

首先，我们需要澄清这些模块系统的不一致性。我将会提供给你我当前的建议，以及消除一些你的顾虑。

你可以根据不同的 `module` 选项来把 TypeScript 编译成不同的 JavaScript 模块类型，这有一些你可以忽略的东西：

- AMD：不要使用它，它仅能在浏览器工作；
- SystemJS：这是一个好的实验，已经被 ES 模块替代；
- ES 模块：它并没有准备好。

使用 `module: commonjs` 选项来替代这些模式，将会是一个好的主意。

怎么书写 TypeScript 模块呢？，这也是一件让人困惑的事。在今天我们应该这么做：

- 放弃使用 `import/require` 语法即 `import foo = require('foo')` 写法
- 推荐使用 ES 模块语法

这很酷，接下来，让我们看看 ES 模块语法。

:::tip
使用 `module: commonjs` 选项以及使用 ES 模块语法导入、导出、编写模块。
:::

### ES 模块语法

- 使用 `export` 关键字导出一个变量或类型

```ts
// foo.ts
export const someVar = 123;
export type someType = {
  foo: string;
};
```

- `export` 的写法除了上面这种，还有另外一种：

```ts
// foo.ts
const someVar = 123;
type someType = {
  type: string;
};

export { someVar, someType };
```

- 你也可以用重命名变量的方式导出：

```ts
// foo.ts
const someVar = 123;
export { someVar as aDifferentName };
```

- 使用 `import` 关键字导入一个变量或者是一个类型：

```ts
// bar.ts
import { someVar, someType } from './foo';
```

- 通过重命名的方式导入变量或者类型：

```ts
// bar.ts
import { someVar as aDifferentName } from './foo';
```

- 除了指定加载某个输出值，还可以使用整体加载，即用星号（\*）指定一个对象，所有输出值都加载在这个对象上面：

```ts
// bar.ts
import * as foo from './foo';
// 你可以使用 `foo.someVar` 和 `foo.someType` 以及其他任何从 `foo` 导出的变量或者类型
```

- 只导入模块：

```ts
import 'core-js'; // 一个普通的 polyfill 库
```

- 从其他模块导入后整体导出：

```ts
export * from './foo';
```

- 从其他模块导入后，部分导出：

```ts
export { someVar } from './foo';
```

- 通过重命名，部分导出从另一个模块导入的项目：

```ts
export { someVar as aDifferentName } from './foo';
```

#### 默认导入／导出

我并不喜欢用默认导出，虽然有默认导出的语法：

- 使用 `export default`
  - 在一个变量之前（不需要使用 `let/const/var`）；
  - 在一个函数之前；
  - 在一个类之前。

```ts
// some var
export default (someVar = 123);

// some function
export default function someFunction() {}

// some class
export default class someClass {}
```

- 导入使用 `import someName from 'someModule'` 语法（你可以根据需要为导入命名）：

```ts
import someLocalNameForThisFile from './foo';
```

### 模块路径

:::tip
如果你需要使用 `moduleResolution: node` 选项，你应该将此选项放入你的配置文件中。如果你使用了 `module: commonjs` 选项， `moduleResolution: node` 将会默认开启。
:::

这里存在两种截然不同的模块：

- 相对模块路径（路径以 `.` 开头，例如：`./someFile` 或者 `../../someFolder/someFile` 等）；
- 其他动态查找模块（如：`core-js`，`typestyle`，`react` 或者甚至是 `react/core` 等）。

它们的主要区别在于系统如何解析模块。

:::tip
我将会使用一个概念性术语，`place` -- 将在提及查找模式后解释它。
:::

#### 相对模块路径

这很简单，仅仅是按照相对路径来就可以了：

- 如果文件 `bar.ts` 中含有 `import * as foo from './foo'`，那么 `foo` 文件必须与 `bar.ts` 文件存在于相同的文件夹下
- 如果文件 `bar.ts` 中含有 `import * as foo from '../foo'`，那么 `foo` 文件所存在的地方必须是 `bar.ts` 的上一级目录；
- 如果文件 `bar.ts` 中含有 `import * as foo from '../someFolder/foo'`，那么 `foo` 文件所在的文件夹 `someFolder` 必须与 `bar.ts` 文件所在文件夹在相同的目录下。

你还可以思考一下其他相对路径导入的场景。:smiley:

#### 动态查找

当导入路径不是相对路径时，模块解析将会模仿 [Node 模块解析策略](https://nodejs.org/api/modules.html#modules_all_together)，下面我将给出一个简单例子：

- 当你使用 `import * as foo from 'foo'`，将会按如下顺序查找模块：
  - `./node_modules/foo`
  - `../node_modules/foo`
  - `../../node_modules/foo`
  - 直到系统的根目录
- 当你使用 `import * as foo from 'something/foo'`，将会按照如下顺序查找内容
  - `./node_modules/something/foo`
  - `../node_modules/something/foo`
  - `../../node_modules/something/foo`
  - 直到系统的根目录

### 什么是 `place`

当我提及被检查的 `place` 时，我想表达的是在这个 `place` 上，TypeScript 将会检查以下内容（例如一个 `foo` 的 `place`）：

- 如果这个 `place` 表示一个文件，如：`foo.ts`，欢呼！
- 否则，如果这个 `place` 是一个文件夹，并且存在一个文件 `foo/index.ts`，欢呼！
- 否则，如果这个 `place` 是一个文件夹，并且存在一个 `foo/package.json` 文件，在该文件中指定 `types` 的文件存在，那么就欢呼！
- 否则，如果这个 `place` 是一个文件夹，并且存在一个 `package.json` 文件，在该文件中指定 `main` 的文件存在，那么就欢呼！

从文件类型上来说，我实际上是指 `.ts`， `.d.ts` 或者 `.js`

就是这样，现在你已经是一个模块查找专家（这并不是一个小小的成功）。

### 重写类型的动态查找

在你的项目里，你可以通过 `declare module 'somePath'` 声明一个全局模块的方式，来解决查找模块路径的问题。

```ts
// global.d.ts
declare module 'foo' {
  // some variable declarations
  export var bar: number;
}
```

接着 ：

```ts
// anyOtherTsFileInYourProject.ts
import * as foo from 'foo';
// TypeScript 将假设（在没有做其他查找的情况下）
// foo 是 { bar: number }
```

### `import/require` 仅仅是导入类型

以下导入语法：

```ts
import foo = require('foo');
```

它实际上只做了两件事：

- 导入 foo 模块的所有类型信息；
- 确定 foo 模块运行时的依赖关系。

你可以选择仅加载类型信息，而没有运行时的依赖关系。在继续之前，你可能需要重新阅读本书 [声明空间部分](./declarationspaces.md) 部分。

如果你没有把导入的名称当做变量声明空间来用，在编译成 JavaScript 时，导入的模块将会被完全移除。这最好用例子来解释，下面我们将会给出一些示例。

#### 例子 1

```ts
import foo = require('foo');
```

将会编译成 JavaScript：

```js
```

这是正确的，一个没有被使用的空文件。

#### 例子 2

```ts
import foo = require('foo');
var bar: foo;
```

将会被编译成：

```js
let bar;
```

这是因为 foo （或者其他任何属性如：`foo.bas`）没有被当做一个变量使用。

#### 例子 3

```ts
import foo = require('foo');
const bar = foo;
```

将会被编译成（假设是 commonjs）：

```js
const foo = require('foo');
const bar = foo;
```

这是因为 `foo` 被当做变量使用了。

#### 使用例子：懒加载

类型推断需要提前完成，这意味着，如果你想在 `bar` 文件里，使用从其他文件 `foo` 导出的类型，你将不得不这么做：

```ts
import foo = require('foo');
let bar: foo.SomeType;
```

然而，在某些情景下，你只想在需要时加载模块 `foo`，此时你需要仅在类型注解中使用导入的模块名称，而**不**是在变量中使用。在编译成 JavaScript 时，这些将会被移除。接着，你可以手动导入你需要的模块。

作为一个例子，考虑以下基于 `commonjs` 的代码，我们仅在一个函数内导入 `foo` 模块：

```ts
import foo = require('foo');

export function loadFoo() {
  // 这是懒加载 foo，原始的加载仅仅用来做类型注解
  const _foo: typeof foo = require('foo');
  // 现在，你可以使用 `_foo` 替代 `foo` 来作为一个变量使用
}
```

一个同样简单的 `amd` 模块（使用 requirejs）：

```ts
import foo = require('foo');

export function loadFoo() {
  // 这是懒加载 foo，原始的加载仅仅用来做类型注解
  require(['foo'], (_foo: typeof foo) => {
    // 现在，你可以使用 `_foo` 替代 `foo` 来作为一个变量使用
  });
}
```

这些通常在以下情景使用：

- 在 web app 里， 当你在特定路由上加载 JavaScript 时；
- 在 node 应用里，当你只想加载特定模块，用来加快启动速度时。

#### 使用例子：打破循环依赖

类似于懒加载的使用用例，某些模块加载器（commonjs/node 和 amd/requirejs）不能很好的处理循环依赖。在这种情况下，一方面我们使用延迟加载代码，并在另一方面预先加载模块是很实用的。

#### 使用例子：确保导入

当你加载一个模块，只是想引入其附加的作用（如：模块可能会注册一些像 [CodeMirror addons](https://codemirror.net/doc/manual.html#addons)）时，然而，如果你仅仅是 `import/require` （导入）一些并没有与你的模块或者模块加载器有任何依赖的 JavaScript 代码，（如：webpack），经过 TypeScript 编译后，这些将会被完全忽视。在这种情况下，你可以使用一个 `ensureImport` 变量，来确保编译的 JavaScript 依赖与模块。如：

```ts
import foo = require('./foo');
import bar = require('./bar');
import bas = require('./bas');

const ensureImport: any = foo || bar || bas;
```

## global.d.ts

在上文中，当我们讨论文件模块时，比较了全局变量与文件模块，并且我们推荐使用基于文件的模块，而不是选择污染全局命名空间。

然而，如果你的团队里有 TypeScript 初学者，你可以提供他们一个 `global.d.ts` 文件，用来将一些接口或者类型放入全局命名空间里，这些定义的接口和类型能在你的所有 TypeScript 代码里使用。

:::tip
对于任何需要编译成 `JavaScript` 的代码，我们强烈建议你放入文件模块里。
:::

- `global.d.ts` 是一种扩充 `lib.d.ts` 很好的方式，如果你需要的话。
- 当你从 `JS` 迁移到 `TS` 时，定义 `declare module "some-library-you-dont-care-to-get-defs-for"` 能让你快速开始。
