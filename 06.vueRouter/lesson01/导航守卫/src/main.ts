import { createApp,createVNode } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router'
import ElementUi from 'element-plus'
import 'element-plus/dist/index.css'
import loadingBar from '@/components/loadingBar.vue'
console.log('loadingBar: ', loadingBar);
const Vnode = createVNode(loadingBar);
console.log('Vnode: ', Vnode);


const app = createApp(App);
app.use(router);
app.use(ElementUi);


// 路由中间件 路由前置守卫 授权登录使用
const whiteList = ['/'];
router.beforeEach((to, from, next) => {
    if(whiteList.includes(to.path) || localStorage.getItem('token')) {
        next();
    }else{
        next({path: '/'});
    }
})

app.mount('#app')
 