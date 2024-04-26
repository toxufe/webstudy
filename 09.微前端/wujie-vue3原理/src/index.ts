import { defineComponent, h } from 'vue';
import type {PropType} from 'vue';
import { Props } from './type';


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
    setup() {
        return () => h('div', {
            style: {},
            ref: "wujie",// 方便之后读取
        });
    }
}); 