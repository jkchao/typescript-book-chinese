# 类

## 为什么这些空类的行为很奇怪？

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

## 什么是名义上的类

这两段代码该如何解释：

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

## 为什么在我的实例方法中，`this` 成了一个「孤儿」？

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

## 当 `Bar` 是一个 `class` 时，`Bar` 和 `typeof Bar` 有什么区别？

> 我写下这段代码，但是我不理解我为什么会得到错误：

```ts
class MyClass {
  someMethod() {}
}
var x: MyClass;
// Cannot assign 'typeof MyClass' to MyClass? Huh?
x = MyClass;
```

在 JavaScript 中，类仅仅是个函数，这点很重要。我们将类对象本身 -- `MyClass` 的值，作为是构造函数。当一个构造函数被 `new` 调用时，我们得到一个对象，它是该类的实例。

因此，当我们定义一个类时，实际上，我们定义了两个不同的类型。

第一个是由类的名字推导而来，在这个例子中是 `MyClass`。这个是类实例的类型，它定义了类的实例具有的属性和方法，它是一个通过调用类的构造函数来返回的类型。

第二个类型是一个匿名的类型，它是构造函数具有的类型。它包含一个返回类实例的构造函数签名（可以使用 `new` 调用），同时，它也包含类中可能含有的 `static` 属性和方法。它也通常被称为「静态方面」，因为它包含那些静态成员（以及作为类的构造函数）。我们可以用 `typeof` 来引用此类型。

当在类型位置使用 `typeof` 操作符时，描述了表达式的类型。因此 `typeof MyClass` 是指 `MyClass` 的类型。

## 为什么我的子类属性初始值设定会覆盖基类构造函数中设置的值？

有关此问题，和其他初始化顺序问题，请参阅 [#1617](https://github.com/Microsoft/TypeScript/issues/1617)。

## 声明类和接口有什么区别？

参阅: http://stackoverflow.com/a/14348084/1704166

## 接口继承类，意味着什么？

> 这段代码是什么意思？

```ts
class Foo {
  /* ... */
}
interface Bar extends Foo {}
```

这创建了一个名叫 `Bar` 的类型，它与 `Foo` 的实例具有相同的成员。当 `Foo` 具有私有成员时，`Bar` 内的相同属性，必须由一个继承自 `Foo` 的类实现。总的来说，这种模式是应当避免的，尤其是在 `Foo` 有私有成员时。

## 为什么我会得到错误：`TypeError: [base class name] is not defined in __extends`？

> 我写下一段代码，

```ts
/** file1.ts **/
class Alpha {
  /* ... */
}

/** file2.ts **/
class Bravo extends Alpha {
  /* ... */
}
```

在运行时，有如下错误发生在 `_extends` 中：

```ts
Uncaught TypeError: Alpha is not defined
```

最常见的原因是在你的 HTML 中包含有 file2.ts 的 `script`，但是并没有包含 `file1.ts` 的 `script`。因此你需要在引用 `file2.ts` 之前引用 `file1.ts`。

## 为什么我会得到 `TypeError: Cannot read property 'prototype' of undefined" in __extends` 的错误？

> 我写下如下代码：

```ts
/** file1.ts **/
class Alpha {
  /* ... */
}

/** file2.ts **/
class Bravo extends Alpha {
  /* ... */
}
```

在运行时，有如下错误发生在 `_extends` 中：

```ts
Uncaught TypeError: Cannot read property 'prototype' of undefined
```

出现这种情况，原因可能有一些。

首先，在单个文件中，你在基类之前定义了派生类，那么你应该重新排序文件，以便在派生类之前声明基类。

如果你使用了 `--out` 的编译选项，编译器可能会对你希望文件的顺序感到困惑。请参阅常见问题简答中「如果控制文件排序」部分

如果您没有使用 `--out`，HTML 文件中的 `script` 引用文件的顺序可能出现错误。重新排序 `script` 对文件的引用，以便在定义派生类的文件之前包含定义基类的文件。

最后，如果你使用某种类型的第三方包，该包可能会错误地排序了文件。请参阅该工具的文档以了解如何在结果输出中正确排序输入文件。

## 为什么不扩展 `Error`、`Array`、`Map` 内置函数？

在 ES2015 中，返回一个对象的构造函数将 `this` 的值隐式替换为 `super(...)` 的任何调用者。这对于构造函数代码捕获 `super(...)` 的任何潜在返回值并将其替换为 `this` 是必要的。

这样导致的结果是：`Error`、`Array` 等子类将不再按预期工作。这是由于 `Error`、`Array` 等的构造函数使用 ECMAScript6 中的 `new.target` 来调整原型链。但是，在 ECMAScript 5 中调用构造函数时，无法确保 `new.target` 的值。在其他一些低水平的编译器通常都有相同的限制。

### 例如：

如下作为一个子类：

```ts
class FooError extends Error {
  constructor(m: string) {
    super(m);
  }
  sayHello() {
    return 'hello ' + this.message;
  }
}
```

你可能会发现：

- 通过这些子类的构造函数返回的对象中，方法可能是 `undefined`。因此，当调用 `sayHello` 时，会抛出一个错误。
- `instanceof` 将会在子类的实例和自身实例中被中断。因此 `new FooError() instanceof FooError` 将返回 `false`。

### 推荐

作为一个推荐方式，你可以在 `super(...)` 被调用之后手动调整原型。

```ts
class FooError extends Error {
  constructor(m: string) {
    super(m);

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, FooError.prototype);
  }

  sayHello() {
    return 'hello ' + this.message;
  }
}
```

然而，任何 `FooError` 的子类将不得不手动设置原型。在运行时，对于那些不支持 `Object.setPrototypeOf` 属性的，你可能用要 `__proto__` 来替代他。

不幸的是，[IE 10 及其一下不兼容这些方法](https://docs.microsoft.com/zh-cn/microsoft-edge/dev-guide/whats-new/javascript-version-information)。你可以手动将原型中的方法复制到实例本身，(例如：`FooError.prototype` 复制到 `this` 上)，但是对于原型链本身是无法修复的。
