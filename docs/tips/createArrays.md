# 创建数组

创建数组十分简单：

```ts
const foo: string[] = [];
```

你也可以在创建数组时使用 ES6 的 `Array.prototype.fill` 方法为数组填充数据：

```ts
const foo: string[] = new Array(3).fill('');
console.log(foo); // 会输出 ['','','']
```
