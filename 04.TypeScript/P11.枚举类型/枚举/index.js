// 数字枚举 - 从0开始递增
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
console.log(Color.Red); // 0
console.log(Color.Green); // 1
console.log(Color.Blue); // 2
// 增长枚举
// 自定义枚举
// 字符串枚举 - 每个成员都必须是字符串字面量，或另外一个字符串枚举成员
var Color1;
(function (Color1) {
    Color1["Red"] = "red";
    Color1["Green"] = "red";
    Color1["Blue"] = "blue";
})(Color1 || (Color1 = {}));
console.log(Color1.Red); // red
console.log(Color1.Green); // green
console.log(Color1.Blue); // blue
// 异构枚举 - 混合字符串和数字成员
var Color2;
(function (Color2) {
    Color2["Red"] = "red";
    Color2[Color2["Green"] = 1] = "Green";
    Color2[Color2["Blue"] = 2] = "Blue";
})(Color2 || (Color2 = {}));
console.log(Color2.Red); // red
console.log(Color2.Green); // 1
console.log(Color2.Blue); // 2
var obj = {
    // a: Color1.Red
    a: 0 // 数字枚举可直接定义 字符串枚举不可以 必须使用上行的形式。
};
console.log('obj: ', obj);
var code = 0;
if (code === 0 /* Types.success */) {
    console.log('success');
}
// 反向映射
var Types1;
(function (Types1) {
    Types1[Types1["success"] = 0] = "success";
    Types1[Types1["fail"] = 1] = "fail";
})(Types1 || (Types1 = {}));


var success = Types1.success;
var key = Types1[success];
console.log('success: ', success); // 0
console.log('key: ', key); // success
