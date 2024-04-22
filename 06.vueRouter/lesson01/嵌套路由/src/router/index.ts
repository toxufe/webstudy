import {createRouter,createWebHistory,createWebHashHistory,RouteRecordRaw} from 'vue-router'



//vue2 mode history vue3 createWebHistory
//vue2 mode  hash  vue3  createWebHashHistory
//vue2 mode abstact vue3  createMemoryHistory SSR 服务端渲染


// 命名是路由 name:"名字"

const routes:Array<RouteRecordRaw> = [{
    path:'/',
    name:'Login',
    component:()=>import('../components/login.vue'),
},{
    path:'/reg/:id',
    name:'Reg',
    component:()=>import('../components/reg.vue'),
    props:true
}];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router;