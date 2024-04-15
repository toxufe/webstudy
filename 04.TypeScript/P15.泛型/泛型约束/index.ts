// 泛型约束 泛型用法 有利也有弊
// 泛型约束 控制类型的范围 语法 <T extends 类型>


// 错误实例
// function add<T>(a:T,b:T){
//     return a+b;
// }

// add(undefined,undefined);


// 泛型约束的例子
// function add<T extends number>(a:T,b:T){
//     return a+b;
// }

// add(1,2);


// // 泛型约束
// interface Len {
//     length: number;
// }
// function fn<T extends Len>(params:T){
//     console.log(params.length);
// }

// fn("1111");
// fn([1,3]);
// // fn(false);  // 报错 不能传入一个布尔值

// let obj = {
//     name: 'zhangsan',
//     age: 18
// }

// // 泛型约束 对象的键值 keyof
// // keyof 将对象的key推断成联合类型 name | age
// // type Key = keyof typeof obj;
// function ob<T extends object,K extends keyof T>(obj:T,key:K){
//    return obj[key];
// }

// ob(obj,'name');
// ob(obj,'age');
// // ob(obj,'xxx'); // 报错 不能传入一个不存在的key

// keyof 高级用法


interface Data {
    name: string;
    age: number;
    sex:string,
}
//  for in 遍历对象的key
// 遍历对象 并添加可选操作符
type Options<T extends object> = {
    // [Key in keyof T]?: T[Key];
    readonly [Key in keyof T]?: T[Key];
}

type B = Options<Data>;