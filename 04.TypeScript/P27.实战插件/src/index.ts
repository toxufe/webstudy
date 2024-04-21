// expire 过期时间key permanent 永久不过期
import { StorageCls,Key,Expire } from "./type";
import { Dictionaries } from "./enum";
export class Storage implements StorageCls {
    set<T>(key:Key,value:T,expire:Expire=Dictionaries.permanent){
        console.log('get');
    }
    get() {
        console.log('set');
    }
    remove() {
        console.log('remove');
    }
    clear() {
        console.log('clear');
    }
}