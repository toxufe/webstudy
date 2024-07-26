const {exec,execSync,spawn,spawnSync,execFile,execFileSync,fork} = require("child_process");

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

const { stdout } = spawn("netstat");
stdout.on("data", (data) => {
    console.log(data.toString());
})


