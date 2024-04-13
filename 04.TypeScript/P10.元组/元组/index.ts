// let arr:readonly [number,boolean] = [10,false];
// console.log(arr[0]); // 10

// 越界赋值会被推断为联合类型
// arr.push(null);

// readonly  只读数组 不能修改
// arr[0] = 80;
// arr.push(20);


// let arr:[x:number,y?:boolean] = [10];
// arr.push(20);
// arr.push(true);
// console.log(arr); // [10,20,true]

// 描述一个excel表格
// let excel:[string,string,number][] = [
//     ['张三','男',18],
//     ['李四','女',20],
//     ['王五','男',22]
// ];


// 类型别名
let arr:[x:number,y?:boolean] = [10];
type first = typeof arr[0];
type second = typeof arr[1];
type lenType = typeof arr.length;
