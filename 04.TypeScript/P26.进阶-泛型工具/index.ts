/**
 * 泛型工具 TS 内置
 * Partial 所有属性 可选的意思是 接受一个泛型，泛型里边的属性都会变成可选的属性
 * Required 所有属性必填的意思 
 * Pick 提取部分属性
 * Omit 忽略部分属性 并且返回新的类型
 * Exclude 排除部分属性
 */ 


// Partial
// interface User {
//     name: string
//     age: number
//     address:string
// }

// type PartialUser = Partial<User>;// 所有属性 可选的意思是 接受一个泛型，泛型里边的属性都会变成可选的属性
// type PartialUser = {
//     name?: string | undefined;
//     age?: number | undefined;
//     address?: string | undefined;
// } 

// 自己实现一个 Partial
// 联合类型
// type MyPartial<T> = {
//     [K in keyof T]?:T[K];
// };// 用来接收一个泛型

// type PartialUser = MyPartial<User>;
// type PartialUser = {
//     name?: string | undefined;
//     age?: number | undefined;
//     address?: string | undefined;
// }


// Required
// interface User {
//     name?: string
//     age?: number
//     address?:string
// }
// type RequiredUser = Required<User>;// 所有属性必填的意思
// type RequiredUser = {
//     name: string;
//     age: number;
//     address: string;
// }

// 自己实现一个 Required 使用减号的方式[-?]
// type MyRequired<T> = {
//     [K in keyof T]-?:T[K];
// };
// type RequiredUser = MyRequired<User>;
// type RequiredUser = {
//     name: string;
//     age: number;
//     address: string;
// }


//  Pick 提取部分属性
//  Omit 忽略部分属性 并且返回新的类型
//  Exclude 排除部分属性