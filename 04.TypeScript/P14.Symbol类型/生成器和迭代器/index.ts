// 生成器和迭代器 用法一样 只是写法不一样

// 1. 生成器
// function * gen(){
//     yield Promise.resolve("小明");
//     yield "小满";
//     yield "打满";
//     yield "小红";
// }

// const man = gen();

// console.log(man.next());
// console.log(man.next());
// console.log(man.next());
// console.log(man.next());
// console.log(man.next());

// 2. 迭代器
// es6 新增的数据类型 Set Map
// Set 是一个不重复的数据集合
// Map 是一个键值对的数据集合
// let arr = [1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let set: Set<number> = new Set(arr);
// console.log('set: ', set);

// let map: Map<any, any> = new Map();
// map.set('name', '小明');
// map.set('age', 18);
// console.log('map: ', map);
// console.log(map.get('name'));

// let map:Map<any,any> = new Map();
// let arr1 = [1,2,3];
// // Map 可以接受引用类型的数据作为key
// map.set(arr1,'数组');
// console.log(map.get(arr1));

function args(a,b,c,d,e,f,g,h,j){
    // 伪数组 类数组
    console.log(arguments);
}
