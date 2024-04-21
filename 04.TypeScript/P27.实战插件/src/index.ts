// expire 过期时间key permanent 永久不过期
import { StorageCls,Key,Expire,Data } from "./type";
import { Dictionaries } from "./enum";
export class Storage implements StorageCls {
    set<T>(key:Key,value:T,expire:Expire=Dictionaries.permanent){
        const data = {
            value,
            [Dictionaries.expire]:expire
        };
        localStorage.setItem(key,JSON.stringify(data));
    }
    get<T>(key:Key) {
       const value = localStorage.getItem(key);
       if(value){
        const data:Data<T> = JSON.parse(value);
       }else{
        return {
            message:'值无效',
            value:null
        }
       }
    }
    remove() {
        console.log('remove');
    }
    clear() {
        console.log('clear');
    }
}