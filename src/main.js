import Vue from 'vue'
import App from './App.vue'

//bootstrapVue
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue);


import axios from 'axios';
Vue.prototype.$axios=axios;
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
