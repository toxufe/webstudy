// 类型守卫 在代码中执行特定的检查以确定类型的方法 以及 确定变量的一个类型
// 1. 类型收缩 | 类型收窄

// typeof 是有缺陷的 比如说 数组 对象 函数 null 都会返回 object
// 判断字符串
// const isstring = (str:any)=> typeof str === 'string';
// 判断数组
const isArr = (arr: any)=> arr instanceof Array;




 









// 2. 类型谓词 | 自定义类型守卫
