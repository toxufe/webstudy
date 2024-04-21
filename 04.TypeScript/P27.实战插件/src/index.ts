// expire 过期时间key permanent 永久不过期
import { StorageCls,Key } from "./type";
import { Dictionaries } from "./enum";
export class Storage implements StorageCls {
    set<T>(key:Key,value:T,expire:Dictionaries.permanent){
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