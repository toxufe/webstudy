
// Symbol 类型 symbol 是一种基本数据类型，它的值是唯一的，不可变的。内存地址是不一样的。
let a1:symbol = Symbol(1);
let a2:symbol = Symbol(1);

console.log('a1: ', a1);
console.log('a2: ', a2);
console.log(a1 === a2); 


console.log(Symbol.for('name') === Symbol.for('name'));

let ccc = Symbol.for('name');
let ddd = Symbol.for('name');

console.log("ccc and ddd",ccc === ddd);

// for Symbol 在全局里是否注册过这个Key的Symbol,如果注册过就返回这个Symbol,如果没有注册过就注册一个新的Symbol


// 使用场景
// 1. 用Symbol来定义对象的私有属性
const namex = Symbol('name');
// [] 索引签名的形式
const person = {
    name: 'xiaoming',
    [a1]: namex,
    [a2]: namex,
}
// console.log(person);

// for in 不能遍历Symbol属性
for (let key in person){
    console.log('key: ', key);
}
// keys 也不能遍历Symbol属性
console.log('Object.keys(person): ', Object.keys(person));

// getOwnPropertyNames 可以获取Symbol属性
console.log('Object.getOwnPropertyNames(person): ', Object.getOwnPropertyNames(person));

// getOwnPropertySymbols 可以获取Symbol属性
console.log('Object.getOwnPropertySymbols(person): ', Object.getOwnPropertySymbols(person));

// Reflect.ownKeys 可以获取所有属性 反射
// Reflect.ownKeys 是一个新的反射API，它提供了一个统一的、功能丰富的方法来访问对象的属性。
// 什么是反射 Reflect 是一个内置的对象，它提供了拦截 JavaScript 操作的方法。
console.log('Reflect.ownKeys(person): ', Reflect.ownKeys(person));


 

