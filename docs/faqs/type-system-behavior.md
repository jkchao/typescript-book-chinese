# 类型系统的行为

## 什么是结构化类型

TypeScript 使用**结构化类型**，这个系统并不同于你可能使用过的一些其他流行语言（如：Java、C# 等）的类型系统。

结构化类型系统背后的思想是如果他们的成员类型是兼容的，则他们是兼容的。例如：在 C# 或者 Java 中，有两个名为 `MyPoint` 和 `YourPoint` 的类，它们都具有公共 `int` 类型的属性 `x` 和 `y`，这两个类是不可互换的。但在结构化的类型系统中（TypeScript），这些类型具有不同名称的事实并不重要，因为它们具有相同类型的相同成员，所以它们是相同的（可以互换的）。

这也适用于子类型关系。例如：在 C++ 中，你只能使用 `Dog` 来替代 `Animal`，如果明确 `Animal` 是 `Dog` 的父类。在 TypeScript 中，并不是这种情况，具有至少与 `Animal` 一样多的成员（适当的类型）的 `Dog`，才是 `Animal` 的子类型，而不管是否是继承关系。

这对于习惯于使用名义类型语言的程序员来说，会产生一些令人惊讶的后果。在这个 FAQs 中的许多问题，都可以追溯到结构化类型及其含义。一旦你掌握了他的基础知识，就很容易理解了。

### 什么是类型删除

TypeScript 移除了类型断言、接口、类型别名和一些其他编译期间的类型系统结构。

输入：

```ts
var x: SomeInterface;
```

输出：

```ts
var x;
```

这意味着，在运行时，没有信息表明一些变量 `x` 被声明为 `SomeInterface` 类型。

对于习惯用使用反射或其他元数据系统的程序员来说，缺少的运行时类型信息可能会令人惊讶。FAQs 中的许多问题都可以归结为「因为类型被删除」。

### 为什么没有 setter 时的 getter，没有被认为是只读？

> 我写下一段代码，并且期望它会抛出错误
```ts
class Foo {
   get bar() {
     return 42;
   }
}
let x = new Foo();
// Expected error here
x.bar = 10;
```

这在 TypeScript 2.0 + 中会抛出错误。具体请看 [#12](https://github.com/Microsoft/TypeScript/issues/12)


### 为什么函数参数是双向协变

> 我写下一段代码，并且期望它会抛出错误

```ts
function trainDog(d: Dog) { ... }
function cloneAnimal(source: Animal, done: (result: Animal) => void): void { ... }
let c = new Cat();

// Runtime error here occurs because we end up invoking 'trainDog' with a 'Cat'
cloneAnimal(c, trainDog);
```

这是由于类型系统中缺乏显示协变/逆变注解而导致的不健全。由于协变/逆变的缺失，当被问及到 `(x: Dog) => void` 是否能够分配给 `(x: Animal) => void` 时，TypeScript 必须更加的宽容处理。

为了理解为什么是这样，思考两个问题：`Dog[]` 是 `Animal[]` 的子类型吗？在 TypeScript 中 `Dog[]` 是否应该是 `Animal[]` 的子类型？

第二个问题很容易分析，如果它的答案是 `no` 了？

```ts
function checkIfAnimalsAreAwake(arr: Animal[]) { ... }

let myPets: Dog[] = [spot, fido];

// Error? Can't substitute Dog[] for Animal[] ?
checkIfAnimalsAreAwake(myPets);
```

这将是非常烦人。在 `checkIfAnimalsAreAwake` 没有修改 arr 的情况下，这段代码 100% 是正确的。没有充足的理由来认为 `Dog[]` 不能被赋值给 `Animal[]` - 在这里很明显，一组 `Dog` 是一组 `Anumal`。

回到第一个问题，类型系统什么时候会决定 `Dog[]` 是 `Animal[]` 的子类型。它将会进行以下计算（写到这里，编译器好像没有进行任何优化），以及其他一些：

- `Dog[]` 可以被分配给 `Animal[]` 类型吗？
- `Dog[]` 的每个成员都可以被分配给 `Animal[]` 吗？
  - `Dog[].push` 可以分配给 `Animal[].push` 吗？
    - 类型 `(x: Dog) => number` 可以分配给 `(x: Animal) => number` 吗？
      - `(x: Dog) => number` 的第一个参数的类型，可以分配给 `(x: Animal) => numbder` 的第一个参数吗？
        - `Dog` 可以分配给 `Animal` 吗？
          - 是的

正如你在这里所看到的一样，类型系统必须提问「`(x: Dog) => number` 的类型能分配给 `(x: Animal) => number` 吗？」，这与类型系统要求原始类型所需的问题相同。如果 TypeScript 强制函数参数进行逆变（`Animal` 可以分配给 `Dog`），这可能会导致 `Dog[]` 并不能分配给 `Animal[]`。

总的来说，在 TypeScript 的类型系统里，一个可以接受更多特定类型参数的函数是否能够分配给一个较少特定类型参数的函数的问题，它的答案有一个先决条件 - 是否有更多特定类型的数组能够分配到一个较少特定类型的数组。在大多数情况下，如果后者不是这情情况，则认为是不被允许的。所以我们必须对函数参数类型的特定情况进行正确的权衡。