# @types

毫无疑问，[DefinitelyTyped](https://github.com/borisyankov/DefinitelyTyped) 是 TypeScript 最大的优势之一，社区已经记录了 90% 的顶级 JavaScript 库。

这意味着，你可以非常高效地使用这些库，而无须在单独的窗口打开相应文档以确保输入的正确性。

## 使用 `@types`

你可以通过 `npm` 来安装使用 `@types`，例如为 `jquery` 添加声明文件：

```shell
npm install @types/jquery --save-dev
```

`@types` 支持全局和模块类型定义。

### 全局 `@types`

默认情况下，TypeScript 会自动包含支持全局使用的任何声明定义。例如，对于 jquery，你应该能够在项目中开始全局使用 `$`。

### 模块 `@types`

安装完之后，不需要特别的配置，你就可以像使用模块一样使用它：

```ts
import * as $ from 'jquery';

// 现在你可以此模块中任意使用$了 :)
```

## 控制全局

可以看出，对于某些团队而言，拥有允许全局使用的定义是一个问题。因此，你可以通过配置 `tsconfig.json` 的 `compilerOptions.types` 选项，引入有意义的类型：

```ts
{
  "compilerOptions": {
    "types" : [
      "jquery"
    ]
  }
}
```

如上例所示，通过配置 `compilerOptions.types: [ "jquery" ]` 后，只允许使用 `jquery` 的 `@types` 包，即使这个人安装了另一个声明文件，比如 `npm install @types/node`，它的全局变量（例如 `process`）也不会泄漏到你的代码中，直到你将它们添加到 tsconfig.json 类型选项。
