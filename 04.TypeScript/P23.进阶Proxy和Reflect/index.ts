// proxy 代理 13个方法 参数一模一样 es6 新增的拦截器
// Reflect 13个方法 参数一模一样
// mobx observable

// let person = {
//     name: 'zf',
//     age: 11
// }
// // 取值操作
// // console.log(person.name);
// // 赋值操作
// // person.name = 'zfpx';

// // Proxy 仅支持引用类型 数组、对象、函数、set、map
// let personProxy = new Proxy(person,{
//     // 取值
//     get(target,key){
//         console.log('get: ', target);
//     },

//     // receiver 保证上下文的一致性
//     set(target,key,value,receiver) {
//         console.log('set: ', target);
//         return true;
//     },

//     // 拦截函数的调用、call、apply  Proxy 支持函数的调用
//     apply() {
//         console.log('apply');
    
//     },
//     // 拦截和 in 操作符相关的操作
//     has() {
//         return true;
//     },
//     // 拦截 for ... in ...
//     ownKeys() {
//       return 'ownKeys';
//     },
//     // 拦截 new 操作符
//     construct() {
//         console.log('construct');
//         return {}
//     },
//     // 拦截删除的操作
//     deleteProperty() {
//         console.log('deleteProperty');
//         return true;
    
//     }


// });


// // 取值操作
// console.log('personProxy.age: ', personProxy.age);
// // 赋值操作
// personProxy.name = 'zfpx';

// Reflect 会帮助我们操作对象 而且参数一模一样
// let person = { name: 'zf', age: 30 };
// let personProxy = new Proxy(person,{
//     get(target,key,receiver){
//         if(target.age<=18){
//             return Reflect.get(target,key,receiver);
//         }else{
//             return '已成年';
//         }
//     }
// });

// console.log('personProxy.age: ', personProxy.age);

// reflect 专题
// let person = {name: 'zf', age: 30};
// // 取值
// console.log("直接取值",person.name);
// // 保证上下文的正确和一致性
// console.log("Reflect",Reflect.get(person,'name',person));

// Reflect.set(person,'name','zfpx',person);

// console.log("Reflect",Reflect.get(person,'name',person));

// 观察者模式 mobx observable
// redux mobx 状态管理器  核心是观察者模式


const observable = <T extends object>(params:T)=>{
    new Proxy(params,{
        set(target,key,value,receiver){
            
        }
    });
}
