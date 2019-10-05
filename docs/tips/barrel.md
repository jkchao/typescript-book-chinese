# Barrel

Barrel 就像是一个容器，它的作用是把分散在多个模块的导出合并到一个模块里导出。一般来说，barrel 本身就是一个包含模块的文件，这个模块做的就是重新导出其他（多个）模块导出的东西。

想象一下，在一个库中，具有如下结构的类。

```ts
// demo/foo.ts
export class Foo {}

// demo/bar.ts
export class Bar {}

// demo/baz.ts
export class Baz {}
```

如果不用 barrel，那么用户在引入时就需要三条 `import` 语句：

```ts
import { Foo } from '../demo/foo';
import { Bar } from '../demo/bar';
import { Baz } from '../demo/baz';
```

但如果我们在同级添加 barrel 文件 `demo/index.ts`，然后这样定义它：

```ts
// demo/index.ts
export * from './foo'; // 重新导出 foo 导出的东西
export * from './bar'; // 重新导出 bar 导出的东西
export * from './baz'; // 重新导出 baz 导出的东西
```

现在，用户就可以直接用一条 `import` 语句从 barrel file 导入所有东西：

```ts
import { Foo, Bar, Baz } from '../demo'; // ../demo，会自动解析成 ../demo/index.ts
```

## 命名导出

除了使用通配符 `*` 导出模块中的所有东西，我们也可以选择要导出什么以及如何导出。试想一个存在多个函数的 `baz.ts`：

```ts
// demo/foo.ts
export class Foo {}

// demo/bar.ts
export class Bar {}

// demo/baz.ts
export function getBaz() {}
export function setBaz() {}
```

如果不想在 `demo` 模块上直接提供 `getBaz` 和 `setBaz` 接口，你可以把它们挂载到一个变量下。你需要做的只是在 barrel file 里导入全部并命名，然后导出命名后的名称即可。

```ts
// demo/index.ts
export * from './foo'; // 重新导出 foo 导出的东西
export * from './bar'; // 重新导出 bar 导出的东西

import * as baz from './baz'; // 导入 baz 中所有的东西，并命名为 baz
export { baz }; // 导出命名后的名称
```

现在，用户需要这样调用：

```ts
import { Foo, Bar, baz } from '../demo'; // ../demo，会自动解析成 ../demo/index.ts

// 使用
baz.getBaz();
baz.setBaz();
// ……
```
