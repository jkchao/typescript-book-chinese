# 一些不能按预期工作的代码

## 你应该像这样发出一些类，以便于他们拥有真正的私有成员

> 如果我写下一些以下代码

```ts
class Foo {
  private x = 0;
  increment(): number {
    this.x++;
    return x;
  }
}
```

> 你应该发出这样的代码，以便 `x` 是真正的私有成员：

```ts
var Foo = (function() {
  var x = 0;

  function Foo() {}
  Foo.prototype.increment = function() {
    x++;
    return x;
  };
  return Foo;
})();
```

这些代码不会工作，它创建了一个所有类共享的单个私有字段：

```ts
var a = new Foo();
a.increment(); // Prints 1
a.increment(); // Prints 2
var b = new Foo(); // Should not affect a
a.increment(); // Prints 1
```

## 你应该发出这样的类，这样它们就不会在回调函数中丢失 `this`

> 如果我写下这样的代码

```ts
class MyClass {
  method() {}
}
```

> 你应该发出这样的代码，以便我不会在回调函数中丢失 `this`

```ts
var MyClass = (function() {
  function MyClass() {
    this.method = function() {};
  }
  return MyClass;
})();
```

这里有两个问题：

首先，建议改变的行为与 ECMAScript 规范不一致。在这方面没有任何异议 -- TypeScript 必须与 JavaScript 具有相同的运行时行为。

其次，这个运行时类的特点非常令人惊讶。它为每个实例的每个方法创建一个闭包，而不是为每个方法创建一个闭包，这在初始化时，内存、以及垃圾回收上的性能都非常糟糕。
