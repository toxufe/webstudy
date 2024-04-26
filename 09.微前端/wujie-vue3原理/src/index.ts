import {defineComponent,h} from 'vue';


const Wujie = defineComponent({
    setup(){


        return ()=> h('div',{
            style:{},
            ref:"wujie",// 方便之后读取
        });
    }
}); 