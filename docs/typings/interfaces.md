# 接口

接口运行时的影响为 0。在 TypeScript 接口中有很多方式来声明变量的结构。

下面两个是等效的声明, 示例 A 使用内联注解，示例 B 使用接口形式：

```ts
// 示例 A
declare const myPoint: { x: number; y: number };

// 示例 B
interface Point {
  x: number;
  y: number;
}
declare const myPoint: Point;
```

示例 B 的好处在于，如果有人创建了一个基于 `myPoint` 的库来添加新成员, 那么他可以轻松将此成员添加到 `myPoint` 的现有声明中:

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
myPoint.z // Allowed!
```

TypeScript 接口是开放式的，这是 TypeScript 的一个重要原则，它允许你使用接口来模仿 JavaScript 的可扩展性。

## 类可以实现接口

如果你希望在类中使用必须要被遵循的接口（类）或别人定义的对象结构，可以使用 `implements` 关键字来确保其兼容性：

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

基本上，在 `implements（实现）` 存在的情况下，该外部 `Point` 接口的任何更改都将导致代码库中的编译错误，因此可以轻松地使其保持同步：

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

注意，`implements` 限制了类实例的结构，如下所示:

```ts
let foo: Point = new MyPoint();
```

但像 `foo: Point = MyPoint` 这样的代码，与其并不是一回事。

## 注意

### 并非每个接口都是很容易实现的

接口旨在声明 JavaScript 中可能存在的任意结构。

思考以下例子，可以使用 `new` 调用某些内容：

```ts
interface Crazy {
  new (): {
    hello: number;
  };
}
```

你可能会有下面这样的代码：

```ts
class CrazyClass implements Crazy {
  constructor() {
    return { hello: 123 };
  }
}

// Because
const crazy = new CrazyClass(); // crazy would be { hello:123 }
```

你可以使用接口声明所有“疯狂的”的 JavaScript 代码，甚至可以安全地在 TypeScript 中使用它们。但这并不意味着你可以使用 TypeScript 类来实现它们。
