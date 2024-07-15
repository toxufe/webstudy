const os = require("node:os");

// Node.js 中的 os 模块提供了一些常用的 API，用于获取操作系统相关的信息。以下是一些常用的 os 模块的 API：
// os.platform(): 返回操作系统平台，例如 "darwin", "win32", "linux" 等。
console.log('os.platform(): ', os.platform());

// os.arch(): 返回操作系统的体系结构，例如 "x64", "arm" 等。

// os.cpus(): 返回一个包含有关系统 CPU 核心信息的对象数组。

// os.totalmem(): 返回系统总内存量，以字节为单位。

// os.freemem(): 返回系统空闲内存量，以字节为单位。

// os.hostname(): 返回主机名。

// os.networkInterfaces(): 返回一个对象，该对象包含有关网络接口的信息。

// os.userInfo([options]): 返回包含当前用户信息的对象。

// os.uptime(): 返回系统的正常运行时间，以秒为单位。

// os.type(): 返回操作系统类型，例如 "Linux", "Windows_NT" 等。

// 这些是 os 模块中一些常用的 API，可以帮助您获取关于操作系统的各种信息。