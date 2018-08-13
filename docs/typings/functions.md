* [参数注释](#parameter-annotations)
* [返回类型注释](#return-type-annotation)
* [可选参数](#optional-parameters)
* [重载](#overloading)

## 函数

TypeScript类型系统对函数非常满意，毕竟它们是可组合系统的核心构建块。

### 参数注释

当然，你可以注释函数参数，就像你可以注释其他变量一样:

```ts
// variable annotation
var sampleVariable: { bar: number }

// function parameter annotation
function foo(sampleParameter: { bar: number }) { }
```

这里我使用了内联类型注释。当然你可以使用接口等。

### 返回类型注释

你可以在函数参数列表之后使用与变量相同的样式来注释返回类型，例如下面的例子`：Foo`：

```ts
interface Foo {
    foo: string;
}

// Return type annotated as `: Foo`
function foo(sample: Foo): Foo {
    return sample;
}
```

当然我在这里使用了一个 `interface`，但你可以自由地使用其他注释，例如内联注释。

通常，你不*需要*注释函数的返回类型，因为它通常可以由编译器推断。

```ts
interface Foo {
    foo: string;
}

function foo(sample: Foo) {
    return sample; // inferred return type 'Foo'
}
```

但是，添加这些注释以帮助解决错误通常是一个好主意，例如：

```ts
function foo() {
    return { fou: 'John Doe' }; // You might not find this misspelling of `foo` till it's too late
}

sendAsJSON(foo());
```

如果你不打算从函数返回任何内容，则可以将其标注为：`void` 。你通常可以删除：`void` 并将其留给推理引擎推导。

### 可选参数

你可以将参数标记为可选:

```ts
function foo(bar: number, bas?: string): void {
    // ..
}

foo(123);
foo(123, 'hello');
```

或者，你甚至可以提供一个默认值（在参数声明后使用 `= someValue` ），如果调用者没有提供该参数，则为注入的默认值：

```ts
function foo(bar: number, bas: string = 'hello') {
    console.log(bar, bas);
}

foo(123);           // 123, hello
foo(123, 'world');  // 123, world
```

### 重载

TypeScript允许你声明函数重载。这对于文档+类型安全目的很有用。请思考以下代码：

```ts
function padding(a: number, b?: number, c?: number, d?: any) {
    if (b === undefined && c === undefined && d === undefined) {
        b = c = d = a;
    }
    else if (c === undefined && d === undefined) {
        c = a;
        d = b;
    }
    return {
        top: a,
        right: b,
        bottom: c,
        left: d
    };
}
```

如果仔细查看代码，就会发现a，b，c，d的值会根据传入的参数数量而变化。此函数也只需要1个，2个或4个参数。可以使用函数重载来*强制*和*记录*这些约束。你只需多次声明函数头。最后一个函数头是在函数体内实际处于活动状态但不可用于外部。

如下所示:

```ts
// 重载
function padding(all: number);
function padding(topAndBottom: number, leftAndRight: number);
function padding(top: number, right: number, bottom: number, left: number);
// Actual implementation that is a true representation of all the cases the function body needs to handle
function padding(a: number, b?: number, c?: number, d?: number) {
    if (b === undefined && c === undefined && d === undefined) {
        b = c = d = a;
    }
    else if (c === undefined && d === undefined) {
        c = a;
        d = b;
    }
    return {
        top: a,
        right: b,
        bottom: c,
        left: d
    };
}
```

这里前三个函数头可有效调用 `padding`:

```ts
padding(1); // Okay: all
padding(1,1); // Okay: topAndBottom, leftAndRight
padding(1,1,1,1); // Okay: top, right, bottom, left

padding(1,1,1); // Error: Not a part of the available overloads
```

当然，最终声明（从函数内部看到的真正声明）与所有重载兼容是很重要的。这是因为这是函数体需要考虑的函数调用的真实性质。

>TypeScript中的函数重载没有任何运行时开销。它只允许你记录希望调用函数的方式，并且编译器会检查其余代码。