// esm 规范
// package.json "type": "commonjs",


// export default 导出 ems模块全局只能有一个
// {} 解构值
// import aaa,{name,fn} from './esmtest.js';
// console.log('aaa: ', aaa);
// console.log('name: ', name);
// fn()


// 显示模块下所有的方法
// import * as all from './esmtest.js';
// console.log('all: ', all);

// 别名
// import {name as myName} from './esmtest.js';

// 不支持引入json文件 前端支持是因为有三方插件
// import data from './data.json' assert {type: "json"};
// console.log('data: ', data);
