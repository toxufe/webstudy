import {createRouter,createWebHistory,RouteRecordRaw} from 'vue-router'


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