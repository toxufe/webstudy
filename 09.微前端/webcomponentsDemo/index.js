"use strict";
window.onload = () => {
    class Wujie extends HTMLElement {
        constructor() {
            super();
            // 创建shadowdom 样式隔离
            let dom = this.attachShadow({ mode: 'open' });
        }
    }
    // 挂载 不支持驼峰命名
    window.customElements.define('wu-jie', Wujie);
};
