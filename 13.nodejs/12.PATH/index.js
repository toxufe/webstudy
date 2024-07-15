const path = require("node:path");
// 1.basename 返回给定路径的最后一部分
// window 操作系统兼容正斜杠的写法
const basename = path.basename("C:\\Users\\Administrator\\Desktop\\1.html");
console.log('basename: ', basename);
const filename = path.basename("/fxx/xxx/1.html");
console.log('filename: ', filename);

// posix 处理不了window的路径
const basename1 = path.posix.basename("C:\\Users\\Administrator\\Desktop\\1.html");
console.log('basename1: ', basename1);


// 2.dirname 返回给定路径的目录名
const basename2 = path.dirname("C:\\Users\\Administrator\\Desktop\\1.html");
console.log('basename2: ', basename2);

// 3.extname 返回路径的扩展名 带点
console.log(path.extname("/a/a/ccc.b.b.b.aaa"));