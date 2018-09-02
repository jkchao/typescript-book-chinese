# 解读 Errors

TypeScript 是一种专注于帮助开发人员的编程语言，当错误出现时，它会提供尽可能提供非常有用的错误信息。这对于那些信任使用者的编译器来说，可能会导致轻微的信息量过载，而不会那么实用。

让我们来看一个在 IDE 中的例子：

```ts
type SomethingComplex = {
  foo: number;
  bar: string;
};

function takeSomethingComplex(arg: SomethingComplex) {}

function getBar(): string {
  return 'some bar';
}

// 一个可能会出现的错误使用
const fail = {
  foo: 123,
  bar: getBar
};

takeSomethingComplex(fail); // 在这里 TypeScript 会报错
```

这个简单的例子，演示了一个常见的程序设计错误，它调用函数失败（`bar: getBar` 应该是 `bar: getBar()`）。幸运的是，一旦不符合类型要求，TypeScript 将会捕捉到这个错误。

## 错误分类

TypeScript 错误信息分为两类：简洁和详细。

### 简洁

简洁的错误信息是为了提供一个编译器描述的错误号以及一些相关的信息，一个简洁的错误信息类似于如下所示：

```ts
TS2345: Argument of type '{ foo: number; bar: () => string; }' is not assignable to parameter of type 'SomethingComplex'.
```

然而，它没有提供更深层次的信息，如为什么这个错误会发生。这就是详细错误所需要的原因。

## 详细

详细的错误信息类似于如下所示：

```ts
[ts]
Argument of type '{ foo: number; bar: () => string; }' is not assignable to parameter of type 'SomethingComplex'.
  Types of property 'bar' are incompatible.
    Type '() => string' is not assignable to type 'string'.
```

详细的错误信息是为了指导使用者知道为什么一些错误（在这个例子里是类型不兼容）会发生。第一行与简洁的错误信息相同，后跟一些详细的信息。你应该阅读这些详细信息，因为对于开发者的一些疑问，它都给出了问答：

```ts
ERROR: Argument of type '{ foo: number; bar: () => string; }' is not assignable to parameter of type 'SomethingComplex'.

WHY?
CAUSE ERROR: Types of property 'bar' are incompatible.

WHY?
CAUSE ERROR: Type '() => string' is not assignable to type 'string'.
```

所以，最根本的原因是：

- 在属性 `bar`
- 函数 `() => string` 它应该是一个字符串。

这能够帮助开发者修复 bar 属性的 bug（它们忘记了调用这个函数）。

## 在 IDE 中怎么提示

IDE 通常会在详细的错误提示之后显示简洁版本，如下所示：

<img :src="$withBase('/ide.png')" alt="ide"/>

- 你通常可能只会阅读「为什么」的详细信息；
- 当你想寻找相同的错误时（使用 `TSXXX` 错误编号，或者部分错误信息），使用简洁的版本。
