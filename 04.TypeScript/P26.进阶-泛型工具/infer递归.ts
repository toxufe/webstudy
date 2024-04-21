
type Arra = ['1','2','3','4','5'];

type ReverseArr<T extends any[]> = T extends [infer first,...infer rest] ? [...ReverseArr<rest>,first]:T;

type ArrReverse = ReverseArr<Arra>;
// type ArrReverse = ["5", "4", "3", "2", "1"]