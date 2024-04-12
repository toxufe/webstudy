"use strict";
// 虚拟Dom 简单版
class Dom {
    // 创建节点
    createElement(el) {
        return document.createElement(el);
    }
    // 填充文本
    setText(el, text) {
        el.textContent = text;
    }
    // 渲染函数
    render(data) {
        let root = this.createElement(data.tag);
        if (data.text && typeof data.text === 'string') {
            this.setText(root, data.text);
        }
        if (data.children && Array.isArray(data.children)) {
            data.children.forEach((item) => {
                let child = this.render(item);
                root.appendChild(child);
            });
        }
        return root;
    }
}
class Vue extends Dom {
    constructor(options) {
        super();
        this.options = options;
        this.init();
    }
    static version() {
        return '1.0.0';
    }
    init() {
        // 创建虚拟DOM 通过js 来渲染真实的dom结构。
        let Data = {
            tag: 'div',
            children: [
                {
                    tag: 'h1',
                    text: 'Hello Vue'
                },
                {
                    tag: 'h2',
                    text: 'Hello TypeScript',
                    children: [
                        {
                            tag: 'h3',
                            text: 'Hello Hello Vue'
                        }
                    ]
                }
            ]
        };
        let app = typeof this.options.el == 'string' ? document.querySelector(this.options.el) : this.options.el;
        app === null || app === void 0 ? void 0 : app.appendChild(this.render(Data));
    }
}
new Vue({
    el: '#app',
});
// 静态方法 this 执行的是类本身 static修饰的方法和属性
console.log('Vue.version(): ', Vue.version());
// get set 方法
class Ref {
    constructor(value) {
        this._name = 'name';
        this._value = value;
        console.log('this._value: ', this._value);
    }
    get value() {
        return this._value + ' GET';
    }
    set value(value) {
        this._value = value + ' SET';
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
}
const ref = new Ref("Hello Vue");
console.log('ref.value: ', ref.value);
ref.value = 'Hello TypeScript';
console.log('ref.value: ', ref.value);
console.log('ref.name: ', ref.name);
ref.name = 'Fly';
console.log('ref.name: ', ref.name);
