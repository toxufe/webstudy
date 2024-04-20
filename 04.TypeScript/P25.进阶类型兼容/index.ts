// Ts的协变 逆变 双向协变
// 1.协变 也可以叫鸭子类型
// 什么是鸭子类型？
// 一只鸟 走路像鸭子 ，游泳也像，做什么都像，那么这只鸟就可以成为鸭子类型。

// 举例
// 主类型
// interface A {
//     name:string
//     age:number
// }
 
// // 子类型
// interface B {
//     name:string
//     age:number
//     sex:string
// }
 
// let a:A = {
//     name:"老墨我想吃鱼了",
//     age:33,
// }
 
// let b:B = {
//     name:"老墨我不想吃鱼",
//     age:33,
//     sex:"女"
// }
 
// a = b
// console.log('a: ', a);

// A B 两个类型完全不同但是竟然可以赋值并无报错B类型充当A类型的子类型，当子类型里面的属性满足A类型就可以进行赋值，也就是说不能少可以多，这就是协变。

// 逆变
// 逆变一般发生于函数的参数上面
// interface A {
//     name:string
//     age:number
// }
 
// interface B {
//     name:string
//     age:number
//     sex:string
// }
 
// let a:A = {
//     name:"老墨我想吃鱼了",
//     age:33,
// }
 
// let b:B = {
//     name:"老墨我不想吃鱼",
//     age:33,
//     sex:"女"
// }
 
// a = b // 值的话是逆变
 
// let fna = (params:A) => {
 
// }
// let fnb = (params:B) => {
    
// }
 
// fna = fnb //错误
// fnb = fna //正确
// 这里比较绕，注意看fna 赋值 给 fnb 其实最后执行的还是fna 而 fnb的类型能够完全覆盖fna 所以这一定是安全的，相反fna的类型不能完全覆盖fnb少一个sex所以是不安全的。


// 双向协变
// tsconfig strictFunctionTypes 设置为false 支持双向协变 fna fnb 随便可以来回赋值
interface A {
    name:string
    age:number
}
 
interface B {
    name:string
    age:number
    sex:string
}
 
let a:A = {
    name:"老墨我想吃鱼了",
    age:33,
}
 
let b:B = {
    name:"老墨我不想吃鱼",
    age:33,
    sex:"女"
}
 
a = b // 值的话是逆变

 
let fna = (params:A) => {
 
}
let fnb = (params:B) => {
    
}
 
fna = fnb 
fnb = fna 