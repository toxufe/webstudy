
/**
 * process 控制当前进程的api
 */


// 1. os  cpu 架构
console.log('process.arch: ', process.arch);
console.log('process.platform: ', process.platform);

// 2. 参数
console.log('process.argv: ', process.argv);
console.log(process.argv.includes("--version")?'1.0.0':'无');

// 3.cwd 获取工作目录 __dirname
console.log('process.cwd(): ', process.cwd());
// cwd 绝对路径
// ems模式下不能使用__dirname,可以使用process.cwd()代替
// 4. 内存信息
console.log('process.memoryUsage(): ', process.memoryUsage());
// rss 物理内存的存量
// headTotal V8分配可使用的内存总大小。包括未使用的内存
// process.memoryUsage():  {
//     rss: 33013760,
//     heapTotal: 6057984,
//     heapUsed: 5306720,// 已使用的内存
//     external: 394549,// 外部的内存 C C++使用的
//     arrayBuffers: 17378 二进制的总量
//   }
// 5. exit
// setTimeout(() => {
//     console.log("--------------");
// }
// , 5000);

// process.on('exit', (code) => {
//     console.log("进程已经退出---");
// })

// setTimeout(() => {
//     // process.exit();
//     // kill 杀死进程需要一个参数pid 进程ID
//     console.log('process.pid: ', process.pid);
//     process.kill(process.pid);
    
// }
// , 2000);


// 6. 环境变量 获取操作系统所有的环境变量
// process.env.LOGNAME = "development";
console.log(process.env);
// 可以修改，但只能在当前进程生效 不会影响系统级环境变量
// 区分开发环境和生成环境
// cross-env
// console.log(process.env.NODE_ENV=='dev'?"开发环境":"生产环境");

