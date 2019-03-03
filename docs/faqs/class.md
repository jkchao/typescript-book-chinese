# 类

> 我写下这段代码，并期望它抛出错误

```ts
class Empty {
  /* empty */
}

var e2: Empty = window;
```

请参阅此问题「[为什么所有的内容都能赋值给空的接口](./type-system-behavior.html#为什么所有的类型，都能赋值给一个空的接口？)」。值得重新思考一下这个答案的建议：一般来说，你永远不应该声明一个没有属性的类。即使对于子类也是如此：

```ts
class Base {
  important: number;
  properties: number;
}
class Alpha extends Base {}
class Bravo extends Base {}
```

`Alpha` 和 `Bravo` 的结构相同，都是继承自 `Base`，这会产生许多令人惊讶的效果，所以别这么做。如果你想让 `Alpha` 与 `Bravo` 不相同，为它们各自提供一个属性。

### 什么是名义上的类

是什么解释了这两行代码的区别

```ts
class Alpha {
  x: number;
}
class Bravo {
  x: number;
}
class Charlie {
  private x: number;
}
class Delta {
  private x: number;
}

let a = new Alpha(),
  b = new Bravo(),
  c = new Charlie(),
  d = new Delta();

a = b; // OK
c = d; // Error
```

在 TypeScript 中，类进行结构上的比较，有一个例外是对于 `private` 与 `protected` 的成员。当一个成员是 `private` 或者 `protected` 时，它们必须来自同一个声明，才能被视为与另一个 `private` 或者 `protected` 的成员相同。

### 为什么在我的实例方法中，`this` 成了一个「孤儿」？

> 我写下如下代码

```ts
class MyClass {
  x = 10;
  someCallback() {
    console.log(this.x); // Prints 'undefined', not 10
    this.someMethod(); // Throws error "this.method is not a function"
  }
  someMethod() {}
}

let obj = new MyClass();
window.setTimeout(obj.someCallback, 10);
```

可能会提出一些相似的问题：

- 为什么在我的回调函数中类的属性没有定义？
- 为什么在我的回调函数中，`this` 指向 `window`？
- 为什么在我的回调函数中，`this` 指向 `undefined`？
- 为什么我会得到 `this.someMethod is not a function` 的错误？
- 为什么我会得到 `Cannot read property 'someMethod' of undefined` 的错误？

在 JavaScript 中，`this` 值由以下确定：

1. 该函数是调用 `.bind` 的结果吗？如果是这样，`this` 由传递给 `bind` 的第一个参数确定

2. 该函数是通过属性表达式 `expr.method() ?` 直接调用吗？如果是这样，`this` 指向 `expr`

3. 否则，`this` 是 `undefined`（在严格模式中），或者是 `window` （非严格模式中）。

在上一个例子中，影响结果的是这行代码：

```ts
window.setTimeout(obj.someCallback, 10);
```

在这里，我们提供了 `obj.someCallback` 到 `setTimeout` 的函数引用，然后该函数并不是作为 `bind` 的结果调用，也不是直接作为一个方法调用。因此在 `someCallback` 里的 `this` 指向 `window`（或者在严格模式下的 `undefied`）。

这里概述了一些解决办法：http://stackoverflow.com/a/20627988/1704166
