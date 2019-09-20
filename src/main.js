import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import echarts from 'echarts';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);

Vue.prototype.$echarts = echarts ;

Vue.config.productionTip = false;
Vue.use(ElementUI);
// require('./mock');

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
