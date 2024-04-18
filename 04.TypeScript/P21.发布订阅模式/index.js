"use strict";
// 发布订阅模式 是设计模式其中的一种
// 设计模式 工厂、构造器、观察者、发布订阅、单例、策略、代理、迭代器、装饰器、适配器、门面、模板方法、命令、职责链、状态、备忘录、访问者、中介者、解释器
class emit {
    constructor() {
        this.events = new Map();
    }
    once() { }
    on(eventname, cb) { }
    off() { }
    emit(eventname, ...args) { }
}
const emitter = new emit();
// 订阅
emitter.on("sendmessage", (a, b) => {
});
// 派发事件
emitter.emit("sendmessage", "hello", true);
