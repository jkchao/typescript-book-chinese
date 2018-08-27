# 支持 JSX

TypeScript 支持 JSX 转换和代码分析，如果你还不了解 JSX，[官网](https://facebook.github.io/jsx/)上有关于它的摘要：

> JSX is an XML-like syntax extension to ECMAScript without any defined semantics. It's NOT intended to be implemented by engines or browsers. It's NOT a proposal to incorporate JSX into the ECMAScript spec itself. It's intended to be used by various preprocessors (transpilers) to transform these tokens into standard ECMAScript.

JSX 背后的动机是允许用户在 JavaScript 中书写类似于 HTML 的视图，因此你可以：

- 使用相同代码，既能检查你的 JavaScript，同时能检查你的 HTML 视图层部分。
- 让视图层了解运行时的上下文（加强传统 MVC 中的控制器与视图连接）。
- 复用 JavaScript 设计模式维护 HTML 部分，例如：用 `Array.prototype.map.`、`?:`、`switch` 等，代替创建新的可替代品。

这能够减少错误的可能性，并且能增加用户界面的可维护性。目前 JSX 的主要消费者来自 [facebook 推出的 ReactJS](http://facebook.github.io/react/)，接下来我们结合它来讨论 JSX 用法。