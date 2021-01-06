# ThisType

通过 `ThisType` 我们可以在对象字面量中键入 `this`，并提供通过上下文类型控制 `this` 类型的便捷方式。它只有在 `--noImplicitThis` 的选项下才有效。

现在，在对象字面量方法中的 `this` 类型，将由以下决定：

- 如果这个方法显式指定了 `this` 参数，那么 `this` 具有该参数的类型。（下例子中 `bar`）
- 否则，如果方法由带 `this` 参数的签名进行上下文键入，那么 `this` 具有该参数的类型。（下例子中 `foo`）
- 否则，如果 `--noImplicitThis` 选项已经启用，并且对象字面量中包含由 `ThisType<T>` 键入的上下文类型，那么 `this` 的类型为 `T`。
- 否则，如果 `--noImplicitThis` 选项已经启用，并且对象字面量中不包含由 `ThisType<T>` 键入的上下文类型，那么 `this` 的类型为该上下文类型。
- 否则，如果 `--noImplicitThis` 选项已经启用，`this` 具有该对象字面量的类型。
- 否则，`this` 的类型为 `any`。

一些例子：

```ts
// Compile with --noImplicitThis

type Point = {
  x: number;
  y: number;
  moveBy(dx: number, dy: number): void;
};

let p: Point = {
  x: 10,
  y: 20,
  moveBy(dx, dy) {
    this.x += dx; // this has type Point
    this.y += dy; // this has type Point
  }
};

let foo = {
  x: 'hello',
  f(n: number) {
    this; // { x: string, f(n: number): void }
  }
};

let bar = {
  x: 'hello',
  f(this: { message: string }) {
    this; // { message: string }
  }
};
```

类似的方式，当使用 `--noImplicitThis` 时，函数表达式赋值给 `obj.xxx` 或者 `obj[xxx]` 的目标时，在函数中 `this` 的类型将会是 `obj`：

```ts
// Compile with --noImplicitThis

obj.f = function(n) {
  return this.x - n; // 'this' has same type as 'obj'
};

obj['f'] = function(n) {
  return this.x - n; // 'this' has same type as 'obj'
};
```

通过 API 转换参数的形式来生成 `this` 的值的情景下，可以通过创建一个新的 `ThisType<T>` 标记接口，可用于在上下文中表明转换后的类型。尤其是当字面量中的上下文类型为 `ThisType<T>` 或者是包含 `ThisType<T>` 的交集时，显得尤为有效，对象字面量方法中 `this` 的类型即为 `T`。

```ts
// Compile with --noImplicitThis

type ObjectDescriptor<D, M> = {
  data?: D;
  methods?: M & ThisType<D & M>; // Type of 'this' in methods is D & M
};

function makeObject<D, M>(desc: ObjectDescriptor<D, M>): D & M {
  let data: object = desc.data || {};
  let methods: object = desc.methods || {};
  return { ...data, ...methods } as D & M;
}

let obj = makeObject({
  data: { x: 0, y: 0 },
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx; // Strongly typed this
      this.y += dy; // Strongly typed this
    }
  }
});

obj.x = 10;
obj.y = 20;
obj.moveBy(5, 5);
```

在上面的例子中，`makeObject` 参数中的对象属性 `methods` 具有包含 `ThisType<D & M>` 的上下文类型，因此对象中 `methods` 属性下的方法的 `this` 类型为 `{ x: number, y: number } & { moveBy(dx: number, dy: number): number }`。

`ThisType<T>` 的接口，在 `lib.d.ts` 只是被声明为空的接口，除了可以在对象字面量上下文中可以被识别以外，该接口的作用等同于任意空接口。
