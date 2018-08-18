# 类型兼容性

类型兼容性（正如我们所要讨论到的）用于确定一个类型是否能分配给其他类型，如 `string` 类型与 `number` 类型不兼容：

```ts
let str: string = 'Hello'
let num: number = 123

str = num   // Error: 'number' 不能分配给 'string'
num = str   // Error: 'string' 不能分配给 'number' 
```

## 安全性

TypeScript 类型系统设计比较方便，它允许你有一些不正确的行为。例如：任何类型都能被分配给 `any`，这意味着告诉编辑器你可以做任何你想做的事情：

```ts
const foo: any = 123
foo = 'hello'

foo.toPrecision(3)
```

## 结构化

TypeScript 对象是一种结构类型，这意味着只要结构匹配，名字也就无关紧要了：

```ts
interface Point {
  x: number,
  y: number
}

class Point2D {
  constructor (public x: number, public y: number) {}
}

let p: Point

// ok, 因为是结构化的类型
p = new Point(1, 2)
```

这允许你动态创建对象（就好像你在 `vanilla JS` 中使用一样），并且它如果能被推断，该对象仍然具有安全性。

```ts
interface Point2D {
  x: number,
  y: number
}

interface Point3D {
  x: number,
  y: number,
  z: number
}

const point2D: Point2D = {
  x: 0,
  y: 0
}

const point2D: Point2D = { x: 0, y: 10 }
const point3D: Point3D = { x: 0, y: 10, z: 20 }
function iTakePoint2D (point: Point2D) { /* do something */ }

iTakePoint2D(point2D)  // ok, 完全匹配
iTakePoint2D(point3D)  // 额外的信息，没关系
iTakePoint2D({ x: 0 }) // Error: 没有 'y'
```

## 变体

对类型兼容性来说，变体是一个利于理解和重要的概念。

对一个简单类型 `Base` 和 `Child` 来说，如果 `Child` 是 `Base` 的子类，`Child` 的实例能被分配给 `Base` 类型的变量。

::: tip
这是多态性。
:::

在由 `Base` 和 `Child` 组合的复杂类型的类型兼容性中，它取决于相同场景下的 `Base` 与 `Child` 的变体：

- 协变（Covariant）：只在同一个方向；
- 逆变（Contravariant）：只在相反的方向；
- 双向协变（Bivariant）：包括同一个方向和不同方向；
- 不变（Invariant）：如果类型不完全相同，则他们是不兼容的。

::: tip
对于存在完全可变数据的健全的类型系统（如 JavaScript），`Invariant` 是一个唯一的有效可选属性，但是正如我们提到的，*便利性*迫使我们作出一些不是很安全的选择。
:::

关于协变和逆变的更多内容，请参考：[What are covariance and contravariance?](https://www.stephanboyer.com/post/132/what-are-covariance-and-contravariance)。

## 函数

当你在比较两个函数时，这有一些你需要考虑到的事情。

### 返回类型

协变（Covariant）：返回类型必须包含足够的数据。

```ts
interface Point2D { x: number, y: number }
interface Point3D { x: number, y: number, z: number }

let iMakePoint2D = (): Point2D => ({ x: 0, y: 0 })
let iMakePoint3D = (): Point3D => ({ x: 0, y: 0, z: 0 })

iMakePoint2D = iMakePoint3D
iMakePoint3D = iMakePoint2D // ERROR: Point2D 不能分配给 Point3D
```

### 参数数量

更少的参数数量是好的（如：函数能够选择性的忽略一些多余的参数），但是你得保证有足够的参数被使用了：

```ts
const iTakeSomethingAndPassItAnErr
      = (x: (err: Error, data: any) => void) => { /* 做一些其他的 */ }

iTakeSomethingAndPassItAnErr(() => null) // ok
iTakeSomethingAndPassItAnErr((err) => null) // ok
iTakeSomethingAndPassItAnErr((err, data) => null) // ok

// Error: 参数类型 `(err: any, data: any, more: any) => null` 不能分配给参数类型 `(err: Error, data: any) => void`
iTakeSomethingAndPassItAnErr((err, data, more) => null)
```

### 可选的和 rest 参数

可选的（预先确定的）和 Rest 参数（任何数量的参数）都是兼容的：

```ts
let foo = (x: number, y: number) => {}
let bar = (x?: number, y?: number) => {}
let bas = (...args: number[]) => {}

foo = bar = bas
bas = bar = foo
```

::: tip Note
可选的（上例子中的 `bar`）与不可选的（上例子中的 `foo`）仅在选项为 `strictNullChecks` 为 `false` 时兼容。
:::

### 函数参数类型

双向协变（Bivariant）：旨在支持常见的事件处理方案。

```ts
// 事件等级
interface Event { timestamp: number }
interface MouseEvent extends Event { x: number, y: number }
interface KeyEvent extends Event { keyCode: number }

// 简单的事件监听
enum EventType { Mouse, Keyboard }
function addEventListener(eventType: EventType, handler: (n: Event) => void) {
  // ...
}

// 不安全，但是有用，常见。函数参数的比较是双向协变。
addEventListener(EventType.Mouse, (e: MouseEvent) => console.log(e.x + ',' + e.y))

// 在安全情景下的一种不好方案
addEventListener(EventType.Mouse, (e: Event) => console.log((<MouseEvent>e).x + ',' + (<MouseEvent>e).y))
addEventListener(EventType.Mouse, <(e: Event) => void>((e: MouseEvent) => console.log(e.x + ',' + e.y)))

// 仍然不允许明确的错误，对完全不兼容的类型会强制检查
addEventListener(EventType.Mouse, (e: number) => console.log(e))
```

