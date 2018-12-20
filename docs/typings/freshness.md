# Freshness

为了能让检查对象字面量类型更容易，TypeScript 提供 「[Freshness](https://github.com/Microsoft/TypeScript/pull/3823)」 的概念（它也被称为更严格的对象字面量检查）用来确保对象字面量在结构上类型兼容。

结构类型非常方便。考虑如下例子代码，它可以让你非常便利的从 JavaScript 迁移至 TypeScript，并且会提供类型安全：

```js
function logName(something: { name: string }) {
  console.log(something.name);
}

const person = { name: 'matt', job: 'being awesome' };
const animal = { name: 'cow', diet: 'vegan, but has milk of own specie' };
const randow = { note: `I don't have a name property` };

logName(person); // ok
logName(animal); // ok
logName(randow); // Error: 没有 `name` 属性
```

但是，结构类型有一个缺点，它能误导你认为某些东西接收的数据比它实际的多。如下例，TypeScript 发出错误警告：

```ts
function logName(something: { name: string }) {
  console.log(something.name);
}

logName({ name: 'matt' }); // ok
logName({ name: 'matt', job: 'being awesome' }); // Error: 对象字面量只能指定已知属性，`job` 属性在这里并不存在。
```

::: warning
请注意，这种错误提示，只会发生在对象字面量上。
:::

如果没有这种错误提示，我们可能会去寻找函数的调用 `logName({ name: 'matt', job: 'being awesome' })`，继而会认为 `logName` 可能会使用 `job` 属性做一些事情，然而实际上 `logName` 并没有使用它。

另外一个使用比较多的场景是与具有可选成员的接口一起使用，如果没有这样的对象字面量检查，当你输入错误单词的时候，并不会发出错误警告：

```ts
function logIfHasName(something: { name?: string }) {
  if (something.name) {
    console.log(something.name);
  }
}

const person = { name: 'matt', job: 'being awesome' };
const animal = { name: 'cow', diet: 'vegan, but has milk of own species' };

logIfHasName(person); // okay
logIfHasName(animal); // okay

logIfHasName({ neme: 'I just misspelled name to neme' }); // Error: 对象字面量只能指定已知属性，`neme` 属性不存在。
```

之所以只对对象字面量进行类型检查，因为在这种情况下，那些实际上并没有被使用到的属性有可能会拼写错误或者会被误用。

## 允许额外的属性

一个类型能够包含索引签名，以明确表明可以使用额外的属性：

```ts
let x: { foo: number, [x: string]: any };

x = { foo: 1, baz: 2 }; // ok, 'baz' 属性匹配于索引签名
```

## 用例：React State

Facebook ReactJS 为对象的 Freshness 提供了一个很好的用例，通常在组件中，你只使用少量属性，而不是传入所有，来调用 `setState`：

```ts
// 假设
interface State {
  foo: string;
  bar: string;
}

// 你可能想做：
this.setState({ foo: 'Hello' }); // Error: 没有属性 'bar'

// 因为 state 包含 'foo' 与 'bar'，TypeScript 会强制你这么做：
this.setState({ foo: 'Hello', bar: this.state.bar });
```

如果你想使用 Freshness，你可能需要将所有成员标记为可选，这仍然会捕捉到拼写错误：

```ts
// 假设
interface State {
  foo?: string;
  bar?: string;
}

// 你可能想做
this.setState({ foo: 'Hello' }); // Yay works fine!

// 由于 Freshness，你也可以防止错别字
this.setState({ foos: 'Hello' }}; // Error: 对象只能指定已知属性

// 仍然会有类型检查
this.setState({ foo: 123 }}; // Error: 无法将 number 类型赋值给 string 类型
```
