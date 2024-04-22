import {createRouter,createWebHistory,RouteRecordRaw} from 'vue-router'



//vue2 mode history vue3 createWebHistory
//vue2 mode  hash  vue3  createWebHashHistory
//vue2 mode abstact vue3  createMemoryHistory SSR 服务端渲染



const routes:Array<RouteRecordRaw> = [{
    path:'/',
    component:()=>import('../components/login.vue'),
},{
    path:'/reg',
    component:()=>import('../components/reg.vue'),
}];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;