# JSX 和 React

## 我写了声明 `declare var MyComponent: React.Component`，为什么我不能写 `<MyComponent />`

> 我写下了如下代码，为什么会抛出错误？

```ts
class Display extends React.Component<any, any> {
    render() { ... }
}

let SomeThing: Display = /* ... */;
// Error here, isn't this OK?
let jsx = <SomeThing />;
```

这可能是把类的实例与静态类混淆了。当 React 实例化一个组件时，它在调用构造函数。因此当 TypeScript 看到一个 JSX 标签 `<TagName>` 时，它在验证构造函数 `TagName` 的结果是否可以产生有效组件。

但是这个声明 `let someThing: Display` 只是表明了 `someThing` 是类的实例，并不是类的构造函数。实际上，他会在运行时抛出错误：

```ts
let SomeThing = new Display();
let jsx = <SomeThing />; // Not gonna work
```

最简单的修复方式是使用 `typeof` 操作符：

```ts
let SomeThing: typeof Display = /* ... */;
```
