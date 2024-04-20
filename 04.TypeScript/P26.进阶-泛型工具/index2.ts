/**
 * 1. Record
 * 2. ReturnType
 */



// * 1. Record
// 约束对象的key和value
// 所以接收两个泛型参数
// key 必须全部满足 value 随便 但是必须是一个类型

// type Key = "a"| "b" | "c";
// type Value = "1" | "2" | "3";

// // const obj:Record<Key,Value> = {
// //     a:"1",
// //     b:"2",
// //     c:"1"
// // };


// // 嵌套的写法
// // const obj:Record<Key,Record<Key,Value>> = {
// //     a:{
// //         a:"1",
// //         b:"2",
// //         c:"3"
// //     },
// //     b:{
// //         a:"1",
// //         b:"2",
// //         c:"3"
// //     },
// //     c:{
// //         a:"1",
// //         b:"1",
// //         c:"3"
// //     }
// // };

// // 源码的写法
// // 对象的key只能是string或者number或者symbol
// type ttk =  keyof any; // string或者number或者symbol
// type CustomRecord<K extends ttk,T> = {
//     [P in K]:T;
// }
// const obj:CustomRecord<Key,Value> = {
//     a:"1",
//     b:"2",
//     c:"3"
// };



// * 2. ReturnType
// 获取函数的返回值类型
const fn = ()=> [1,2,3,"xxx"]
// type fnreturntype = ReturnType<typeof fn>; // number[]

type CustomReturnType<T extends (...args:any)=>any> = T extends (...args:any)=>infer R ? R : any;

// type fnreturntype = CustomReturnType<typeof fn>; // number[]