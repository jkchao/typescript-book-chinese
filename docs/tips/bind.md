# Bind 是有害的

::: tip
译者注：在这个 [PR](https://github.com/Microsoft/TypeScript/pull/27028?from=timeline&isappinstalled=0) 下，已经解决 `bind`、`call`、`apply` 类型正确推导的问题，预计在 3.2 版本中发布。
:::

这是在 `lib.d.ts` 中 `bind` 的定义：

```ts
bind(thisArg: any, ...argArray: any[]): any
```

你可以看到他的返回值是 `any`，这意味着在函数上调用 `bind` 会导致你在原始函数调用签名上将会完全失去类型的安全检查。

如下所示：

```ts
function twoParams(a: number, b: number) {
  return a + b;
}

let curryOne = twoParams.bind(null, 123);
curryOne(456); // ok
curryOne('456'); // ok
```

一个更好的方式的是使用类型注解的箭头函数：

```ts
function twoParams(a: number, b: number) {
  return a + b;
}

let curryOne = (x: number) => twoParams(123, x);
curryOne(456); // ok
curryOne('456'); // Error
```

如果你想用一个柯里化的函数，你可以看看[此章节](./curry.md)：

## 类成员

另一个常见用途是在传递类函数时使用 `bind` 来确保 `this` 的正确值，不要这么做。

在接下来的示例中，如果你使用了 `bind`，你将会失去函数参数的类型安全：

```ts
class Adder {
  constructor(public a: string) {}

  add(b: string): string {
    return this.a + b;
  }
}

function useAdd(add: (x: number) => number) {
  return add(456);
}

let adder = new Adder('mary had a little 🐑');
useAdd(adder.add.bind(adder)); // 没有编译的错误
useAdd(x => adder.add(x)); // Error: number 不能分配给 string
```

如果你想传递一个类成员的函数，使用箭头函数。例如：

```ts
class Adder {
  constructor(public a: string) {}

  // 此时，这个函数可以安全传递
  add = (b: string): string => {
    return this.a + b;
  };
}
```

另一种方法是手动指定要绑定的变量的类型：

```ts
const add: typeof adder.add = adder.add.bind(adder);
```
