# `export default` 被认为是有害的

假如你有一个包含以下内容的 `foo.ts` 文件：

```ts
class Foo {}

export default Foo;
```

你可能会使用 ES6 语法导入它（在 `bar.ts` 里）：

```ts
import Foo from './foo';
```

这存在一些可维护性的问题：

- 如果你在 `foo.ts` 里重构 `Foo`，在 `bar.ts` 文件中，它将不会被重新命名；
- 如果你最终需要从 `foo.ts` 文件中导出更多有用的信息（在你的很多文件中都存在这种情景），那么你必须兼顾导入语法。

由于这些原因，我推荐在导入时使用简单的 `export` 与解构的形式，如 `foo.ts`：

```ts
export class Foo {}
```

接着：

```ts
import { Foo } from './Foo';
```

下面，我将会介绍更多的原因。

## 可发现性差

默认导出的可发现性非常差，你不能智能的辨别一个模块它是否有默认导出。

在使用默认导出时，你什么也没有得到（可能它有默认导出，可能它没有）。

```ts
import /* here */ from 'something';
```

没有默认导出，你可以用以下方式获取智能提示：

```ts
import /* here */ 'something';
```

## 自动完成

不管你是否了解导出，你都可以在 `import { /* here */ } from './foo'` 的 `here` 位置，来了解导出模块的信息。

## CommonJS 互用

对于必须使用 `const { default } = require('module/foo')` 而不是 `const { Foo } = require('module/foo')` 的 CommonJS 的用户来说，这会是一个糟糕的体验。当你导入一个模块时，你很可能想重命名 `default` 作为导入的名字。

## 防止拼写错误

当你在开发时使用 `import Foo from './foo'` 时，并不会得到有关于拼写的任何错误，其他人可能会这么写 `import foo from './foo'`；

## 再次导出

再次导出是没必要的，但是在 `npm` 包的根文件 `index` 却是很常见。如：`import Foo from './foo'；export { Foo }`（默认导出）VS `export * from './foo'` （命名导出）。

## 动态导入

在动态的 `import` 中，默认导出会以 `default` 的名字暴露自己，如：

```ts
const HighChart = await import('https://code.highcharts.com/js/es-modules/masters/highcharts.src.js');
HighChart.default.chart('container', { ... }); // Notice `.default`
```
