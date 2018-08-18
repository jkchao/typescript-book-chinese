# 类型兼容性

类型兼容性（正如我们所要讨论到的）用于确定一个类型是否能分配给其他类型，如 `string` 类型与 `number` 类型不兼容：

```ts
let str: string = 'Hello'
let num: number = 123

str = num   // Error: 'number' 不能分配给 'string'
num = str   // Error: 'string' 不能分配给 'number' 
```

## 稳定性

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

这允许你动态创建对象。