# 非 React JSX

TypeScript 让你能够以类型安全的方式，在 React 中使用 JSX 之外的其他东西。下面列出了一些可自定义的点，但请注意，这只适用于高级 UI 框架的作者。

- 你可以使用 `"jsx":"preserve"` 选项来禁用 React 的样式触发。这意味着，JSX 将按原样被触发，然后你可以使用自定义转化器来转化 JSX 部分。
- 使用 `JSX` 全局模块：
  - 你可以通过定制 `JSX.IntrinsicElements` 的接口成员来控制哪些 HTML 标签是可用的，以及如何对其进行类型检查；
  - 当你在组件中使用时：
    - 你可以通过自定义默认的 `interface ElementClass extends React.Component<any, any> { }` 声明文件来控制哪个 `class` 必须由组件继承；
    - 你可以通过自定义 `declare module JSX { interface ElementAttributesProperty { props: {} } }` 声明文件来控制使用的哪个属性（property）来检查特性（attribute）（默认是 `props`）。

## jsxFactory

通过 `--jsxFactory <JSX factory Name>` 与 `--jsx react`，能让你不同于默认 `React` 的方式使用 JSX 工厂函数。

这个新的工厂函数名字习惯被称之为 `createElement` 函数。

### 例子

```jsx
import { jsxFactory } from 'jsxFactory';

const div = <div>Hello JSX!</div>;
```

使用编译：

```ts
tsc --jsx react --reactNamespace jsxFactory --m commonJS
```

编译结果：

```js
'use strict';
var jsxFactory_1 = require('jsxFactory');
var div = jsxFactory_1.jsxFactory.createElement('div', null, 'Hello JSX!');
```

### jsx 编译提示

你甚至可以使用`jsxPragma` 为每个文件指定不同的 `jsxFactory`：

```tsx
/** @jsx jsxFactory */
import { jsxFactory } from 'jsxFactory';

var div = <div>Hello JSX!</div>;
```

在 jsx 编译提示中，配合 `--jsx react` 命令，这个文件将会被触发使用工厂函数：

```js
'use strict';
var jsxFactory_1 = require('jsxFactory');
var div = jsxFactory_1.jsxFactory.createElement('div', null, 'Hello JSX!');
```
