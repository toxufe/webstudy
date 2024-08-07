const os = require("node:os");
const {exec} = require("child_process");
// exec 执行shell命令

// Node.js 中的 os 模块提供了一些常用的 API，用于获取操作系统相关的信息。以下是一些常用的 os 模块的 API：
// os.platform(): 返回操作系统平台，例如 "darwin", "win32", "linux" 等。
console.log('os.platform(): ', os.platform());

// os.release() 是 os 模块提供的一个常用 API，用于获取操作系统的版本信息。
console.log('os.release(): ', os.release());
// os.type(): 返回操作系统类型，例如 "Linux", "Windows_NT" 等。
console.log('os.type(): ', os.type());

// os.version(): 返回操作系统版本。
console.log('os.version(): ', os.version());

// os.arch():  cpu 架构 返回操作系统的体系结构，例如 "x64", "arm" 等。
console.log('os.arch(): ', os.arch());

// os.cpus(): 返回一个包含有关系统 CPU 核心信息的对象数组。
console.log('os.cpus(): ', os.cpus());
// cpu 的利用率计算



// os.totalmem(): 返回系统总内存量，以字节为单位。

// os.freemem(): 返回系统空闲内存量，以字节为单位。

// os.homedir(): 返回当前用户的主目录。
console.log('os.homedir(): ', os.homedir());

// os.hostname(): 返回主机名。

// os.networkInterfaces(): 返回一个对象，该对象包含有关网络接口的信息。
// 网络信息
console.log('os.networkInterfaces(): ', os.networkInterfaces()); 

// os.userInfo([options]): 返回包含当前用户信息的对象。

// os.uptime(): 返回系统的正常运行时间，以秒为单位。



// 这些是 os 模块中一些常用的 API，可以帮助您获取关于操作系统的各种信息。

// 根据不同的操作系统 打开网址
// const open = (url)=>{
//     const platform = os.platform();
//     if(platform === 'darwin'){
//         // mac
//         exec(`open ${url}`);
//     }else if (platform === "win32"){
//         // window
//         exec(`start ${url}`);
//     }else if(platform === 'linux'){
//         // linux
//         exec(`xdg-open ${url}`);
//     }
// }

// open("http://www.baidu.com");