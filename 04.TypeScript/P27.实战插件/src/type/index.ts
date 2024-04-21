import { Dictionaries } from "../enum";
export type Key = string;
export interface StorageCls {
    get:()=>void;
    set:<T>(key:Key,value:T,expire:Dictionaries.permanent)=>void;
    remove:()=>void;
    clear:()=>void;
}