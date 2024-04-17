// 混入 Mixins
// 1. 对象的混入 合并 A对象 B对象 合并到一起
// 2. 类的混入 A类 B类 合并到一起


// 对象 非常简单
// a. 扩展运算符 浅拷贝 返回新的数据类型
// interface A {
//     name:string;
// }

// interface B {
//     age:number;
// }

// let a:A = {
//     name:'zhangsan'
// }

// let b:B = {
//     age:18
// }

// let c = {...a,...b};
// console.log('c: ', c);

// // b. Object.assign 浅拷贝 返回的是交叉类型
// let d = Object.assign(a,b);
// console.log('d: ', d);

// // c. 深拷贝  
// let c1 = structuredClone(a)

// 类的混入
// 1. 插件类型的混入

class Logger {
    log(msg: string) {
        console.log(msg);
    }
}

class Html {
    render() {
        console.log('render');
    }
}

class App {
    // private Logger = new Logger();
    // private Html = new Html();

    // constructor() {
    //     this.Logger = new Logger();
    //     this.Html = new Html();
    // }
    run() {
        console.log('run');
        // this.Logger.log('write log ----------');
        // this.Html.render();
    }
}

type Constructor<T> = new (...args: any[]) => T;


// 插件的混入函数
function pluginMixins<T extends Constructor<App>>(Base:T) {
    console.log('Base: ', typeof Base);
    return class extends Base {
        private Logger = new Logger();
        private Html = new Html();

        constructor(...args: any[]) {
            super(...args);
            this.Logger = new Logger();
            this.Html = new Html();

        }

        run(): void {
            super.run();
            this.Html.render();
            this.Logger.log('write log ----------');
        }
    }
}   

const mixins = pluginMixins(App);
console.log('mixins: ', mixins);
const app = new mixins();
app.run();

// const app = new App();
// app.run();