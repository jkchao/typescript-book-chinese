# 从 JavaScript 迁移

假设：

- 你知道 JavaScript；
- 你知道在项目中使用常用的方式和构建工具（如：webpack）。

有了以上假设，从 JavaScript 迁移，总的来说包括一下步骤：

- 添加一个 `tsconfig.json` 文件；
- 把文件扩展名从 `.js` 改成 `.ts`，开始使用 `any` 来减少错误；
- 开始在 TypeScript 中写代码，尽可能的减少 `any` 的使用；
- 回到旧代码，开始添加类型注释，并修复已识别的错误；
- 为你的第三方 JavaScript 代码定义环境声明。

让我们进一步讨论其中的某几点。

记住所有的 JavaScript 都是有效的 TypeScript。这意味着，如果让 TypeScript 编译器编译 TypeScript 里的 JavaScript 代码，编译后的结果将会与原始的 JavaScript 代码一摸一样。也就是说，把文件扩展名从 `.js` 改成 `.ts` 将不会造成任何负面的影响。

## 减少错误

TypeScript 将会立即对你的代码进行类型检查，你的 JavaScript 代码可能并不像你想象中那样整齐了，因此你会收到一些报错信息。你可以使用 `any` 类型来解决它们中的大部分报错：

```typescript
let foo = 123
let bar = 'hey'

bar = foo // Error: 不能把 number 类型分配给 string 类型
```

虽然这些错误是有效的（并且在大多数情景下，）