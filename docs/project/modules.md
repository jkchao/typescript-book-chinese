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

## 文件模块详情

### 外部模块