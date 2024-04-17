import axios from "axios";
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
// const Base:ClassDecorator = (target)=>{
//     console.log('target: ', typeof target);
//     target.prototype.url = 'http://www.baidu.com';
//     target.prototype.run = function(){
//         console.log('run');
//     }
// }

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


// @Base
// class Http {
// }

// class Http {
// }
// Base(Http);


// // 断言成 any 类型 即不检查属性错误
// const http = new Http() as any;
// console.log(http.url);
// http.run();


// 4. 方法装饰器 MethodDecorator
const Base = (name:string) => {
    // target 装饰器默认传入
    // 什么是 函数柯里化  一个函数返回另一个函数 闭包
    // 里边的函数去返回给装饰器调用
    const fn: ClassDecorator = (target) => {
        // console.log('target: ', target);
        target.prototype.name = name;
    }

    return fn;
}  

const Get = (url:string) => {
    const fn: MethodDecorator = (target, key, descriptor:PropertyDescriptor) => {
        // console.log(target, key, descriptor);
        axios.get(url).then((res) => {
            // console.log('res: ', res.data);
            descriptor.value(res.data);

        });
    }

    return fn;
}

// const Post = (url:string) => {
//     const fn: MethodDecorator = (target, key, descriptor) => {
//         console.log('target: ', target);
//         console.log('key: ', key);
//         console.log('descriptor: ', descriptor);
//     }

//     return fn;
// }


const Result = () => {
    // target 原型对象 
    const fn:ParameterDecorator = (target: Object, propertyKey: string | symbol | undefined, parameterIndex: number) => {
        console.log('target: ', target);
        console.log('propertyKey: ', propertyKey);
        console.log('parameterIndex: ', parameterIndex);
    }
    return fn;
}

@Base("huahua")
class Http {

    // @Get('https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10')
    // getList (data: any) {
    //     console.log('data: ', data.result.list);

    // }


    // 参数装饰器
    @Get('https://api.apiopen.top/api/getHaoKanVideo?page=0&size=10')
    getList (@Result() data: any) {
        // console.log('data: ', data.result.list);

    }
    // @Post('/create')
    // create(){

    // }
} 

// const http = new Http() as any;
// http.getList();



// 5. 装饰器工厂 DecoratorFactory 
// 外边接受用户的自定义参数
// const Base = (url:string) => {
//     // target 装饰器默认传入
//     // 什么是 函数柯里化  一个函数返回另一个函数 闭包
//     // 里边的函数去返回给装饰器调用
//     const fn: ClassDecorator = (target) => {
//         console.log('target: ', target);
//         target.prototype.url = url;
//     }

//     return fn;
// }
// @Base("m.zmyy.cn1111")
// class Http {

// } 

// const http = new Http() as any;
// console.log(http.url);