# 枚举

枚举是组织收集有关联变量的一种方式，许多程序语言（如：c/c#/Java）都有枚举数据类型。下面是定义一个 TypeScript 枚举类型的方式：

```ts
enum CardSuit {
  Clubs,
  Diamonds,
  Hearts,
  Spades
}

// 简单的使用枚举类型
let Card = CardSuit.Clubs;

// 类型安全
Card = 'not a member of card suit'; // Error: string 不能赋值给 `CardSuit` 类型
```

这些枚举类型的值都是数字类型，因此它们被称为数字类型枚举。

## 数字类型枚举与数字类型

<!-- TypeScript 枚举类型是基于数字的，这意味着可以将数字类型赋值给枚举类型的实例，以及任何与数字类型兼容的其他任何类型： -->

数字类型枚举，允许我们将数字类型或者其他任何与数字类型兼容的类型赋值给枚举类型的实例。

```ts
enum Color {
  Red,
  Green,
  Blue
}

let col = Color.Red;
col = 0; // 有效的，这也是 Color.Red
```

## 数字类型枚举与字符串类型

在我们继续深入学习枚举类型之前，先来看看它编译的 JavaScript 吧，以下是一个简单的 TypeScript 枚举类型：

```ts
enum Tristate {
  False,
  True,
  Unknown
}
```

其被编译成 JavaScript 后如下所示：

```ts{3}
var Tristate;
(function(Tristate) {
  Tristate[(Tristate['False'] = 0)] = 'False';
  Tristate[(Tristate['True'] = 1)] = 'True';
  Tristate[(Tristate['Unknown'] = 2)] = 'Unknown';
})(Tristate || (Tristate = {}));
```

先让我们聚焦 `Tristate[Tristate['False'] = 0] = 'False'` 这行代码，其中 `Tristate['False'] = 0` 的意思是将 `Tristate` 对象里的 `False` 成员值设置为 `0`。注意，JavaScript 赋值运算符返回的值是被赋予的值（在此例子中是 `0`），因此下一次 JavaScript 运行时执行的代码是 `Tristate[0] = 'False'`。意味着你可以使用 `Tristate` 变量来把字符串枚举类型改造成一个数字或者是数字类型的枚举类型，如下所示：

```ts
enum Tristate {
  False,
  True,
  Unknown
}

console.log(Tristate[0]); // 'False'
console.log(Tristate['False']); // 0
console.log(Tristate[Tristate.False]); // 'False' because `Tristate.False == 0`
```

## 改变与数字枚举关联的数字

默认情况下，第一个枚举值是 `0`，然后每个后续值依次递增 1：

```ts
enum Color {
  Red, // 0
  Green, // 1
  Blue // 2
}
```

但是，你可以通过特定的赋值来改变给任何枚举成员关联的数字，如下例子，我们从 3 开始依次递增：

```ts
enum Color {
  DarkRed = 3, // 3
  DarkGreen, // 4
  DarkBlue // 5
}
```

::: tip
我通常用 `= 1` 初始化，因为在枚举类型值里，它能让你做一个安全可靠的检查。
:::

## 使用数字类型作为标志

枚举的一个很好用途是使用枚举作为标志。这些标志允许你检查一组条件中的某个条件是否为真。考虑如下代码例子，我们有一组关于 animals 的属性：

<!-- prettier-ignore -->
```ts
enum AnimalFlags {
  None        = 0,
  HasClaws    = 1 << 0,
  CanFly      = 1 << 1,
  EatsFish    = 1 << 2,
  Endangered  = 1 << 3
}
```

在这里，我们使用了左移的位运算符，将数字 `1` 的二进制向左移动位置得到数字 `0001`、`0010`、`0100` 和 `1000`（换成十进制结果是：1, 2, 4, 8）。当你在使用这种标记的时候，这些位运算符 `|` (或)、`&` （和）、`~` （非）将会是你最好的朋友：

<!-- prettier-ignore -->
```ts
enum AnimalFlags {
  None        = 0,
  HasClaws    = 1 << 0,
  CanFly      = 1 << 1
}

interface Animal {
  flags: AnimalFlags;
  [key: string]: any;
}

function printAnimalAbilities(animal: Animal) {
  var animalFlags = animal.flags;
  if (animalFlags & AnimalFlags.HasClaws) {
    console.log('animal has claws');
  }
  if (animalFlags & AnimalFlags.CanFly) {
    console.log('animal can fly');
  }
  if (animalFlags == AnimalFlags.None) {
    console.log('nothing');
  }
}

var animal = { flags: AnimalFlags.None };
printAnimalAbilities(animal); // nothing
animal.flags |= AnimalFlags.HasClaws;
printAnimalAbilities(animal); // animal has claws
animal.flags &= ~AnimalFlags.HasClaws;
printAnimalAbilities(animal); // nothing
animal.flags |= AnimalFlags.HasClaws | AnimalFlags.CanFly;
printAnimalAbilities(animal); // animal has claws, animal can fly
```

在这里：

- 我们使用 `|=` 来添加一个标志；
- 组合使用 `&=` 和 `~` 来清理一个标志；
- `|` 来合并标志。

