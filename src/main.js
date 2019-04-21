import Vue from 'vue'
import App from './App.vue'

//bootstrapVue
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);

//ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//axios
import axios from 'axios';

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

//vuex
import Vuex from 'vuex'

Vue.use(Vuex);
//创建vuex仓库对象
const store = new Vuex.Store({
    state: {
        //1同人 2单行本 3杂志 4游戏cg 5同人cg 6gal 7画集 8动画
        workType: {
            1: '同人',
            2: '单行本',
            3: '杂志',
            4: '游戏cg',
            5: '同人cg',
            6: 'gal',
            7: '画集',
            8: '动画',
        }
    },
    mutations: {}
});

import moment from 'moment';

//引入主要组件
import authorList from './pages/author/authorList'
import worksList from './pages/works/wroksList'
import login from './pages/login'

//引入路由
import VueRouter from 'vue-router'

Vue.use(VueRouter);
//创建路由
var router = new VueRouter({
    routes: [
        {path: '/', component: authorList},
        {path: '/login', component: login},
        {path: '/authorList', component: authorList},
        {path: '/worksList', component: worksList}
    ]
});

Vue.filter('dateFormate', function (data) {
    return moment(data).format('YYYY-MM-DD')
});

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app');
