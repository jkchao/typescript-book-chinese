# 协变与逆变

> [原文链接: what are covariance and contravariance](https://www.stephanboyer.com/post/132/what-are-covariance-and-contravariance)

[子类型](https://en.wikipedia.org/wiki/Subtyping) 在编程理论上是一个复杂的话题，而他的复杂之处来自于一对经常会被混淆的现象，我们称之为*协变*与*逆变*。这篇文章将会解释上述两个概念。

开始文章之前我们先约定如下的标记：

- `A ≼ B` 意味着 `A` 是 `B` 的子类型。
- `A → B` 指的是以 `A` 为参数类型，以 `B` 为返回值类型的函数类型。
- `x : A` 意味着 `x` 的类型为 `A`。

## 一个有趣的问题

假设我有如下三种类型：

> `Greyhound ≼ Dog ≼ Animal`

`Greyhound` （灰狗）是 `Dog` （狗）的子类型，而 `Dog` 则是 `Animal` （动物）的子类型。由于子类型通常是可传递的，因此我们也称 `Greyhound` 是 `Animal` 的子类型。

**问题**：以下哪种类型是 `Dog → Dog` 的子类型呢？

1. `Greyhound → Greyhound`
2. `Greyhound → Animal`
3. `Animal → Animal`
4. `Animal → Greyhound`

让我们来思考一下如何解答这个问题。首先我们假设 `f` 是一个以 `Dog → Dog` 为参数的函数。它的返回值并不重要，为了具体描述问题，我们假设函数结构体是这样的： `f : (Dog → Dog) → String`。

现在我想给函数 `f` 传入某个函数 `g` 来调用。我们来瞧瞧当 `g` 为以上四种类型时，会发生什么情况。

**1. 我们假设 `g : Greyhound → Greyhound`， `f(g)` 的类型是否安全？**

不安全，因为在f内调用它的参数`(g)`函数时，使用的参数可能是一个不同于灰狗但又是狗的子类型，例如 `GermanShepherd` （牧羊犬）。

**2. 我们假设 `g : Greyhound → Animal`， `f(g)` 的类型是否安全？**

不安全。理由同(1)。

**3. 我们假设 `g : Animal → Animal`， `f(g)` 的类型是否安全？**

不安全。因为 `f` 有可能在调用完参数之后，让返回值，也就是 `Animal` （动物）狗叫。并非所有动物都会狗叫。

**4. 我们假设 `g : Animal → Greyhound`， `f(g)` 的类型是否安全？**

是的，它的类型是安全的。首先，`f` 可能会以任何狗的品种来作为参数调用，而所有的狗都是动物。其次，它可能会假设结果是一条狗，而所有的灰狗都是狗。

## 展开讲讲？

如上所述，我们得出结论：

> `(Animal → Greyhound) ≼ (Dog → Dog)`

返回值类型很容易理解：灰狗是狗的子类型。但参数类型则是相反的：动物是狗的*父类*！

用合适的术语来描述这个奇怪的表现，可以说我们允许一个函数类型中，返回值类型是*协变*的，而参数类型是*逆变*的。返回值类型是协变的，意思是 `A ≼ B` 就意味着 `(T → A) ≼ (T → B)` 。参数类型是逆变的，意思是 `A ≼ B` 就意味着 `(B → T) ≼ (A → T)` （ `A` 和 `B` 的位置颠倒过来了）。

**一个有趣的现象**：在 `TypeScript` 中， [参数类型是双向协变的](https://github.com/Microsoft/TypeScript/wiki/FAQ#why-are-function-parameters-bivariant)
，也就是说既是协变又是逆变的，而这并不安全。但是现在你可以在 [`TypeScript 2.6`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-6.html) 版本中通过 `--strictFunctionTypes` 或 `--strict` 标记来修复这个问题。

## 那其他类型呢？

**问题**：`List<Dog>` 能否为 `List<Animal>` 的子类型？

答案有点微妙。如果列表是不可变的（immutable），那么答案是肯定的，因为类型很安全。但是假如列表是可变的，那么答案绝对是否定的！

原因是，假设我需要一串 `List<Animal>` 而你传给我一串 `List<Dog>`。由于我认为我拥有的是一串 `List<Animal>` ，我可能会尝试往列表插入一只 `Cat`。那么你的 `List<Dog>` 里面就会有一只猫！类型系统不应该允许这种情况发生。

总结一下，我们可以允许不变的列表（immutable）在它的参数类型上是协变的，但是对于可变的列表（mutable），其参数类型则必须是不变的（invariant），既不是协变也不是逆变。

**一个有趣的现象**：在 `Java` 中，数组[既是可变的，又是协变的](https://en.wikipedia.org/wiki/Covariance_and_contravariance_%28computer_science%29#Covariant_arrays_in_Java_and_C.23)。当然，这并不安全。
