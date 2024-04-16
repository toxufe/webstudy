// 1. 默认导出的引入方式 使用import 名字随便起
// import obj,{a,arr,add,a1 as xxx} from './test';
// import obj,{a,arr,add} from './test';




// console.log('obj: ', obj);

// // 2. 分别导出的引入方式 使用import {名字} from '路径'
// console.log('a: ', a);
// console.log('arr: ', arr);
// console.log('add: ', add(1,2));

// 3. 解构导出的引入方式 使用import {名字 as 别名} from '路径'
// console.log('a1: ', xxx);


// 4. 查看导出的所有内容
// import * as api from './test';
// console.log('api: ', api);

// 5. 动态引入
// import 只能在最上层使用  掺杂到代码逻辑中 需要使用 动态引入
if(true){
    import('./test').then(res=>{
        console.log('res: ', res);
    })
}