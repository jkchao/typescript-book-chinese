# 索引签名

可以用字符串来访问 JavaScript 中的对象（TypeScript中也一样），以此来保存来自其他任何对象的引用。

这有一个快速开始的例子：

```ts
let foo: any = {}
foo['Hello'] = 'World'
console.log(foo['Hello']) // World
```

我们在键 `Hello` 下保存了一个字符串 `World`，记住我们提到过它可以保存任意的 JavaScript 对象，理所当然，它也能保存一个类的实例。

```ts
class Foo {
  constructor (public message: string) {}
  log () {
    console.log(this.message)
  }
}

let foo: any = {}
foo['Hello'] = new Foo('World')
foo['Hello'].log() // World
```

同样的，我们说过它能被一个字符串反问。当你传进一个其他对象至索引签名，JavaScript 在运行时得到结果之前会先调用 `.toString`：

```ts
let obj = {
  toString () {
    console.log('toString called')
    return 'Hello'
  }
}

let foo: any = {}
foo[obj] = 'World'            // toString called
console.log(foo[obj])         // toString called, World
console.log(foo['Hello'])     // World
```

::: tip
只要索引位置使用了 `obj`，`toString` 都将会被调用。
:::

数组有点稍微不同，对于一个 `number` 类型的索引签名，JavaScript 引擎将会尝试去优化（这取决于它是否是一个真的数组、存储的项目结构是否匹配等）。因此，`number` 应该被考虑作为一个有效的对象访问器（这与 `string` 不同），如下例子：

```ts
let foo = ['World']
console.log(foo[0]) // World
```

因此，这就是 JavaScript。现在让我们看看 JavaScript 对这些概念更优雅的处理。

## TypeScript 索引签名

