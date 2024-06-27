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



// const aa = {cc:1};
// const dd = {cc:2};
// const obj = new Map();
// obj.set(aa, [1]);
// obj.set(dd, [2]);

// if(obj.has(aa)){
//     let ddd = obj.get(aa);
//     // ddd.push[3]
//     ddd.push(3);
//     // console.log('ddd: ', ddd);
//     // console.log('ddd: ', ddd.length);
//     // obj.set(aa, ddd);
// }

// for (let [key, value] of obj) {
//     console.log(key, value);
// }