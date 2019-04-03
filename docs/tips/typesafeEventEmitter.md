# 类型安全的 Event Emitter

通常来说，在 Node.js 与传统的 JavaScript 里，你有一个单一的 Event Emitter，你可以用它来为不同的事件添加监听器。

```ts
const emitter = new EventEmitter();

// Emit
emitter.emit('foo', foo);
emitter.emit('bar', bar);

// Listen
emitter.on('foo', foo => console.log(foo));
emitter.on('bar', bar => console.log(bar));
```

实际上，在 `EventEmitter` 内部以映射数组的形式存储数据：

```ts
{ foo: [fooListeners], bar: [barListeners] }
```

为了事件的类型安全，你可以为每个事件类型创建一个 emitter：

```ts
const onFoo = new TypedEvent<Foo>();
const onBar = new TypedEvent<Bar>();

// Emit:
onFoo.emit(foo);
onBar.emit(bar);

// Listen:
onFoo.on(foo => console.log(foo));
onBar.on(bar => console.log(bar));
```

它一些优点：

- 事件的类型，能以变量的形式被发现。
- Event Emitter 非常容易被重构。
- 事件数据结构是类型安全的。

## 参考 TypedEvent

```ts
export interface Listener<T> {
  (event: T): any;
}

export interface Disposable {
  dispose(): any;
}

export class TypedEvent<T> {
  private listeners: Listener<T>[] = [];
  private listenersOncer: Listener<T>[] = [];

  public on = (listener: Listener<T>): Disposable => {
    this.listeners.push(listener);

    return {
      dispose: () => this.off(listener)
    };
  };

  public once = (listener: Listener<T>): void => {
    this.listenersOncer.push(listener);
  };

  public off = (listener: Listener<T>) => {
    const callbackIndex = this.listeners.indexOf(listener);
    if (callbackIndex > -1) this.listeners.splice(callbackIndex, 1);
  };

  public emit = (event: T) => {
    this.listeners.forEach(listener => listener(event));

    this.listenersOncer.forEach(listener => listener(event));

    this.listenersOncer = [];
  };

  public pipe = (te: TypedEvent<T>): Disposable => {
    return this.on(e => te.emit(e));
  };
}
```
