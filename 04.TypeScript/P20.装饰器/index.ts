// 装饰器 Decorator
// 本章有 7 个知识点
// 修改配置文件
// "experimentalDecorators": true,
// "emitDecoratorMetadata": true,  


// 1. 类装饰器 ClassDecorator
// 2. 属性装饰器 PropertyDecorator
// 3. 参数装饰器 ParameterDecorator
// 4. 方法装饰器 MethodDecorator
// 5. 装饰器工厂 DecoratorFactory
// 6. import 'reflect-metadata'
// 7. axios



// 1. 类装饰器 ClassDecorator
// 编译阶段自己调用、不需要手动调用，会回传一个参数Target,Target就是当前类的构造函数
// 作用:不破坏类解构给类增添方法和属性
const Base:ClassDecorator = (target)=>{
    console.log('target: ', typeof target);
    target.prototype.url = 'http://www.baidu.com';
    target.prototype.run = function(){
        console.log('run');
    }
}

// interface HttpType {
//     url: string;
//     run(): void;

// }

// @Base
// class Http implements HttpType {
//     url!: string;
//     run!: () => void;

// }
// const http = new Http();
// console.log(http.url);
// http.run();


@Base
class Http {
}
  
  

// 断言成 any 类型 即不检查属性错误
const http = new Http() as any;
console.log(http.url);
http.run();