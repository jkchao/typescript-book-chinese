# 对象字面量的惰性初始化

在 JavaScript 中，像这样用字面量初始化对象的写法十分常见：

```ts
let foo = {};
foo.bar = 123;
foo.bas = 'Hello World';
```

但在 TypeScript 中，同样的写法就会报错：

```ts
let foo = {};
foo.bar = 123; // Error: Property 'bar' does not exist on type '{}'
foo.bas = 'Hello World'; // Error: Property 'bas' does not exist on type '{}'
```

这是因为 TypeScript 在解析 `let foo = {}` 这段赋值语句时，会进行“类型推断”：它会认为等号左边 `foo` 的类型即为等号右边 `{}` 的类型。由于 `{}` 本没有任何属性，因此，像上面那样给 `foo` 添加属性时就会报错。

## 最好的解决方案

最*好*的解决方案就是在为变量赋值的同时，添加属性及其对应的值：

```ts
let foo = {
  bar: 123,
  bas: 'Hello World'
};
```

这种写法也比较容易通过其他人或工具的代码审核，对后期维护也是有利的。

> 以下的快速解决方案采用*惰性*的思路，本质上是*在初始化变量时忘了添加属性*的做法。

## 快速解决方案

如果你的 JavaScript 项目很大，那么在迁移到 TypeScript 的时候，上面的做法可能会比较麻烦。此时，你可以利用 TypeScript 的“类型断言”机制让代码顺利通过编译：

```ts
let foo = {} as any;
foo.bar = 123;
foo.bas = 'Hello World';
```

## 折中的解决方案

当然，总是用 `any` 肯定是不好的，因为这样做其实是在想办法绕开 TypeScript 的类型检查。那么，折中的方案就是创建 `interface`，这样的好处在于：

- 方便撰写类型文档
- TypeScript 会参与类型检查，确保类型安全

请看以下的示例：

```ts
interface Foo {
  bar: number;
  bas: string;
}

let foo = {} as Foo;
foo.bar = 123;
foo.bas = 'Hello World';
```

使用 `interface` 可以确保类型安全，比如这种情况：

```ts
interface Foo {
  bar: number;
  bas: string;
}

let foo = {} as Foo;
foo.bar = 123;
foo.bas = 'Hello World';

// 然后我们尝试这样做：
foo.bar = 'Hello Stranger'; // 错误：你可能把 `bas` 写成了 `bar`，不能为数字类型的属性赋值字符串
```
