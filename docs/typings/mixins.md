# 混合

TypeScript (和 JavaScript) 类只能严格的单继承，因此你不能做：

```ts
class User extends Tagged, Timestamped { // ERROR : 不能多重继承
  // ..
}
```

从可重用组件构建类的另一种方式是通过基类来构建它们，这种方式称为混合。

这个主意是简单的，采用函数 B 接受一个类 A，并且返回一个带有新功能的类的方式来替代 A 类扩展 B 来获取 B 上的功能，前者中的 B 即是混合。

::: tip
「混合」是一个函数：

- 传入一个构造函数；
- 创建一个带有新功能，并且扩展构造函数的新类；
- 返回这个新类。

:::

一个完整的例子：

```ts
// 所有 mixins 都需要
type Constructor<T = {}> = new (...args: any[]) => T;

/////////////
// mixins 例子
////////////

// 添加属性的混合例子
function TimesTamped<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    timestamp = Date.now();
  };
}

// 添加属性和方法的混合例子
function Activatable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    isActivated = false;

    activate() {
      this.isActivated = true;
    }

    deactivate() {
      this.isActivated = false;
    }
  };
}

///////////
// 组合类
///////////

// 简单的类
class User {
  name = '';
}

// 添加 TimesTamped 的 User
const TimestampedUser = TimesTamped(User);

// Tina TimesTamped 和 Activatable 的类
const TimestampedActivatableUser = TimesTamped(Activatable(User));

//////////
// 使用组合类
//////////

const timestampedUserExample = new TimestampedUser();
console.log(timestampedUserExample.timestamp);

const timestampedActivatableUserExample = new TimestampedActivatableUser();
console.log(timestampedActivatableUserExample.timestamp);
console.log(timestampedActivatableUserExample.isActivated);
```

让我们分解这个例子。

## 创建一个构造函数

混合接受一个类，并且使用新功能扩展它。因此，我们需要定义构造函数的类型：

```ts
type Constructor<T = {}> = new (...args: any[]) => T;
```

## 扩展一个类并且返回它

```ts
// 添加属性的混合例子
function TimesTamped<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    timestamp = Date.now();
  };
}
```
