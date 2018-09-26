# 接口

接口具有运行时的零影响。TypeScript 接口中有很多功能来声明变量的结构。

以下两个是等效声明, 第一个使用*内联注解*，第二个使用*接口*：

```ts
// Sample A
declare const myPoint: { x: number; y: number };

// Sample B
interface Point {
  x: number;
  y: number;
}
declare const myPoint: Point;
```

然而，_示例 B_ 的好处在于，如果有人创建了一个基于 `myPoint` 的库来添加新成员, 他们可以轻松将此成员添加到 `myPoint` 的现有声明中:

```ts
// Lib a.d.ts
interface Point {
  x: number,
  y: number
}
declare const myPoint: Point

// Lib b.d.ts
interface Point {
  z: number


}

// Your code
let myPoint.z // Allowed!
```

这是因为 _TypeScript 中的接口是开放式的_，这是 TypeScript 的一个重要原则，它允许你使用*接口*模仿 JavaScript 的可扩展性。

## 类可以实现接口

如果你希望在接口中使用必须遵循的类和别人给你定义的对象结构，可以使用 `implements` 关键字来确保兼容性：

```ts
interface Point {
  x: number;
  y: number;
}

class MyPoint implements Point {
  x: number;
  y: number; // Same as Point
}
```

基本上在 `implements（实现）` 的存在下，该外部 `Point` 接口的任何更改都将导致代码库中的编译错误，因此可以轻松地使其保持同步：

```ts
interface Point {
  x: number;
  y: number;
  z: number; // New member
}

class MyPoint implements Point {
  // ERROR : missing member `z`
  x: number;
  y: number;
}
```

注意，`implements` 限制了类实例的结构，即:

```ts
let foo: Point = new MyPoint();
```

像 `foo: Point = MyPoint` 这样并不是一回事。

## 注意

### 并非每个接口都是很容易实现的

接口旨在声明 JavaScript 中可能存在的任意结构。

思考以下例子，其中可以使用 `new` 调用某些内容：

```ts
interface Crazy {
  new (): {
    hello: number;
  };
}
```

你基本上会有这样的代码：

```ts
class CrazyClass implements Crazy {
  constructor() {
    return { hello: 123 };
  }
}

// Because
const crazy = new CrazyClass(); // crazy would be { hello:123 }
```

你可以使用接口声明所有的 JavaScript，甚至可以安全地从 TypeScript 中使用它们。但并不意味着你可以使用 TypeScript 类来实现它们。
