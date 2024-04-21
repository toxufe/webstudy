// expire 过期时间key permanent 永久不过期
import { Dictionaries } from "../enum";
export type Key = string;
export type Expire = Dictionaries.permanent | number;// 过去时间支持时间戳
export interface StorageCls {
    get:()=>void;
    set:<T>(key:Key,value:T,expire:Expire)=>void;
    remove:()=>void;
    clear:()=>void;
}