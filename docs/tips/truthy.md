# Truthy

JavaScript 有一个 `truthy` 概念，即在某些场景下会被推断为 `true`，例如除 `0` 以外的任何数字：

```ts
if (123) {
  // 将会被推断出 `true`
  console.log('Any number other than 0 is truthy');
}
```

你可以用下表来做参考：

| **Variable Type**                                | **When it is falsy** | **When it is truthy** |
| ------------------------------------------------ | -------------------- | --------------------- |
| boolean                                          | false                | true                  |
| string                                           | ' ' (empty string)   | any other string      |
| number                                           | 0 NaN                | any other number      |
| null                                             | always               | never                 |
| Any other Object including empty ones like {},[] | never                | always                |

## 明确的

通过操作符 `!!`，你可以很容易的将某些值转化为布尔类型的值，例如：`!!foo`，它使用了两次 `!`，第一个 `!` 用来将其（在这里是 `foo`）转换为布尔值，但是这一操作取得的是其取反后的值，第二个取反时，能得到真正的布尔值。

这在很多地方都可以看到：

```ts
// Direct variables
const hasName = !!name;

// As members of objects
const someObj = {
  hasName: !!name
};

// ReactJS
{
  !!someName && <div>{someName}</div>;
}
```
