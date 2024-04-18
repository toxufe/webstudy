// weakMap Map weakSet Set
// Map 哈希机构  类型对象
// Set 集合 类似数组，但是成员的值都是唯一的

// // Set 天然去重 引用类型除外
let set:Set<number> = new Set([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9]);

// // 增
// set.add(10);
// // 删
// set.delete(1);
// // 清空
// set.clear();
// // 改
// // 查
// console.log('has: ', set.has(10));
// console.log('set: ', set);

// // 循环方法 forEach entries keys for ... of



// // package.json "type": "module",
// // ts-node-esm index.ts



// // Map 的 key 可以是任意类型 可以是基础类型 也可以是引用类型
// let obj = {name:"zf"};
// let map:Map<object,any> = new Map(); 

// // 增
// map.set(obj,100);
// console.log('map: ', map);
// // 删
// map.delete(obj);
// // 改
// map.set(obj,200);
// // 查
// console.log('map: ', map);
// // 清空
// map.clear();
// // 查
// console.log('map: ', map);

// // 循环方法 forEach entries keys for ... of

// weakMap weakSet 弱项 弱引用
// 垃圾回收机制 会自动回收内存 但是不会回收弱引用的内存 适合存储临时数据
// weakMap 和 map 的区别 1. key 只能是对象 2. key 是弱引用的

let obj = {name:"zf"};// 引用一次 引用计数为1
let xxx = obj;//   引用计数为2

let map:WeakMap<object,any> = new WeakMap();// 不会被垃圾回收机制回收 
map.set(obj,100);
console.log('map: ', map.get(obj));
console.log('map: ', map);


