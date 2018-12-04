import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/js/components/Home';
import About from '@/js/components/About';
import Login from '@/js/components/Login';
import Registrar from '@/js/components/Registrar';
import Perfil from '@/js/components/Perfil';

Vue.use(VueRouter);

const router = new VueRouter({
    mode:'history',
    routes:[
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/registrar',
            name: 'registrar',
            component: Registrar,
        },
        {
            path: '/perfil',
            name: 'perfil',
            component: Perfil,
        }
    ]
});

export default router;