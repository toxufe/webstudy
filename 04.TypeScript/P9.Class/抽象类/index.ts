// 基类 抽象类
// 抽象类是不允许被实例化的
// abstract 所定义的类是抽象类
// abstract 所定义的方法是抽象方法 都只能描述方法的定义 不能有方法体
abstract class Animal {
  name: string;
  constructor(name?: string) {
    this.name = name;
  }
  abstract sayHi(): string;
  getName() {
    return this.name;
  }
}

// 派生类 
// 什么是派生类 通过 extends 关键字来实现继承 
// 派生类可以继承基类的属性和方法 
// 派生类可以重写基类的方法
// 派生类可以添加新的属性和方法
// 派生类可以调用基类的方法
// 派生类可以调用基类的构造函数
// 派生类可以实现多态 
// 派生类可以实现接口
// 派生类可以实现抽象类
// 派生类可以实现抽象方法
class Cat extends Animal {
  sayHi() {
    return `Meow, My name is ${this.name}`;
  }
}

let cat = new Cat('Tom');
console.log('cat.sayHi(): ', cat.sayHi());
console.log('cat.getName(): ', cat.getName());