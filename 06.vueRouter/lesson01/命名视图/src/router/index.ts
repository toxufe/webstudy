import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

//vue2modehistory vue3 createWebHistory
//vue2 mode  hash  vue3  createWebHashHistory
//vue2 mode abstact vue3  createMemoryHistory SSR 服务端渲染
// 命名是路由 name:"名字"


// 命名视图
const routes: Array<RouteRecordRaw> = [
    {
        path: '/user1',
        component: () => import('../components/root.vue'),
        children: [
            {
                path: 'user1',
                component: () => import('../components/A.vue'),
            },
            {
                path: 'user2',
                components: {
                    bbb: () => import('../components/B.vue'),
                    ccc: () => import('../components/C.vue')
                }
            }
        ],
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;