// 发布订阅模式 是设计模式其中的一种
// 设计模式 工厂、构造器、观察者、发布订阅、单例、策略、代理、迭代器、装饰器、适配器、门面、模板方法、命令、职责链、状态、备忘录、访问者、中介者、解释器

// 面试、手写、思想被广泛使用
// document.addEventListener('click', (e) => {
//     console.log('e: ', e);

// })

// // 创建自定义事件
// // 监听器
// const cb = () => {
//     console.log("触发了……");

// }
// document.addEventListener('myEvent', cb,{
//     once:true,// 配置触发一次
// })


// // 删除自定义事件
// document.removeEventListener('myEvent', cb);

// const e = new Event('myEvent');// 订阅中心

// // 派发事件  可以触发多次
// document.dispatchEvent(e);
// document.dispatchEvent(e);
// document.dispatchEvent(e);

// 自己实现发布订阅模式
// 实现 once on 监听/订阅  emit 派发  off 删除 订阅中心Map<事件的名称,[function]订阅者的集合>
// 谁发布 谁订阅 谁删除

   


interface IEvent {
    events:Map<string,Function[]>
    once:(eventname:string,cb:Function)=>void;
    on:(eventname:string,cb:Function)=>void;
    off:(eventname:string,cb:Function)=>void;
    emit:(eventname:string,...args:any)=>void;
}
class emit implements IEvent{
    events:Map<string,Function[]>;
    constructor(){
        this.events = new Map();
    }

    once(eventname:string,cb:Function){
        
    }
    on(eventname:string,cb:Function){
        if(this.events.has(eventname)){
            const cbs = this.events.get(eventname);
            cbs && cbs.push(cb);
        }else{
            this.events.set(eventname,[cb]);   
        }
    }
    off(eventname:string,cb:Function){
        const cbs = this.events.get(eventname);
        cbs?.splice(cbs.indexOf(cb),1);
    }
    emit(eventname:string,...args:any){
        const cbs = this.events.get(eventname);
        if(cbs){
           cbs.forEach((cb)=>{
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

const cb = (a:string,b:boolean)=>{
    console.log('sendmessage: ', 2,a,b);
};

// 只是触发一次
emitter.once("sendmessage",cb);
// // 订阅
// emitter.on("sendmessage",cb);

// // 删除订阅
// emitter.off("sendmessage",cb);

// 派发事件
emitter.emit("sendmessage","hello",true);
emitter.emit("sendmessage","hello",true);
emitter.emit("sendmessage","hello",true);
emitter.emit("sendmessage","hello",true);
emitter.emit("sendmessage","hello",true);
emitter.emit("sendmessage","hello",true);

// 删除的时候要删除同一个函数

// console.log('emitter: ', emitter);