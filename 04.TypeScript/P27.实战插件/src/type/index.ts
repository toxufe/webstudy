// expire 过期时间key permanent 永久不过期
import { Dictionaries } from "../enum";
export type Key = string;
export interface StorageCls {
    get:()=>void;
    set:<T>(key:Key,value:T,expire:Dictionaries.permanent)=>void;
    remove:()=>void;
    clear:()=>void;
}