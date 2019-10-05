# 构建切换

根据 JavaScript 项目的运行环境进行切换环境变量是很常见的，通过 webpack 可以很轻松地做到这一点，因为它支持基于环境变量的死代码排除。

在你的 `package.json script` 里，添加不同的编译目标：

```json
"build:test": "webpack -p --config ./src/webpack.config.js",
"build:prod": "webpack -p --define process.env.NODE_ENV='\"production\"' --config ./src/webpack.config.js"
```

当然，假设你已经安装了 webpack `npm install webpack`，现在，你可以运行 `npm run build:test` 了。

使用环境变量也超级简单：

```ts
/**
 * This interface makes sure we don't miss adding a property to both `prod` and `test`
 */
interface Config {
  someItem: string;
}

/**
 * We only export a single thing. The config.
 */
export let config: Config;

/**
 * `process.env.NODE_ENV` definition is driven from webpack
 *
 * The whole `else` block will be removed in the emitted JavaScript
 *  for a production build
 */
if (process.env.NODE_ENV === 'production') {
  config = {
    someItem: 'prod'
  };
  console.log('Running in prod');
} else {
  config = {
    someItem: 'test'
  };
  console.log('Running in test');
}
```

::: tip
我们使用 `process.env.NODE_ENV` 仅仅是因为绝大多数 JavaScript 库中都使用此变量，例如：`React`。
:::
