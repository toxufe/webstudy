// 类型守卫 在代码中执行特定的检查以确定类型的方法 以及 确定变量的一个类型
// 1. 类型收缩 | 类型收窄

// typeof 是有缺陷的 比如说 数组 对象 函数 null 都会返回 object
// 判断字符串
// const isstring = (str:any)=> typeof str === 'string';
// // 判断数组
// const isArr = (arr: any)=> arr instanceof Array;
// // 判断对象
// const isObj = (obj: any)=> obj instanceof Object;
// // 判断函数
// const isFn = (fn: any)=> fn instanceof Function;
// // 判断null
// const isNull = (nullObj: any)=> nullObj === null;
// // 判断undefined
// const isUndefined = (undefinedObj: any)=> undefinedObj === undefined;
// // 判断数字
// const isNumber = (num: any)=> typeof num === 'number';
// // 判断布尔值
// const isBoolean = (bool: any)=> typeof bool === 'boolean';
// // 判断Symbol
// const isSymbol = (symbol: any)=> typeof symbol === 'symbol';
// // 判断BigInt
// const isBigInt = (bigInt: any)=> typeof bigInt === 'bigint';
// // 判断正则
// const isRegExp = (reg: any)=> reg instanceof RegExp;
// // 判断日期
// const isDate = (date: any)=> date instanceof Date;
// // 判断错误
// const isError = (error: any)=> error instanceof Error;
// // 判断Promise
// const isPromise = (promise: any)=> promise instanceof Promise;
// // 判断Map
// const isMap = (map: any)=> map instanceof Map;


// // 例子 
// console.log(isstring('zfpx')); // true
// console.log(isArr([1,2,3])); // true
// console.log(isObj({name: 'zfpx'})); // true
// console.log(isFn(()=>{})); // true
// console.log(isNull(null)); // true
// console.log(isUndefined(undefined)); // true
// console.log(isNumber(1)); // true
// console.log(isBoolean(true)); // true
// console.log(isSymbol(Symbol('zfpx'))); // true
// console.log(isBigInt(1n)); // true
// console.log(isRegExp(/\d/)); // true
// console.log(isDate(new Date())); // true
// console.log(isError(new Error())); // true
// console.log(isPromise(new Promise(()=>{}))); // true
// console.log(isMap(new Map())); // true





 









// 2. 类型谓词 | 自定义类型守卫
// 实现一个函数 该函数可以传入任何类型
// 但是如果是object 就检查里边的属性，如果属性是number的话就取两位小数
// 如果是字符串的话就去除左右空格
// 如果是函数的话就执行

// const isObject = (val: any)=> Object.prototype.toString.call(val) === '[object Object]';
// 简写
const isObject = (val: any)=> ({}).toString.call(val) === '[object Object]';
const fn = (data:any)=>{
    if(isObject(data)){
        console.log('data: ', data);  
        // 遍历属性不能用for in 因为for in 会遍历原型链上的属性
    }
}
fn({});