::: tip
你可以组合标志，用来在枚举类型中定义方便快捷的方式，如下 `EndangeredFlyingClawedFishEating`：
:::

<!-- prettier-ignore -->
```ts
enum AnimalFlags {
  None        = 0,
  HasClaws    = 1 << 0,
  CanFly      = 1 << 1,
  EatsFish    = 1 << 2,
  Endangered  = 1 << 3,

  EndangeredFlyingClawedFishEating = HasClaws | CanFly | EatsFish | Endangered
}
```

## 字符串枚举

在上文中，我们只看到了数字类型的枚举，实际上，枚举类型的值，也可以是字符串类型。

```ts
export enum EvidenceTypeEnum {
  UNKNOWN = '',
  PASSPORT_VISA = 'passport_visa',
  PASSPORT = 'passport',
  SIGHTED_STUDENT_CARD = 'sighted_tertiary_edu_id',
  SIGHTED_KEYPASS_CARD = 'sighted_keypass_card',
  SIGHTED_PROOF_OF_AGE_CARD = 'sighted_proof_of_age_card'
}
```

这些可以更容易被处理和调试，因为它们提供有意义/可调试的字符串。

你可以使用它们用于简单的字符串比较：

```ts
// Where `someStringFromBackend` will be '' | 'passport_visa' | 'passport' ... etc.
const value = someStringFromBackend as EvidenceTypeEnum;

// Sample use in code
if (value === EvidenceTypeEnum.PASSPORT) {
  console.log('You provided a passport');
  console.log(value); // `passport`
}
```

## 常量枚举

```ts
enum Tristate {
  False,
  True,
  Unknown
}

const lie = Tristate.False;
```

`const lie = Tristate.False` 会被编译成 JavaScript `let lie = Tristate.False` (是的，编译后与编译前，几乎相同)。这意味着在运行执行时，它将会查找变量 `Tristate` 和 `Tristate.False`。在此处获得性能提升的一个小技巧是使用常量枚举：

```ts
const enum Tristate {
  False,
  True,
  Unknown
}

const lie = Tristate.False;
```

将会被编译成：

```js
let lie = 0;
```

编译器将会：

- 内联枚举的任何用法（`0` 而不是 `Tristate.False`）；
- 不会为枚举类型编译成任何 JavaScript（在这个例子中，运行时没有 `Tristate` 变量），因为它使用内联语法。

### 常量枚举 `preserveConstEnums` 选项

使用内联语法对性能有明显的提升作用。运行时没有 `Tristate` 变量的事实，是因为编译器帮助你把一些在运行时没有用到的不编译成 JavaScript。然而，你可能想让编译器仍然把枚举类型编译成 JavaScript，用于如上例子中从字符串到数字，或者是从数字到字符串的查找。在这种情景下，你可以使用编译选项 `--preserveConstEnums`，它会编译出 `var Tristate` 的定义，因此你在运行时，手动使用 `Tristate['False']` 和 `Tristate[0]`。并且这不会以任何方式影响内联。

## 有静态方法的枚举

你可以使用 `enum` + `namespace` 的声明的方式向枚举类型添加静态方法。如下例所示，我们将静态成员 `isBusinessDay` 添加到枚举上：

```ts
enum Weekday {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

namespace Weekday {
  export function isBusinessDay(day: Weekday) {
    switch (day) {
      case Weekday.Saturday:
      case Weekday.Sunday:
        return false;
      default:
        return true;
    }
  }
}

const mon = Weekday.Monday;
const sun = Weekday.Sunday;

console.log(Weekday.isBusinessDay(mon)); // true
console.log(Weekday.isBusinessDay(sun));
```

## 开放式枚举

::: tip
你只有在不使用模块时，开放式的枚举才有意义，你应该使用模块，因此这部分在文章最后。
:::

让我们再一次看看编译成 JavaScript 的枚举是什么样子：

```ts
var Tristate;
(function(Tristate) {
  Tristate[(Tristate['False'] = 0)] = 'False';
  Tristate[(Tristate['True'] = 1)] = 'True';
  Tristate[(Tristate['Unknown'] = 2)] = 'Unknown';
})(Tristate || (Tristate = {}));
```

我们已经解释了 `Tristate[Tristate['False'] = 0] = 'False'` 部分，现在我们来看看包裹函数 `(function (Tristate) { /* code here */})(Tristate || (Tristate = {}))`，特别是 `(Tristate || (Tristate = {}))` 部分。这捕获了一个局部变量 `TriState`，它要么指向已经定义的`TriState` 值，要么使用一个新的空对象来初始化它。

这意味着你可以跨多个文件拆分（和扩展）枚举定义，如下所示，你可以把 `Color` 的定义拆分至两个块中：

```ts
enum Color {
  Red,
  Green,
  Blue
}

enum Color {
  DarkRed = 3,
  DarkGreen,
  DarkBlue
}
```

::: tip
你应该在枚举的延续块中，重新初始化第一个成员（此处为 `DarkRed = 3`），使生成的代码不破坏先前定义的值（即0、1...等值）。如果您仍然不这样做，TypeScript 将会发出警告（错误信息：`In an enum with multiple declarations, only one declaration can omit an initializer for its first enum element.`）。
:::
