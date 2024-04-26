import { defineComponent, h,getCurrentInstance,onMounted,watch,onBeforeUnmount } from 'vue';
import type { PropType } from 'vue';
import { Props } from './type';
import { startApp ,bus} from 'wujie'


const wujie = defineComponent({
    props: {
        width: { type: String, default: "" },
        height: { type: String, default: "" }, name: { type: String, default: "", required: true },
        loading: { type: HTMLElement, default: undefined },
        url: { type: String, default: "", required: true },
        sync: { type: Boolean, default: undefined },
        prefix: { type: Object, default: undefined },
        alive: { type: Boolean, default: undefined },
        props: { type: Object, default: undefined },
        attrs: { type: Object, default: undefined },
        replace: { type: Function as PropType<Props['replace']>, default: undefined },
        fetch: { type: Function as PropType<Props['fetch']>, default: undefined },
        fiber: { type: Boolean, default: undefined },
        degrade: { type: Boolean, default: undefined },
        plugins: { type: Array as PropType<Props['plugins']>, default: null },
        beforeLoad: { type: Function as PropType<Props['beforeLoad']>, default: null },
        beforeMount: { type: Function as PropType<Props['beforeMount']>, default: null },
        afterMount: { type: Function as PropType<Props['afterMount']>, default: null },
        beforeUnmount: { type: Function as PropType<Props['beforeUnmount']>, default: null },
        afterUnmount: { type: Function as PropType<Props['afterUnmount']>, default: null },
        activated: { type: Function as PropType<Props['activated']>, default: null },
        deactivated: { type: Function as PropType<Props['deactivated']>, default: null },
    },
    setup(props,{emit}) {
        // vue2 this.$refs.wujie
        const instance = getCurrentInstance();
        const init = () => {
            // 微前端初始化方法就可以了
            startApp({
                name: props.name,
                url: props.url,
                el: instance?.refs.wujie as HTMLElement,
                loading: props.loading,
                alive: props.alive,
                fetch: props.fetch,
                props: props.props,
                attrs: props.attrs,
                replace: props.replace,
                sync: props.sync,
                prefix: props.prefix,
                fiber: props.fiber,
                degrade: props.degrade,
                plugins: props.plugins,
                beforeLoad: props.beforeLoad,
                beforeMount: props.beforeMount,
                afterMount: props.afterMount,
                beforeUnmount: props.beforeUnmount,
                afterUnmount: props.afterUnmount,
                activated: props.activated,
                deactivated: props.deactivated,

            });
        }

        const eventHandler = (eventname:string,...args:any)=>{
            emit(eventname,...args);
        }

        onMounted(()=>{
            bus.$onAll(eventHandler);
            init();
        });

        onBeforeUnmount(()=>{
            bus.$offAll(eventHandler);
        });
        // name 和 url 是动态绑定,值改变之后需要重载
        watch([props.name,props.url],()=>{
            init();
        });

        
        return () => h('div', {
            style: {
                width:props.width,
                height:props.height
            },
            ref: "wujie",// 方便之后读取
        });
    }
}); 

wujie.install = function (app:any){
    app.component('WuJieVue',wujie);
}

export default wujie; 