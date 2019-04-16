import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

//bootstrapVue
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);


import axios from 'axios';
Vue.prototype.$axios=axios;
Vue.config.productionTip = false;

Vue.use(VueRouter);

import authorList from './pages/author/authorList'
import worksList from './pages/works/wroksList'

var router=new VueRouter({
  routes:[
    {path:'/authorList',component:authorList},
    {path:'/worksList',component:worksList}
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
