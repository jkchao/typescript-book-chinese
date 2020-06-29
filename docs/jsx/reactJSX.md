# React JSX

> [在 React 中使用 TypeScript 的教学视频](https://egghead.io/courses/use-typescript-to-develop-react-applications)

## 建立

在 [TypeScript in the browser](https://basarat.gitbooks.io/typescript/content/docs/quick/browser.html) 章节中，我们已经学会开始开发 React 的应用了，以下是一些重点：

- 使用文件后缀 `.tsx`（替代 `.ts`）；
- 在你的 `tsconfig.json` 配置文件的 `compilerOptions` 里设置选项 `"jsx": "react"`；
- 在你的项目里为 `JSX` 和 `React` 安装声明文件：`npm i -D @types/react @types/react-dom`；
- 导入 `react` 到你的 `.tsx` 文件（`import * as React from 'react'`）。

## HTML 标签 vs 组件

React 不但能渲染 HTML 标签（strings）也能渲染 React 组件（classes）。JavaScript 触发这些的原理是不同的（`React.createElement('div')` vs `React.createElement(MyComponent)`）， 确定使用哪一种方式取决于首字母的大小写，`foo` 被认为是 HTML 标签，`Foo` 被认为是一个组件。

## 类型检查

### HTML 标签

一个 HTML 标签 `foo` 被标记为 `JSX.IntrinsicElements.foo` 类型。在我们已经安装的文件 `react-jsx.d.ts` 中定义了所有主要标签的类型，如下是一部分示例：

```ts
declare namespace JSX {
  interface IntrinsicElements {
    a: React.HTMLAttributes;
    abbr: React.HTMLAttributes;
    div: React.HTMLAttributes;
    span: React.HTMLAttributes;

    // 其他
  }
}
```

### 函数式组件

你可以使用 `React.FunctionComponent` 接口定义函数组件：

```tsx
type Props = {
  foo: string;
};

const MyComponent: React.FunctionComponent<Props> = props => {
  return <span>{props.foo}</span>;
};

<MyComponent foo="bar" />;
```

### 类组件

根据组件的 `props` 属性对组件进行类型检查。这是以 JSX 如何转换作为蓝本，例如：属性成为 `props` 的组成部分。

`react.d.ts` 文件定义了 `React.Component<Props,State>`，你应该使用自己所需的 `Props` 和 `State` 声明扩展它：

```tsx
type Props = {
  foo: string;
};

class MyComponent extends React.Component<Props, {}> {
  render() {
    return <span>{this.props.foo}</span>;
  }
}

<MyComponent foo="bar" />;
```

### React JSX Tip: 接收组件的实例

react 类型声明文件提供了 `React.ReactElement<T>`，它可以让你通过传入 `<T/>`，来注解类组件的实例化结果。

```ts
class MyAwesomeComponent extends React.Component {
  render() {
    return <div>Hello</div>;
  }
}

const foo: React.ReactElement<MyAwesomeComponent> = <MyAwesomeComponent />; // Okay
const bar: React.ReactElement<MyAwesomeComponent> = <NotMyAwesomeComponent />; // Error!
```

::: tip
当然，你可以将它用作函数参数的注解，甚至可以是 React 组件的 prop 成员。
:::

### React JSX Tip: 接受一个可以在 Props 起作用，并使用 JSX 渲染的组件

类型 `React.Component<Props>` 是 `React.ComponentClass<P>` 与 `React.StatelessComponent<P>` 的组合，所以你可以接受一些可以用作 Props 类型和使用 JSX 渲染的组件。

```ts
const X: React.Component<Props> = foo; // from somewhere

// Render X with some props:
<X {...props} />;
```

### React JSX Tip: 可渲染的接口

React 可以渲染一些像 `JSX` 或者是 `string` 的内容，这些被合并到类型 `React.ReactNode` 中，因此，当你接收可渲染的内容时，你可以使用它：

```tsx
type Props = {
  header: React.ReactNode;
  body: React.ReactNode;
};

class MyComponent extends React.Component<Props, {}> {
  render() {
    return (
      <div>
        {this.props.header}
        {this.props.body}
      </div>
    );
  }
}

<MyComponent header={<h1>Header</h1>} body={<i>body</i>} />
```

### React JSX tip: 接收组件的接口

React 声明文件提供 `React.ReactElement<T>` 的接口，可以让你注解一个类组件实例化的返回值`<T/>`，如：

```tsx
class MyAwesomeComponent extends React.Component {
  render() {
    return <div>Hello</div>;
  }
}

const foo: React.ReactElement<MyAwesomeComponent> = <MyAwesomeComponent />; // Okay
const bar: React.ReactElement<MyAwesomeComponent> = <NotMyAwesomeComponent />; // Error!
```

::: tip
你也可以将其用做函数参数的注解，或者是 React 组件的 prop 注解。
:::

### React JSX tip: 接收可以作为 props 的组件，并且使用 JSX 渲染它

类型 `React.Component<Props>` 合并了 `React.ComponentClass<P>` 和 `React.StatelessComponent<P>`，因此，你可以接收一些使用 `Prop` 类型的组件，并使用 JSX 渲染它：

```tsx
const X: React.Component<Props> = foo // 来自其他地方

// 渲染 X
<X {...props} />
```

### React JSX tip: 泛型组件

它完全能按我们预期工作，如：

```tsx
// 一个泛型组件
type SelectProps<T> = { items: T[] };
class Select<T> extends React.Component<SelectProps<T>, any> {}

// 使用
const Form = () => <Select<string> items={['a', 'b']} />;
```

### 泛型函数

一些像下面这样的正常工作：

```ts
function foo<T>(x: T): T {
  return x;
}
```

然而不能使用箭头泛型函数：

```ts
const foo = <T>(x: T) => T; // Error: T 标签没有关闭
```

**解决办法**：在泛型参数里使用 `extends` 来提示编译器，这是个泛型：

```ts
const foo = <T extends {}>(x: T) => x;
```

### React Tip: 强类型的 Refs

基本上你在初始化一个变量时，使用 ref 和 null 的联合类型，并且在回调函数中初始化他：

```ts
class Example extends React.Component {
  example() {
    // ... something
  }

  render() {
    return <div>Foo</div>;
  }
}

class Use {
  exampleRef: Example | null = null;

  render() {
    return <Example ref={exampleRef => (this.exampleRef = exampleRef)} />;
  }
}
```

使用原生元素时也一样：

```ts
class FocusingInput extends React.Component<{ value: string; onChange: (value: string) => any }, {}> {
  input: HTMLInputElement | null = null;

  render() {
    return (
      <input
        ref={input => (this.input = input)}
        value={this.props.value}
        onChange={e => {
          this.props.onChange(e.target.value);
        }}
      />
    );
  }
  focus() {
    if (this.input != null) {
      this.input.focus();
    }
  }
}
```

### 类型断言

如我们之前[提到](../typings/typeAssertion.md#as-foo-与-foo)的，可以使用 `as Foo` 语法进行类型断言。

## 默认 Props

- 在有状态组件中使用默认的 Props：你可以通过 `null` 操作符（这不是一个理想的方式，但是这是我能想到的最简单的最小代码解决方案）告诉 TypeScript 一个属性将会被外部提供（React）。

```tsx
class Hello extends React.Component<{
  /**
   * @default 'TypeScript'
   */
  compiler?: string;
  framework: string;
}> {
  static defaultProps = {
    compiler: 'TypeScript'
  };
  render() {
    const compiler = this.props.compiler!;
    return (
      <div>
        <div>{compiler}</div>
        <div>{this.props.framework}</div>
      </div>
    );
  }
}

ReactDOM.render(
  <Hello framework="React" />, // TypeScript React
  document.getElementById('root')
);
```

- 在 SFC 中使用默认的 Props：推荐使用简单的 JavaScript 参数，因为同样适用于 TypeScript 类型系统：

```tsx
const Hello: React.SFC<{
  /**
   * @default 'TypeScript'
   */
  compiler?: string;
  framework: string;
}> = ({
  compiler = 'TypeScript', // Default prop
  framework
}) => {
  return (
    <div>
      <div>{compiler}</div>
      <div>{framework}</div>
    </div>
  );
};

ReactDOM.render(
  <Hello framework="React" />, // TypeScript React
  document.getElementById('root')
);
```
