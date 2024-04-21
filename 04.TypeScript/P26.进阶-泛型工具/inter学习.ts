// infer 就是推导泛型的参数
// infer 声明只能出现在 extends 的子语句中
// infer 后边跟变量名
// 获取promise的返回值
// infer 协变 对象 返回联合类型
// infer 逆变 函数参数 返回交叉类型 never



// 获取promise的返回值
// interface User {
//     name: string;
//     age: number;
// }
// // type PromiseType = Promise<User>;
// // type GetPromiseType<T> = T extends Promise<infer U> ? U : T;

// // 多层Promise
// type PromiseType = Promise<Promise<Promise<User>>>;
// type GetPromiseType<T> = T extends Promise<infer U> ? GetPromiseType<U> : T;
// type T = GetPromiseType<PromiseType>; // User
// // type T = User



// infer 协变 出现在对象的属性中
// let obj = {
//     name: "张三",
//     age:30
// }
// // type Bar<T> = T extends {a:infer N,b:infer B} ? [N,B] :T;
// // 产生协变会返回联合类型
// type Bar<T> = T extends {name:infer U,age:infer U} ? U :T;// 协变
// console.log(typeof obj); // [string,number]
// type test = Bar<typeof obj>;
// // type test = {
// //     name: string;
// //     age: number;
// // }

// // 逆变出现函数的参数中 逆变返回的是交叉类型 
// type Bar<T> = T extends {
//     a:(x:infer U) => void;
//     b:(x:infer U) => void;
// } ? U : never;

// type T = Bar<{
//     a:(x:string) => void;
//     b:(x:number) => void;
// }>;
// // type T = never

