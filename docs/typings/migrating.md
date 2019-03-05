# 从 JavaScript 迁移

假设：

- 你知道 JavaScript；
- 你知道在项目中使用常用的方式和构建工具（如：webpack）。

有了以上假设，从 JavaScript 迁移，总的来说包括以下步骤：

- 添加一个 `tsconfig.json` 文件；
- 把文件扩展名从 `.js` 改成 `.ts`，开始使用 `any` 来减少错误；
- 开始在 TypeScript 中写代码，尽可能的减少 `any` 的使用；
- 回到旧代码，开始添加类型注解，并修复已识别的错误；
- 为你的第三方 JavaScript 代码定义环境声明。

让我们进一步讨论其中的某几点。

记住所有的 JavaScript 都是有效的 TypeScript。这意味着，如果让 TypeScript 编译器编译 TypeScript 里的 JavaScript 代码，编译后的结果将会与原始的 JavaScript 代码一摸一样。也就是说，把文件扩展名从 `.js` 改成 `.ts` 将不会造成任何负面的影响。

## 减少错误

TypeScript 将会立即对你的代码进行类型检查，你的 JavaScript 代码可能并不像你想象中那样整齐了，因此你会收到一些报错信息。你可以使用 `any` 类型来解决它们中的大部分报错：

```typescript
let foo = 123;
let bar = 'hey';

bar = foo; // Error: 不能把 number 类型赋值给 string 类型
```

虽然这些错误是有效的（并且在大多数情景下，推断信息的错误提示将比代码库的不同部分的原始作者想象的更好），但是你的重点可能是逐步迁移至 TypeScript，在这里，你可以使用类型断言来减少此错误：

```typescript
let foo = 123;
let bar = 'hey';

bar = foo as any; // ok
```

在另一方面来说，你可能想用 `any` 用作类型注解：

```typescript
function foo() {
  return 1;
}

let bar = 'hey';
bar = foo(); // Error: 不能把一个 number 类型赋值给 string 类型
```

抑制这种错误：

```typescript
function foo(): any {
  // 添加 'any'
  return 1;
}

let bar = 'hey';
bar = foo();
```

::: warning NOTICE
使用此种方式来减少错误是危险的，但是它允许你将注意力转移到你的新 TypeScript 代码错误上。当你离开一段代码时，你可能会留下 `// TODO` 的注释。
:::

## 第三方代码

你可以将你的 JavaScript 的代码改成 TypeScript 代码，但是你不能让这个世界都使用 TypeScript。这正是 TypeScript 环境声明支持的地方。我们建议你创建一个 `vendor.d.ts` 文件作为开始（`.d.ts` 文件扩展名指定这个文件是一个声明文件），然后我们可以向文件里添加东西。或者，你也可以创建一个针对于特定库的声明文件，如为 jquery 创建 `jquery.d.ts` 文件。

::: tip NOTICE
几乎排名前 90% 的 JavaScript 库的声明文件存在于 [DefinitelyTyped](https://github.com/borisyankov/DefinitelyTyped) 这样一个仓库里，在创建自己定义的声明文件之前，我们建议你先去仓库中寻找。虽然创建一个声明文件这种快速但是不好的方式是减小使用 TypeScript 初始阻力的重要步骤。
:::

考虑使用 `jquery` 的用例，你可以非常简单快速的为它创建一个定义：

```typescript
declare var $: any;
```

有时候，你可能想给某些变量一些明确的定义（如： jquery），并且你会在类型声明空间中使用它。你可以通过 `type` 关键字快速的实现它：

```typescript
declare type JQuery = any;
declare var $: JQuery;
```

这提供给你一个更清晰的使用模式。

再一次说明，一个高质量的 `jquery.d.ts` 已经在 [DefinitelyTyped](https://github.com/borisyankov/DefinitelyTyped) 中存在。现在你已经知道当你使用 JavaScript 第三方模块时， 如何克服从 JavaScript 至 TypeScript 的阻力。在接下去的章节，我们将会讨论环境声明。

## 第三方的 NPM 模块

与全局变量声明相似，你可以快速的定义一个全局模块，如：对于 `jquery`，如果你想把它作为一个模块来使用（[NPM](https://www.npmjs.com/package/jquery)），你可以自己通过以下方式实现：

```typescript
declare module 'jquery';
```

然后你就可以在必要时导入它：

```typescript
import * as $ from 'jquery';
```

::: tip
再一次说明，一个高质量的 `jquery.d.ts` 已经在 [DefinitelyTyped](https://github.com/borisyankov/DefinitelyTyped) 中存在，但是可能在你的包里没有，所以，你现在有一个简单快速的方式来继续迁移。
:::

## 额外的非 JavaScript 资源

在 TypeScript 中，甚至可以允许你导入任何文件，例如 `.css` 文件（如果你使用的是 webpack 样式加载器或 css 模块），你只要添加如下代码（放在 `globals.d.ts`）：

```typescript
declare module '*.css';
```

现在你可以使用 `import * as foo from './some/file.css'`。

与此相似，如果你想使用 html 模版（例如：angular），你可以：

```typescript
declare module '*.html';
```
