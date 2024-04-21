// infer 就是推导泛型的参数
// infer 声明只能出现在 extends 的子语句中
// infer 后边跟变量名
// 获取promise的返回值
// infer 协变
// infer 逆变



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
let obj = {
    name: "张三",
    age:30,
    c: 1
}
type Bar<T> = T extends {a:infer N,b:infer B} ? [N,B] :T;

type test = Bar<typeof obj>;
// type test = {
//     name: string;
//     age: number;
// }