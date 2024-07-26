const { exec, execSync, spawn, spawnSync, execFile, execFileSync, fork } = require("child_process");
const path = require("path");

// exec 异步方法 回调函数 返回 buffer 可以执行shell命令,或者和软件交互
// execSync 同步方法  执行较小的shell 立马拿到结果的shell 字节超过200kb报错
// error 错误 stdout 标准输出 stderr 错误输出 
// exec("node -v",(error,stdout,stderr)=>{
//     if(error){
//         return error;
//     }
//     console.log("stdout.toString()",stdout.toString());
//     console.log("stdout.stderr()",stderr.toString());
// })

// // 同步写法
// const nodeVersion = execSync("node -v").toString();
// console.log('nodeVersion: ', nodeVersion);

// execSync("mkdir test")

// execSync('open Chrome https://www.baidu.com');
// mac 打开谷歌浏览器
// execSync('open -a "/Applications/Google Chrome.app" https://www.baidu.com');


// spawn 没有字节上线 返回的是一个流 实时返回的
// spanSync 同步的方法用的比较少

// execSync 不适合执行较大的shell脚本
// const a = execSync('netstat');
// console.log('a: ', a.toString());

// spawn 没有实时输出 
// const { stdout } = spawn("netstat",['-a'],{});// 第二歌参数是个数组 可以携带命令的参数 第三个参数是个对象 选项
// stdout.on("data", (msg) => {
//     console.log(msg.toString());
// })

// stdout.on("close", () => {
//     console.log("结束了……");
// })


// const child = spawn('netstat', [], { stdio: 'inherit' });

// child.on('error', (error) => {
//     console.error('Error: ', error);
// });

// child.on('close', (code) => {
//     console.log('Subprocess exited with code', code);
// });


// child.on('data', (msg) => {
//     console.log('Subprocess exited with code', msg);
// });


// execFile 执行 可执行文件
// execFile(path.resolve(__dirname, './test.sh'), null,(error, stdout, stderr) => {
//     console.log('stdout: ', stdout);
//     console.log('error: ', error);

// });

// chmod +x ./test.sh #首次执行需要使脚本具有执行的权限
// ./test.sh #执行脚本

// 底层的实现顺序
// exec -> execFile -> spwan

// fork 只能接受js模块 帮助js创建子进程
const testProcess = fork("./test/test.js");
// console.log('testProcess: ', testProcess);

testProcess.send("我是主进程发送的消息");

// nodejs  单线程 不适合做cpu密集型优秀
// 耗时的代码使用子进程执行

testProcess.on('message', (msg) => {
    console.log('主进程收到消息：', msg);
})


