# 抽象语法树

### Node 节点

节点是抽象语法树（AST） 的基本构造块。语法上，通常 `Node` 表示非末端（non-terminals）节点。但是，有些末端节点，如：标识符和字面量也会保留在树中。

AST 节点文档由两个关键部分构成。一是节点的 `SyntaxKind` 枚举，用于标识 AST 中的类型。二是其接口，即实例化 AST 时节点提供的 API。

这里是 `interface Node` 的一些关键成员：

- `TextRange` 标识该节点在源文件中的起止位置。
- `parent?: Node` 当前节点（在 AST 中）的父节点

`Node` 还有一些其他的成员，标志（flags）和修饰符（modifiers）等。你可以在源码中搜索 `interface Node` 来查看，而上面提到对节点的遍历是非常重要的。

### SourceFile

- `SyntaxKind.SourceFile`
- `interface SourceFile`.

每个 `SourceFile` 都是一棵 AST 的顶级节点，它们包含在 `Program` 中。

## AST 技巧：访问子节点

有个工具函数 `ts.forEachChild`，可以用来访问 AST 任一节点的所有子节点。

下面是简化的代码片段，用于演示如何工作：

```ts
export function forEachChild<T>(node: Node, cbNode: (node: Node) => T, cbNodeArray?: (nodes: Node[]) => T): T {
    if (!node) {
        return;
    }
    switch (node.kind) {
        case SyntaxKind.BinaryExpression:
            return visitNode(cbNode, (<BinaryExpression>node).left) ||
                visitNode(cbNode, (<BinaryExpression>node).operatorToken) ||
                visitNode(cbNode, (<BinaryExpression>node).right);
        case SyntaxKind.IfStatement:
            return visitNode(cbNode, (<IfStatement>node).expression) ||
                visitNode(cbNode, (<IfStatement>node).thenStatement) ||
                visitNode(cbNode, (<IfStatement>node).elseStatement);

        // .... 更多
```

该函数主要检查 `node.kind` 并据此判断 node 的接口，然后在其子节点上调用 `cbNode`。但是，要注意该函数不会为*所有*子节点调用 `visitNode`（例如：SyntaxKind.SemicolonToken）。想获得某 AST 节点的*所有*子节点，只要调用该节点的成员函数 `.getChildren`。

如下函数会打印 AST 节点详细信息：

```ts
function printAllChildren(node: ts.Node, depth = 0) {
  console.log(new Array(depth + 1).join('----'), ts.syntaxKindToName(node.kind), node.pos, node.end);
  depth++;
  node.getChildren().forEach(c => printAllChildren(c, depth));
}
```

我们进一步讨论解析器时会看到该函数的使用示例。

## AST 技巧：SyntaxKind 枚举

`SyntaxKind` 被定义为一个常量枚举，如下所示：

```ts
export const enum SyntaxKind {
    Unknown,
    EndOfFileToken,
    SingleLineCommentTrivia,
    // ... 更多
```

这是个[常量枚举](../typings/enums.md#常量枚举)，方便*内联*（例如：`ts.SyntaxKind.EndOfFileToken` 会变为 `1`），这样在使用 AST 时就不会有处理引用的额外开销。但编译时需要使用 --preserveConstEnums 编译标志，以便枚举*在运行时仍可用*。JavaScript 中你也可以根据需要使用 `ts.SyntaxKind.EndOfFileToken`。另外，可以用以下函数，将枚举成员转化为可读的字符串：

```ts
export function syntaxKindToName(kind: ts.SyntaxKind) {
  return (<any>ts).SyntaxKind[kind];
}
```

## AST 杂项

杂项（Trivia）是指源文本中对正常理解代码不太重要的部分，例如：空白，注释，冲突标记。（为了保持轻量）杂项*不会存储*在 AST 中。但是可以*视需要*使用一些 `ts.*` API 来获取。

展示这些 API 前，你需要理解以下内容：

### 杂项的所有权

通常：

- token 拥有它后面 _同一行_ 到下一个 token 之前的所有杂项
- 该行之后的注释都与下个的 token 相关

对于文件中的前导（leading）和结束（ending）注释：

- 源文件中的第一个 token 拥有所有开始的杂项
- 而文件最后的一些列杂项则附加到文件结束符上，该 token 长度为 0

### 杂项 API

注释在多数基本使用中，都是让人关注的杂项。节点的注释可以通过以下函数获取：

| 函数                          | 描述                                                                                                                    |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `ts.getLeadingCommentRanges`  | 给定源文本及其位置，返回给定位置后第一个换行符到 token 本身之间的注释范围（可能需要结合 `ts.Node.getFullStart` 使用）。 |
| `ts.getTrailingCommentRanges` | 给定源文本及其位置，返回给定位置后第一个换行符之前的注释范围（可能需要结合 `ts.Node.getEnd` 使用）。                    |

假设下面是某个源文件的一部分：

```ts
debugger;/*hello*/
    //bye
  /*hi*/    function
```

对 `function` 而言，`getLeadingCommentRanges` 仅返回最后的两个注释 `//bye` 和 `/*hi*/`。
另外，而在 `debugger` 语句结束位置调用 `getTrailingCommentRanges` 会得到注释 `/*hello*/`。

### Token Start 和 Full Start 位置

节点有所谓的 "token start" 和 "full start" 位置。

- Token Start：比较自然的版本，即文件中一个 token 的文本开始的位置。
- Full Start：是指扫描器从上一个重要 token 开始扫描的位置。

AST 节点有 `getStart` 和 `getFullStart` API 用于获取以上两种位置，还是这个例子：

```ts
debugger;/*hello*/
    //bye
  /*hi*/    function
```

对 `function` 而言，token start 即 `function` 的位置，而 _full_ start 是 `/*hello*/` 的位置。要注意，full start 甚至会包含前一节点拥有的杂项。
