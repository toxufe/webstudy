import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'



// 声明meta类型
declare module 'vue-router' {
    interface RouteMeta {
        title: string,
        transition:string
    }
}

// 路由过度的动态效果

// 路由守卫
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('@/components/Login.vue'),
        // 路由元信息
        meta:{
            title:"登录页面",
            transition:"animate__fadeIn"
        }
    },
    {
        path:'/index',
        component: () => import('@/components/Index.vue'),
        // 路由元信息
        meta:{
            title:"首页",
            transition:"animate__bounceIn"
        }
    }
    
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;