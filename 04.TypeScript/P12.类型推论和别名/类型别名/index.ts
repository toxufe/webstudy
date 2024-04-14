

type S = string | number;

let abc:string = "QQQ";
let bcd:S = "WWW";
bcd = 123;

// interface 和 type的区别
// interface 重名可以声明合并 extends
// type 可以声明联合类型 | &

// extends 在type中是包含的意思。在interface中是继承的意思
// 左边的值会作为右边类型的子类型
// any unknow 顶级类型
// Object
// Number String Boolean
// number string boolean 
// 1 'test' true
// never
type num  = 1 extends number ? 1:0;




