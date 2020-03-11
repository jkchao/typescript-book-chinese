# `tsconfig.json` 的行为

## 为什么把一个文件放入「exclude」选项中，它仍然会被编译器选中？

`tsconfig.json` 将会把一个文件夹转换为「项目」，如果不指定任何 `exclude` 或者 `files`，则包含在 `tsconfig.json` 中的所有文件夹中的所有文件都会被包含在编译中。

如果你想忽略一些文件，使用 `exclude`。如果希望指定所有文件，而不是让编译器查找它们，请使用 `files`。

这些行为，`tsconfig.json` 将会自动确认。但是这有一个不同的问题，即是解析模块。模块解析：编译器将尝试去理解 `ns` 在模块语法中表示什么，即 `import * as ns from 'mod'`。为了理解它，编译器需要定义一个模块，它可能是包含你自己代码的 .ts 文件，或者是导入的一个 .d.ts 文件。如果一个文件被找到，则无论它是否在 `excludes` 中，它都将会被编译。

因此，如果你想从编译中排除一个文件，你需要排除所有具有 `import` 或者 `<reference path="...">` 指令的文件。

使用 `tsc --listFiles` 来列出在编译时包含了哪些文件，`tsc --traceResolution` 来看看它们为什么会被包含在编译中。

## 我怎么指定一个 `include`？

现在无法在 `tsconfig.json` 的 `include` 选项外指定所需要包含的文件。你可以通过以下任意一种方式获得相同的结果：1 使用 `files` 列表，2 在目录中添加 `///<reference path="">` 指令。

## 当我使用 JavaScript 文件时，为什么我会得到 `error TS5055: Cannot write file 'xxx.js' because it would overwrite input file` 错误？

对于 TypeScript 文件来说，在默认情况下，编译器将在同一目录中生成与 JavaScript 相同文件名的文件。因为 TypeScript 文件与编译后的文件总是拥有不同的后缀，这么做是安全的。然而，如果你设置 `allowJs` 编译选项为 `true` 和没有设置任何的编译输出属性（`outFile` 和 `outDir`），编译器将会尝试使用相同的规则来编译文件，这将导致发出的 JavaScript 文件与源文件具有相同的文件名。为了避免意外覆盖源文件，编译器将会发出此警告，并跳过编写输出文件。

有多种方法可以解决此问题，但所有这些方法都涉及配置编译器选项，因此建议你在项目根目录中的 tsconfig.json 文件来启用此功能。如果你不想编译 JavaScript 文件，你只需要将 `allowJs` 选项设置为 `false`；如果你确实想要包含和编译这些 JavaScript 文件，你应该设置 `outDir` 或者 `outFile` 选项，定向到其他位置，这样他们就不会与源文件冲突。如果你仅仅是想包含这些 JavaScript 文件，但是不需要编译，设置 `noEmit` 选项为 `true` 可以跳过编译检查。
