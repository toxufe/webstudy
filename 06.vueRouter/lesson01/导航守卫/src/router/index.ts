import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// 路由守卫
const routes: Array<RouteRecordRaw> = [
    
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;