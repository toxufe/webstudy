## 学习笔记
### importmap study
### 函数的二义性
箭头函数和普通函数的区别，消除函数的二义性。

### 性能优化
#### dll

```
npm i vue pinia vue-router
npm i webpack webpack-cli -D
```

### typescript
#### class

```
tsc --init
ts-node index.ts
Vue extends Dom  继承Dom类
Vue implements VueCls 约束Vue类
readonly 属性不能被修改
private 内部类可使用
protected 给子类和内部类使用

super() // 父类的prototype.constructor.call

// 静态方法 this 执行的是类本身 static修饰的方法和属性
```

#### 枚举
- 数字枚举 - 从0开始递增
```
enum Color {
    Red,
    Green,
    Blue
}

console.log(Color.Red); // 0
console.log(Color.Green); // 1
console.log(Color.Blue); // 2
```
- 增长枚举
- 自定义枚举


#### 类型推断和类型声明
```
// any unknow 顶级类型
// Object
// Number String Boolean
// number string boolean 
// 1 'test' true
// never
```

#### 泛型
TypeScript has two modes.

A project-builder mode (when tsc is invoked with no arguments)
A compile-mode (when tsc is invoked with any arguments) which does not read from the configuration file tsconfig.json
If that sounds confusing, it's even more confusing when you account for

the flag for the compiler-mode to accept a configuration file is called --project
inside the project-builder's configuration file there the pragma is called "compilerOptions"
the compiler-mode and the project-builder mode accept the same configuration file
Anyway, the problem here was that TypeScript was simply ignoring the configuration file in the current working directory that I was running it in.



