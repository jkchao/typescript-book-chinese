# 柯里化

仅仅需要使用一系列箭头函数：

```ts
// 一个柯里化函数
let add = (x: number) => (y: number) => x + y;

// 简单使用
add(123)(456);

// 部分应用
let add123 = add(123);

// fully apply the function
add123(456);
```
