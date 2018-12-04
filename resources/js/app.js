import './bootstrap';
import Vue from 'vue';
import Vuetify from 'vuetify';

import $ from 'jquery';
window.$ = window.jQuery = $;

//Informações da rota para o VueRouter
import Routes from '@/js/routes.js';

//arquivo do componente
import App from '@/js/views/App';

Vue.use(Vuetify);

const app = new Vue({
    el: '#app',
    router: Routes,
    render: h => h(App),
});

export default app;
