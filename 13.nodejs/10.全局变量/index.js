// nodejs 全局变量
// 全局变量是全局作用域中定义的变量，在整个程序运行期间都可以访问到。
// 注意代码执行顺序，先执行全局变量的赋值语句，再执行代码块。
// global.name = "Fly";
// console.log(global.name); // Fly


// globalThis 跨平台 根据当前运行环境，返回全局对象。node >= 12.0.0 才支持
// globalThis.name = "Fly";
// console.log(globalThis.name); // Fly
// require('./child.js'); // 执行 child.js 文件


// dirname 当前文件所在目录 file 文件名 extname 文件扩展名
// console.log(__dirname);// 执行脚本的目录 绝对路径
// console.log(__filename);// 执行脚本的文件 绝对路径
// console.log(__filename.split('.').pop()); // 获取文件扩展名


// process 进程对象
// process.cwd() // 获取当前工作目录
// process.env // 环境变量
// process.argv // 命令行参数
// console.log('process.argv: ', process.argv);


// setTimeout(() => {
//   console.log('setTimeout');
// }, 5000);

// setTimeout(() => {
//     process.exit();// 提前结束进程
// }, 2000);

// // 进程监听的事件
// process.on('exit', (code) => {
//     console.log('进程已结束，退出码：', code);
// });