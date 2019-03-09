# 一些常见的「bug」并不是 bug

> 注：此章节的所有文章都来自 [TypeScript FAQs](https://github.com/Microsoft/TypeScript/wiki/FAQ)

这有一些看起来像 Bug 的行为，但实际上，它们并不是。

- 两个空的类，可以彼此代替

  - 查看相关的 [FAQ](./class.html#为什么这些空类的行为很奇怪？)

- 我可以在一个返回值为 void 的函数中使用一个返回值不为 `void` 的函数

  - 查看相关的 [FAQ](./type-system-behavior.html#为什么一个返回值不是-void-的函数，可以赋值给一个返回值为-void-的函数？)
  - 查看此 [ISSUES](https://github.com/Microsoft/TypeScript/issues/4544)

- 我可以使用一个更短的参数列表，而不是一个期望的长参数列表

  - 查看相关 [FAQ](./type-system-behavior.html#为什么有更少参数的函数能够赋值给更多参数的函数？)
  - 相关 ISSUES：[#370](https://github.com/Microsoft/TypeScript/issues/370)、[#9300](https://github.com/Microsoft/TypeScript/issues/9300)、[#9765](https://github.com/Microsoft/TypeScript/issues/9765)、[#9825](https://github.com/Microsoft/TypeScript/issues/9825)、[#13043](https://github.com/Microsoft/TypeScript/issues/13043)、[#16871](https://github.com/Microsoft/TypeScript/issues/16871)、[#13529](https://github.com/Microsoft/TypeScript/issues/13529)、[#13977](https://github.com/Microsoft/TypeScript/issues/13977)、[#17868](https://github.com/Microsoft/TypeScript/issues/17868)、[#20274](https://github.com/Microsoft/TypeScript/issues/20274)、[#20541](https://github.com/Microsoft/TypeScript/issues/20541)、[#21868](https://github.com/Microsoft/TypeScript/issues/21868)。

- 类的 `private` 成员，在运行时实际上是可见的

  - 查看相关 FAQ，以及一些修复的建议
  - 相关 ISSUES：[#564](https://github.com/Microsoft/TypeScript/issues/564)、[#1537](https://github.com/Microsoft/TypeScript/issues/1537)、[#2967](https://github.com/Microsoft/TypeScript/issues/2967)、[#3151](https://github.com/Microsoft/TypeScript/issues/3151)、[#6748](https://github.com/Microsoft/TypeScript/issues/6748)、[#8847](https://github.com/Microsoft/TypeScript/issues/8847)、[#9733](https://github.com/Microsoft/TypeScript/issues/9733)、[#11033](https://github.com/Microsoft/TypeScript/issues/11033)。
