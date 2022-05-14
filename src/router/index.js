import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)


const routes = [
    {
        name: 'Home',
        path: '/home',
        component: () => import('@/views/Home.vue')
    },
    {
        name: 'Home',
        path: '/',
        component: () => import('@/views/Home.vue')
    },
    {
        name: 'CreateForm',
        path: '/createform',
        component: () => import('@/views/CreateForm.vue')
    },
    {
        name: 'EditForm',
        path: '/editform',
        component: () => import('@/views/EditForm.vue')
    },

]


const router = new VueRouter({
    mode:'history',
    routes
})

export default router;