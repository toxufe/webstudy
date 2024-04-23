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
    // 创建 Router实例，滚动行为，可以提供一个方法 scrollBehavior
    scrollBehavior:(to, from, savedPosition) =>{
        console.log('savedPosition: ', savedPosition);
        // return 期望滚动到哪个的位置
        if(savedPosition) {
            return savedPosition;
        }else{
            return {top:300};
        }
    },
    routes
});

export default router;