# TypeScript 中的静态构造函数

TypeScript 中的 `class` （JavaScript 中的 `class`）没有静态构造函数的功能，但是你可以通过调用它自己来获取相同的效果：

```ts
class MyClass {
  static initalize() {
    //
  }
}

MyClass.initalize();
```
