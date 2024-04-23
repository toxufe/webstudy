import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// 路由守卫
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('@/components/Login.vue')
    }
    
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;