# 泛型的实例化类型

假如你有一个具有泛型参数的类型，如一个类 `Foo`：

```ts
class Foo<T> {
  foo: T;
}
```

你想为一个特定的类型创建单独的版本，可以通过将它拷贝到一个新变量里，并且用具体类型代替泛型的类型注解的方式来实现。例如，如果你想有一个类：`Foo<number>`：

```ts
class Foo<T> {
  foo: T;
}

const FooNumber = Foo as { new (): Foo<number> }; // ref 1
```

在 `ref 1` 中，你说 `FooNumber` 与 `Foo` 相同，但是，只是将其看作使用 `new` 运算符调用时的一个 `Foo<Number>` 实例。

## 继承

类型断言模式是不安全的，因为编译器相信你在做正确的事情。在其他语言中用于类的常见模式是使用继承：

```ts
class FooNumber extends Foo<number> {}
```

::: warning
这里需要注意的一点，如果你在基类上使用修饰器，继承类可能没有与基类相同的行为（它不再被修饰器包裹）。
:::

当然，如果你不需要一个单独的类，你仍然写出一个有效的强制/断言模式，因此在开始时，我们便展示出了普通的断言模式：

```ts
function id<T>(x: T) {
  return x;
}

const idNum = id as { (x: number): number };
```

> 灵感来源于：[stackoverflow question](https://stackoverflow.com/questions/34859911/instantiated-polymorphic-function-as-argument-in-typescript/34864705#34864705)
