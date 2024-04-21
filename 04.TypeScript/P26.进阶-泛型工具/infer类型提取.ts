// // 1. 提取数组的头部元素 或 尾部元素
// type Arr = ['a','b','c'];
// // 头部
// // type A<T extends any[]> = T extends [infer one ,...any[]]? one : [];
// // 尾部
// type A<T extends any[]> = T extends [...any[],infer one ]? one : [];
// type Ac = A<Arr>;
// // type Ac = "a" // 头部 
// // type Ac = "c" // 尾部



// 删除数组的第一个元素类型