# Thuthy

JavaScript 有一个 `truthy` 概念，即一些在某些情景下会被推断为 `true`（例如：`if` 语句和 `boolean` 的 `&&` `||` 操作符）。在 JavaScript 中有以下会被认为是 `truthy`，一个例子是除 `0` 以外的任何数字：

```ts
if (123) {
  // 将会被推断出 `true`
  console.log('Any number other than 0 is truthy');
}
```

不真实的被称为是 `falsy`。

你可以用下表来做参考

| **Variable Type**                                | **When it is falsy** | **When it is truthy** |
| ------------------------------------------------ | -------------------- | --------------------- |
| boolean                                          | false                | true                  |
| string                                           | ' ' (empty string)   | any other string      |
| number                                           | 0 NaN                | any other number      |
| null                                             | always               | never                 |
| Any other Object including empty ones like {},[] | never                | always                |

## 明确的

> `!!` 操作符

这在帮助你明确
