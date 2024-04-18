"use strict";
// 发布订阅模式 是设计模式其中的一种
// 设计模式 工厂、构造器、观察者、发布订阅、单例、策略、代理、迭代器、装饰器、适配器、门面、模板方法、命令、职责链、状态、备忘录、访问者、中介者、解释器
class emit {
    constructor() {
        this.events = new Map();
    }
    once(eventname, cb) {
    }
    on(eventname, cb) {
        if (this.events.has(eventname)) {
            const cbs = this.events.get(eventname);
            cbs && cbs.push(cb);
        }
        else {
            this.events.set(eventname, [cb]);
        }
    }
    off(eventname, cb) {
        const cbs = this.events.get(eventname);
        cbs === null || cbs === void 0 ? void 0 : cbs.splice(cbs.indexOf(cb), 1);
    }
    emit(eventname, ...args) {
        const cbs = this.events.get(eventname);
        if (cbs) {
            cbs.forEach((cb) => {
                cb(...args);
            });
        }
    }
}
const emitter = new emit();
// 订阅
// emitter.on("sendmessage",(a:string,b:boolean)=>{
//     console.log('sendmessage: ', 1,a,b);
// });
const cb = (a, b) => {
    console.log('sendmessage: ', 2, a, b);
};
// 只是触发一次
emitter.once("sendmessage", cb);
// // 订阅
// emitter.on("sendmessage",cb);
// // 删除订阅
// emitter.off("sendmessage",cb);
// 派发事件
emitter.emit("sendmessage", "hello", true);
emitter.emit("sendmessage", "hello", true);
emitter.emit("sendmessage", "hello", true);
emitter.emit("sendmessage", "hello", true);
emitter.emit("sendmessage", "hello", true);
emitter.emit("sendmessage", "hello", true);
// 删除的时候要删除同一个函数
// console.log('emitter: ', emitter);
