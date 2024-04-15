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

