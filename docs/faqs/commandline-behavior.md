# 命令行的行为

## 如何控制输出文件中的排序（-- out）？

输出文件的排序遵循预处理后输入文件的顺序。

编译器执行预处理，主要是为了解决所有的三斜线指令和模块导入。在这个过程中，额外的文件将会被将入到编译过程中。

这个过程开始于一个给定的根文件，这些是在命令行或者是 `tsconfig.json` 文件中 files 指定文件名，这些根文件按照指定的顺序进行预处理。在一个文件添加到这个列表之前，将处理所有的三斜线引用和模块导入语法，并包括它们的目标。三斜线引用和导入语法按照它们在文件中出现的顺序，以深度优先的方式解析。

请参考有关[三斜线指令](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html)的更多信息，和[模块](https://www.typescriptlang.org/docs/handbook/module-resolution.html)导入语法的信息。

## `Exported variable [name] has or is using private name [name]` 是什么错误？

当你使用 `--declarartion` 编译选项的时候，可能会出现这个错误，因为编译器试图生成与你定义模块完全匹配的声明文件：

假设你有这样一段代码：

```ts
/// MyFile.ts
class Test {
  // ... other members ....
  constructor(public parent: Test) {}
}

export let t = new Test('some thing');
```

为了生成声明文件，编译器必须为 `t` 写一个类型：

```ts
/// MyFile.d.ts, auto-generated
export let t: ___fill in the blank___;
```

成员 `t` 有类型 `Test`，但是类型 `Test` 并不是可见的，因为它没有导出，因此我们不能写 `t: Test`。

在这个非常简单的例子里，我们可以用一个对象字面量重写 `Test's` 的形状。但是对于绝大多数情况，这并不能正常工作。如代码里所写，Test 的形状是自引用的，不能重写为匿名函数。如果 `Test` 有任何私有或受保护的成员，这同样也不能正常工作。因此，与其让你通过编写一个真实的类来获得 65% 的成功而后开始抛出错误，我们仅仅是在一开始的时候就抛出错误（你以后会发现）并为你省去不必要的麻烦。

为了避免这些错误：

- 导出相关类型中使用的声明
- 当编写声明的时候，显示的为编译器指定类型注解

## 为什么添加 `--outDir` 属性后，当在添加一个新文件时，会把所有的输出删除

`--outDir` 指定输出的「根」目录。编译器需要此属性，用来将资源映射输出到根目录。如果 `--rootDir` 没有被指定，编辑器将会自己计算出一个。它根据常见的路径计算，它是所有输入文件的最长公共前缀。显然，当在较短路径前缀中添加新文件时，`--rootDir` 将会被修改。

为了确保添加一个新文件时，输出不会被修改，你应该在命令行中或 `tsconfig.json` 指定一个 `--rootDir`。
