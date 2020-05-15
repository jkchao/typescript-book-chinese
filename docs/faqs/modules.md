# 模块

## 为什么我导入的模块在编译后被删除了？

> 我写了一些这样的代码

```typescript
import someModule = require('./myMod');

let x: someModule.SomeType = /* something */;
```

> 有这样的输出

```typescript
// Expected to see "var someModule = require('./myMod');" here!

var x = /* something */;
```

`TypeScript` 假定导入的模块没有副作用，所以它移除了不用于任何表达式的模块导入。

使用 `import "mod"` 语法来强制加载模块

```typescript
import './myMod'; // For side effects
```

你也可以简单调用模块，这是最常见的解决办法。

```typescript
import someModule = require('./myMod');
someModule; // Used for side effects
```

## 为什么不跨模块文件合并命名空间？

TODO：本小节内容请查看：[https://stackoverflow.com/questions/30357634/how-do-i-use-namespaces-with-typescript-external-modules](https://stackoverflow.com/questions/30357634/how-do-i-use-namespaces-with-typescript-external-modules) 或者 [https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-5.html#namespace-keyword](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-5.html#namespace-keyword)
