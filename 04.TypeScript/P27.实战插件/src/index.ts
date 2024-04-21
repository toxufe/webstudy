import { StorageCls } from "./type";
export class Storage implements StorageCls {
    get() {
        console.log('get');
    }
    set() {
        console.log('set');
    }
    remove() {
        console.log('remove');
    }
    clear() {
        console.log('clear');
    }
}