// 1. 默认导出 导出的东西可以是任意类型
// 一个模块只能有一个默认导出


// export default 1;
// export default ['1',2];

export default {
    name: 'test',
    age: 18
    
}

// 2. 分别导出
export let a =1;
export let arr = [1,2,3];
export const add = (a:number,b:number)=>{
    return a+b;
}


// 3. 解构导出
// export {
//     a as a1,
//     arr as arr1,
//     add as add1
// }


