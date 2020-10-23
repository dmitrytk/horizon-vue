import Vue from 'vue';
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Toasted from 'vue-toasted';
import './scss/custom.scss';
import './scss/variables.scss';
import './scss/style.scss';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Toasted)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
