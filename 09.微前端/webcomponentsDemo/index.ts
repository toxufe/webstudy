window.onload = ()=>{
    class Wujie extends HTMLElement {
        constructor(){
            super()

            // 创建shadowdom 样式隔离
            let dom = this.attachShadow({mode:'open'});
            let wujie = document.querySelector("#wujie") as HTMLTemplateElement;
            dom.appendChild(wujie.content.cloneNode(true));

            console.log(this.getAttr('age'),this.getAttr('name'));
        }

        private getAttr(attr:string){
            return this.getAttribute(attr);
        }

        // 声明周期 
    }

    // 挂载 不支持驼峰命名
    window.customElements.define('wu-jie',Wujie);
}