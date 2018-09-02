# 状态函数

其他编程语言的一个共同特征是使用 `static` 关键字来增加函数变量的生命周期（不是范围），使其超出函数的调用范围，C 语言实现的一个例子：

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

由于 JavaScript(TypeScript) 并没有静态函数的功能，你可以使用一个包裹着本地变量的抽象变量，如使用 `class`：

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
