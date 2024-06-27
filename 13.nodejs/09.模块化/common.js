// commonjs 规范
// package.json "type": "commonjs",
// commonjs 规范的五种模式
// 1. 引入自己编写的模块
// require('./test');

// 2. 引入第三方模块 npm i md5
// const md5 = require('md5');
// console.log(md5('123456'));

// 3. nodejs 内置模块 fs http net os child_process
// const fs = require('node:fs');// 高版本可以添加node:
// console.log('fs: ', fs);

// 4. C++ 扩展 addon napi node-gyp .node
// 5. 支持引入json文件
// const data = require("./data.json");
// console.log('data: ', data);

// module.export 导出模块和对象和值本身
// const data = require("./test.js");
// console.log('data: ', data);

// 可以使用解构的方式
// const { success, error } = require("./test.js");
// console.log('success: ', success);