import Vue from 'vue'
import App from './App.vue'

//bootstrapVue
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);

//axios
import axios from 'axios';
Vue.prototype.$axios=axios;
Vue.config.productionTip = false;

import moment from 'moment';

//引入主要组件
import authorList from './pages/author/authorList'
import worksList from './pages/works/wroksList'
import login from './pages/login'

//引入路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//创建路由
var router=new VueRouter({
  routes:[
    {path:'/',component:authorList},
    {path:'/login',component:login},
    {path:'/authorList',component:authorList},
    {path:'/worksList',component:worksList}
  ]
});

Vue.filter('dateFormate',function (data) {
  return moment(data).format('YYYY-MM-DD')
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
