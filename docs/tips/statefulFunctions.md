# 状态函数

其他编程语言有一个共同特征，它们使用 `static` 关键字来增加函数变量的生命周期（不是范围），使其超出函数的调用范围，如 C 语言中的实现：

```c
void called () {
    static count = 0;
    count++;
    printf("Called : %d", count);
}

int main () {
    called(); // Called : 1
    called(); // Called : 2
    return 0;
}
```

由于 JavaScript（TypeScript）并没有静态函数的功能，你可以使用一个包裹着本地变量的抽象变量，如使用 `class`：

```ts
const { called } = new class {
  count = 0;
  called = () => {
    this.count++;
    console.log(`Called : ${this.count}`);
  };
}();

called(); // Called : 1
called(); // Called : 2
```
