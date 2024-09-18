import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router'; 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './globalStyles.css';
Vue.use(ElementUI);
Vue.use(VueRouter);


new Vue({
  render: h => h(App),
  router, // 将路由实例注入根 Vue 实例中 
  el: '#app',

}).$mount('#app');
