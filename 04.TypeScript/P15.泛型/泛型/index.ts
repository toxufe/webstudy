// 泛型  动态类型  T  Type Generic 泛型 占位符
// 泛型函数 定义的时候不确定参数的类型，只有在调用的时候才能确定参数的类型
// function fn <T>(a:T,b:T):Array<T>{
//     return [a,b]
// }

// let arrs = fn<number>(1,2)
// console.log('arr: ', arrs);

// let strs = fn<string>("ccc","ddd");
// console.log('strs: ', strs);


// // 泛型Type
// type A<T> = number | string | T;

// let a: A<boolean> = true;
// let b: A<undefined> = undefined;


// // 泛型接口
// interface Data<T> {
//     msg: T;
// }

// const data: Data<string> = {
//     msg: 'Hello World'
// }

// const data1: Data<boolean> = {
//     msg: true
// }

// // 其他泛型的用法
// // 1. 可以传入多个泛型 2. 可以设置默认值
// function add<T=number,K=string>(a:T, b:K): Array<T|K> {
//     return [a, b]
// }

// let arr = add(1, '2');
// console.log('arr: ', arr);

// let arr1 = add<string, boolean>('1', true);
// console.log('arr1: ', arr1);


// 实战中泛型的应用
const axios = {
    get<T>(url:string):Promise<T>{
        return new Promise((resolve, reject) => {
            let xhr:XMLHttpRequest = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4 && xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText))
                }
            }
            xhr.send(null);
        })
    }
}


interface RootObject {
    code: number;
    msg: string;
    data: Datum[];
  }
  
  interface Datum {
    id: number;
    name: string;
    age: number;
  }



axios.get<RootObject>('./data.json').then(res => {
    console.log('res: ', res.code);
    console.log('res: ', res.msg);
    console.log('res: ', res.data);

})
