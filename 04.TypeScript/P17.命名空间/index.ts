// 命名空间 namespace
// 1. 命名空间的用法 嵌套 抽离 导出 简化 合并
// 2. 命名空间的案例

let a = 1;
console.log('a: ', a);

// 命名空间 内部的变量不会污染全局变量 但是可以访问全局变量 
// 但是全局变量不能访问命名空间内部的变量 需要导出才可以使用
namespace A {
    let a = 2;// 外部不可使用
    console.log('a: ', a);


    export let b = 3;// 导出外部可以使用
}

console.log('A.b: ', A.b);


// 支持namespace 嵌套
namespace B {
    export namespace C {
        export let d = 4;
    }
}

console.log('B.C.d: ', B.C.d);


// 合并 支持namespace 同名的命名空间会 合并

// 抽离 namespace 支持导出

import { Test } from './test';
console.log("导出", Test.a);

// 简化 namespace 支持简化
const a1 = Test.a
console.log('a1: ', a1);
const add = Test.add
console.log('add: ', add(1, 1));

// 命名空间的案例 使用场景
// 跨端的项目 h5 ios、android 小程序
namespace ios {
    export const pushNotification = (title: string, type: number) => {
        console.log('ios分享');
    }
}

namespace android {
    export const pushNotification = (title: string) => {
        console.log('android分享');
    }

    export const callPhone = (phone: string) => {
        console.log('android打电话');
    }
}

namespace miniprogram {
    export const pushNotification = (title: string) => {
        console.log('小程序分享');
    }
    
}