
// 扩充模块

declare module 'express' {

    interface Router {
        get(path,cb:(req,res)=>void):void
    }

    interface App {
        use(path:string,router:Router):void
        listen(port:number,cb?:()=>void):void
    }
    interface Express {
        ():App
        Router():Router
    }   


    const express:Express;
    export default express;
}

// 扩充全局变量
declare var a:number;

// 扩充函数
 declare function fn(a:number){
    console.log('a: ', a);
 };

 // 扩充类
 declare class Person {
     name:string;
     age:number;
     constructor(name:string,age:number)
 }

 // 扩充枚举
 declare enum Color {
        Red,
        Green,
        Blue
 }


// 扩充全局的 global 
// 扩充全局的 命名空间