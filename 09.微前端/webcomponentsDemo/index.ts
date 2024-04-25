window.onload = ()=>{
    class Wujie extends HTMLElement {
        constructor(){
            super()

            // 创建shadowdom
        }
    }

    // 挂载 不支持驼峰命名
    window.customElements.define('wu-jie',Wujie);
}