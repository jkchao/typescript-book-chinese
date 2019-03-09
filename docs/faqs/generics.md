# 泛型

## 通过接口 `A<T>`，为什么 `A<string>` 可赋值给 `A<number>`？

> 我写下这段代码，让它抛出一个错误。

```typescript
interface Something<T> {
  name: string;
}
let x: Something<number>;
let y: Something<string>;
// Expected error: Can't convert Something<number> to Something<string>!
x = y;
```

`TypeScript` 使用了一种结构类型的系统。当判断 `Something<number>` 和 `Something<string>` 兼容性的时候，我们会检查每一个成员的每一个属性，如果类型的每个成员都是兼容的，那么这个类型也是兼容的。因为 `Something<T>` 没有在任何成员中使用 `T`，所以 `T` 是什么类型并不重要。

通常，你绝不应该有未使用类型的参数。该类型会有无法预料的兼容性（如上所示），同时在函数调用中也无法获取正确的泛型类型接口。

## 为什么类型接口不能在这个接口上运行: `interface Foo<T> { }`?

> 我写了一些这样的代码

```typescript
interface Named<T> {
  name: string;
}
class MyNamed<T> implements Named<T> {
  name: 'mine';
}
function findByName<T>(x: Named<T>): T {
  // TODO: Implement
  return undefined;
}

var x: MyNamed<string>;
var y = findByName(x); // expected y: string, got y: {}
```

`TypeScript` 使用了一种结构类型的系统。这种结构性也适用于泛型类型接口。当在函数调用中推断 `T` 的类型时，我们试图在 `x` 参数上找到 `T` 类型的成员，从而判断 `T` 应该是什么。因为没有使用 `T` 的成员，所以没有什么可推断的，于是我们返回 `{}`。

请注意，如果你使用 `T`，你就会得到正确的结果：

```typescript
interface Named<T> {
  name: string;
  value: T; // <-- added
}
class MyNamed<T> implements Named<T> {
  name: 'mine';
  value: T; // <-- added
}
function findByName<T>(x: Named<T>): T {
  // TODO: Implement
  return undefined;
}

var x: MyNamed<string>;
var y = findByName(x); // got y: string;
```

记住：你绝不应该有未使用类型的参数！请看前一个问题，了解为什么这样不好。

## 为什么不要在泛型函数中写 `typeof T`、`new T`, 或者 `instanceof T`？

> 我写了一些这样的代码

```typescript
function doSomething<T>(x: T) {
  // Can't find name T?
  let xType = typeof T;
  let y = new xType();
  // Same here?
  if(someVar instanceof typeof T) {

  }
  // How do I instantiate?
  let z = new T();
}
```

泛型在编译期间被删除，这意味着在 `doSomething` 运行时没有值为 `T` 。这里人们试图表达的正常模式是将类的构造函数用于工厂或运行时类型检查。。在这两种情况下，使用构造签名并将其作为参数提供是正确的：
```typescript
function create<T>(ctor: { new(): T }) {
  return new ctor();
}
var c = create(MyClass); // c: MyClass

function isReallyInstanceOf<T>(ctor: { new(...args: any[]): T }, obj: T) {
  return obj instanceof ctor;
}
```