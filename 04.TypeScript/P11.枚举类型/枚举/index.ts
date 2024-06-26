
// 数字枚举 - 从0开始递增
enum Color {
    Red,
    Green,
    Blue
}

console.log(Color.Red); // 0
console.log(Color.Green); // 1
console.log(Color.Blue); // 2


// 增长枚举
// 自定义枚举

// 字符串枚举 - 每个成员都必须是字符串字面量，或另外一个字符串枚举成员
enum Color1 {
    Red = 'red',
    Green = Color1.Red,
    Blue = 'blue'
}

console.log(Color1.Red); // red
console.log(Color1.Green); // green
console.log(Color1.Blue); // blue


// 异构枚举 - 混合字符串和数字成员
enum Color2 {
    Red = 'red',
    Green = 1,
    Blue
}

console.log(Color2.Red); // red
console.log(Color2.Green); // 1
console.log(Color2.Blue); // 2


// 接口枚举
interface A  {
    a:Color.Red
}

let obj:A = {
    // a: Color1.Red
    a: 0 // 数字枚举可直接定义 字符串枚举不可以 必须使用上行的形式。
}
console.log('obj: ', obj);


// 常量枚举 - const枚举
const enum Types {
    success,
    fail
}
let code = 0;
if(code === Types.success){
    console.log('success');
}

// 反向映射 字符串无法进行反射
enum Types1 {
    success,
    fail
}

let success:number = Types1.success;
let key = Types1[success];

console.log('success: ', success); // 0
console.log('key: ', key); // success