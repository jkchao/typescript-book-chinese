# 扫描器

TypeScript 扫描器的源码均位于 `scanner.ts`。在内部，由解析器*控制*扫描器将源码转化为抽象语法树（AST）。期望结果如下：

```
SourceCode ~~ 扫描器 ~~> Token 流 ~~ 解析器 ~~> AST
```

## 解析器对扫描器的使用

为避免重复创建扫描器造成的开销，`parser.ts` 中创建了一个扫描器的*单例*。解析器根据需要使用 `initializeState` 函数*准备*该扫描器。

下面是解析器中的实际代码的简化版，你可以运行它演示以上概念

`code/compiler/scanner/runScanner.ts`

```ts
import * as ts from 'ntypescript';

// 单例扫描器
const scanner = ts.createScanner(ts.ScriptTarget.Latest, /* 忽略杂项 */ true);

// 此函数与初始化使用的 `initializeState` 函数相似
function initializeState(text: string) {
  scanner.setText(text);
  scanner.setOnError((message: ts.DiagnosticMessage, length: number) => {
    console.error(message);
  });
  scanner.setScriptTarget(ts.ScriptTarget.ES5);
  scanner.setLanguageVariant(ts.LanguageVariant.Standard);
}

// 使用示例
initializeState(
  `
var foo = 123;
`.trim()
);

// 开始扫描
var token = scanner.scan();
while (token != ts.SyntaxKind.EndOfFileToken) {
  console.log(ts.formatSyntaxKind(token));
  token = scanner.scan();
}
```

该段代码输出以下内容：

```
VarKeyword
Identifier
FirstAssignment
FirstLiteralToken
SemicolonToken
```

## 扫描器状态

调用 `scan` 后，扫描器更新其局部状态（扫描位置，当前 token 详情等）。扫描器提供了一组工具函数获取当前扫描器状态。下例中，我们创建一个扫描器并用它识别 token 以及 token 在代码中的位置。

`code/compiler/scanner/runScannerWithPosition.ts`

```ts
// 使用示例
initializeState(
  `
var foo = 123;
`.trim()
);

// 开始扫描
var token = scanner.scan();
while (token != ts.SyntaxKind.EndOfFileToken) {
  let currentToken = ts.formatSyntaxKind(token);
  let tokenStart = scanner.getStartPos();
  token = scanner.scan();
  let tokenEnd = scanner.getStartPos();
  console.log(currentToken, tokenStart, tokenEnd);
}
```

该代码输出以下内容：

```
VarKeyword 0 3
Identifier 3 7
FirstAssignment 7 9
FirstLiteralToken 9 13
SemicolonToken 13 14
```

## 独立扫描器

即便 TypeScript 解析器有单例扫描器，你仍可以使用 `createScanner` 创建独立的扫描器，然后可以用 `setText`/`setTextPos` 随意扫描文件的不同位置。
