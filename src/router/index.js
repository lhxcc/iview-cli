import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            redirect: '/login'
        },
        {
            path: '/about',
            component: resolve => require(['../components/common/index.vue'], resolve),
            children: [{
                    path: '',
                    component: resolve => require(['../components/common/about.vue'], resolve)
                },
                {
                    path: '/form',
                    component: resolve => require(['../components/page/form.vue'], resolve)
                },
                {
                    path: '/table',
                    component: resolve => require(['../components/page/table.vue'], resolve)
                },
                {
                    path: '/upload',
                    component: resolve => require(['../components/page/upload.vue'], resolve)
                },
                {
                    path: '/base',
                    component: resolve => require(['../components/page/learn_base.vue'], resolve)
                },
                {
                    path: '/vform',
                    component: resolve => require(['../components/page/learn_form.vue'], resolve)
                }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/common/login.vue'], resolve)
        },
    ]
})
