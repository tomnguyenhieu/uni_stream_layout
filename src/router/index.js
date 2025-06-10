import W01 from '@/views/W-01.vue'
import W02 from '@/views/W-02.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: W02,
        },
        {
            path: '/login',
            component: W01,
        },
    ],
})

export default router
