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
let arr = [1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let set: Set<number> = new Set(arr);
// console.log('set: ', set);

let map: Map<any, any> = new Map();
map.set('name', '小明');
map.set('age', 18);
// console.log('map: ', map);
// console.log(map.get('name'));

// let map:Map<any,any> = new Map();
// let arr1 = [1,2,3];
// // Map 可以接受引用类型的数据作为key
// map.set(arr1,'数组');
// console.log(map.get(arr1));

// function args(a,b,c,d,e,f,g,h,j){
//     // 伪数组 类数组
//     console.log(arguments);
// }

// 类数组
// let nodes = document.querySelectorAll('div');

// 伪数组和类数组的数据上都有迭代器 Symbol.iterator
// const each = (value:any) => {
//     let it = value[Symbol.iterator]();
//     let nextValue:any = {done:false};
//     while(!nextValue.done){
//         nextValue = it.next();
//         if(nextValue.done) break;
//         console.log(nextValue.value);
//     }
// }

// each(arr);
// each(set);
// each(map);


// 迭代器的语法糖 for of
for(let item of map){
    console.log(item);
}

// 对象不能用 for of 因为对象上没有 Symbol.iterator

// 解构 底层的原理 也是调用 iterator
// let [a,b,c] = arr;
// console.log(a,b,c);
// let c1 = [...arr];
// console.log(c1);

// 根据上边的原理 让对象支持 for of
let obj = {
    max:5,
    current:0,
    [Symbol.iterator](){
        return {
            next:()=>{
                if(this.current<this.max){
                    return {
                        value:this.current++,
                        done:false
                    }
                }else{
                    return {
                        value:this.current,
                        done:true
                    }
                }
            }
        }
    }
}

// for(let value of obj){
//     console.log(value);
// }

// 数组解构 调用 Symbol.iterator
// const xxx1 = [...obj];
// console.log('xxx: ', xxx1);

// 对象解构 调用的不是Symbol iterator 而是Object.keys ???
const xxx2 = {...obj}
console.log('xxx2: ', xxx2);




