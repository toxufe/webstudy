
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

