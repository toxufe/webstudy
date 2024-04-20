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
// interface User {
//     name: string
//     age: number
//     address:string
// }

// // type PickUser = Pick<User,'age' | 'name'>;
// // type PickUser = {
// //     age: number;
// //     name: string;
// // }

// // 自己实现一个 Pick
// type MyPick<T,K extends keyof T> = {
//     [P in K]:T[P];
// }

// type PickUser = MyPick<User,'age' | 'address'>;
// // type PickUser = {
// //     age: number;
// //     address: string;
// // }


//  Omit 忽略部分属性 并且返回新的类型 排除的是联合类型 通过两个联合类型的差集
// interface User {
//     name: string
//     age: number
//     address:string
// }

// type OmitUser = Omit<User,'age' | 'name'>;
// type OmitUser = {
//     address: string;
// }

// 自己实现一个 Omit
// type MyOmit<T,K extends keyof T> = Pick<T,Exclude<keyof T,K>>;
// type OmitUser = MyOmit<User,'age' | 'name'>;
 

//  Exclude 排除部分属性
// never 在联合类型中会被排除掉

// type myExclude = Exclude<"a"|"b"|"c","c">;
// // type myExclude = "a" | "b"
// extends 在联合类型是是包含的意思
// type customExclude<T,K> = T extends K ? never : T;
// type myExclude = customExclude<"a"|"b"|"c","c"|"a">;
// // type myExclude = "b"
