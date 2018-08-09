# 模块

## 全局模块

默认情况下，当你开始在一个新的 TypeScript 写下代码时，它处于全局命名空间中。考虑在 `foo.ts` 里的以下代码：

```typescript
var foo = 123
```

如果你现在在相同的项目里创建了一个新的文件 `bar.ts`，TypeScript 类型系统将会将会允许你使用变量 `foo`，就好像它在全局可用一样：

```typescript
var bar = foo // allowed
```

毋庸置疑，使用全局变量空间是危险的，因为它会与文件内的代码命名冲突。我们推荐使用下文中将要提到的文件模块。

## 文件模块

它也被称之为外部模块。如果在你的 TypeScript 文件的根级别位置含有 `import` 或者 `export`，它会在这个文件中创建一个本地的作用域。因此，我们需要把以前的 `foo.ts` 改成如下方式（注意 `export` 用法）：

```typescript
export var foo = 123
```

在全局命名空间里，我们不再有 `foo`，这可以通过创建一个新文件 `bar.ts` 来证明：

```typescript
var bar = foo // ERROR: "cannot find name 'foo'"
```

如果你想在 `bar.ts` 里使用来自 `foo.ts` 的内容，你必须显式导入它，更新 `bar.ts` 如下所示：

```typescript
import { foo } from './foo'
var bar = foo // allow
```

在 `bar.ts` 文件里使用 `import`，不但允许你从其他文件导入内容，而且它将此文件 `bar.ts` 标记为一个模块，因此 `bar.ts` 中的声明也不会污染全局命名空间。

从使用外部模块由编译器标志驱动的 TypeScript 文件，编译出 JavaScript 的文件，被称之为模块。

## 外部模块

外部模块拥有强大的能力和可用性。在这里，我们来讨论它的能力以及它的一些用法。

### 澄清：commonjs, amd, es modules, others

首先，我们需要澄清这些模块系统的不一致性。我将会提供给你我当前的建议，以及消除一些顾虑。

你可以根据不同的 `module` 选项来把 TypeScript 编译成不同的 JavaScript 模块类型，这有一些你可以忽略的（我并没有兴趣来解释一些过时的技术）：

- AMD: 不要使用它，它仅能在浏览器工作；
- SystemJS：这是一个好的实验，已经被 ES 模块替代。
- ES 模块：它并没有准备好。

使用 `module: commonjs` 选项来替代这些模式，这会是一个好的注意。

怎么书写 TypeScript 模块，也是一件让人困惑的事。再一次，在今天我们应该这么做：

- `import foo = require('foo')` 例如： `import/require` 使用 ES 模块语法。

这很酷，接下来，让我们看看 ES 模块语法。

:::tip
使用 `module: commonjs` 选项以及使用 ES 模块语法导入导出其他模块
:::

### ES 模块语法

- 使用 `export` 关键字导出一个变量（或者类型）：

```typescript
// foo.ts
export let someVar = 123
export type someType = {
  foo: string
}
```

- `export` 的写法除了上面这样，还有另外一种：

```typescript
// foo.ts
let someVar = 123
type someType = {
  type: string
}

export { someVar, someType }
```

- 你也可以重命名变量导出：

```typescript
// foo.ts
let someVar = 123
export { someVar as aDifferentName }
```

- 使用 `import` 关键字导入一个变量或者事一个类型：

```typescript
// bar.ts
import { someVar, someType } from './foo'
```

- 重命名导入变量或者类型：

```typescript
// bar.ts
import { someVar as aDifferentName } from './foo'
```

- 除了指定加载某个输出值，还可以使用整体加载，即用星号（*）指定一个对象，所有输出值都加载在这个对象上面：

```typescript
// bar.ts
import * as foo from './foo'
// 你可以使用 `foo.someVar` 和 `foo.someType` 以及其他任何从 `foo` 导出的变量或者类型
```

- 仅导入模块：

```typescript
import 'core-js' // 一个普通的 polyfill 库
```

- 从其他模块导入后整体导出：

```typescript
export * from './foo'
```

- 从其他模块导入后，部分导出：

```typescript
export { someVar } from './foo'
```

- 通过重命名，部分导出从另一个模块导入的项目：

```typescript
export { someVar as aDifferentName } from './foo'
```

#### 默认导入／导出

正如你即将所要学到的，我并不喜欢用默认导出，虽然这里存在默认导出的语法：

- 使用 `export default`
  - 在一个变量之前（不需要使用 `let/const/var`）
  - 在一个函数之前
  - 在一个类之前

```typescript
// some var
export default someVar = 123

// some function
export default function someFunction () {}

// some class
export default class someClass {}
```

- 导入使用 `import someName from 'someModule'` 语法（你可以根据需要为导入命名）：

```typescript
import someLocalNameForThisFile from './foo'
```

### 模块路径

:::tip
我将假定使用 `moduleResolution: node` 选项。这个选项应该在你 TypeScript 配置文件里。如果你使用了 `module: commonjs` 选项， `moduleResolution: node` 将会默认开启
:::

这里存在两种不同截然不同的模块，它们是由导入语句中的不同的路径写法所引起的（例如：`import foo from 'THIS IS THE PATH SECTION'`）。

- 相对模块路径（路径以 `.` 开头，例如：`./someFile` 或者 `../../someFolder/someFile` 等）；
- 其他动态查找模块（如：`core-js`，`typestyle`，`react` 或者甚至是 `react/core` 等）。

它们的主要区别来自于系统如何解析模块。

:::tip
我将会使用一个概念性术语，`place` -- 将在提及查找模式后解释它。
:::

#### 相对模块路径

这很简单，仅仅是按照相对路径：

- 如果文件 `bar.ts` 中含有 `import * as foo from './foo'`，`foo` 文件所存在的地方必须是相同文件夹下；
- 如果文件 `bar.ts` 中含有 `import * as foo from '../foo'`，`foo` 文件所存在的地方必须是上一级目录；
- 如果文件 `bar.ts` 中含有 `import * as foo from '../someFolder/foo'`，`foo` 文件所在的文件夹 `someFolder` 必须与 `bar.ts` 所在文件夹在相同的目录下。

或者，你还可以想想其他相对路径导入的情景。:smiley:

#### 动态查找

当导入路径不是相对路径时，模块解析将会模仿 [Node 模块解析策略](https://nodejs.org/api/modules.html#modules_all_together)，以下我将给出一个简单例子：

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

当我提及被检查的 `place` 时，我想表达的是在这个 `place`，TypeScript 将会检查以下内容（例如一个 `foo` 的位置）：

- 如果这个 `place` 表示一个文件，如：`foo.ts`，祝贺！
- 否则，如果这个 `place` 是一个文件夹，并且存在一个文件 `foo/index.ts`，祝贺！
- 否则，如果这个 `place` 是一个文件夹，并且存在一个 `foo/package.json` 文件，在该文件中指定 `types` 的文件存在，那么就欢呼！
- 否则，如果这个 `place` 是一个文件夹，并且存在一个 `package.json` 文件，在该文件中指定 `main` 的文件存在，那么就欢呼！

我实际上是指 `.ts .d.ts` 或者 `.js`

就是这样，现在你已经是一个模块查找专家（这并不是一个小小的成功）。

