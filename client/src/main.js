
import 'vuetify/dist/vuetify.min.css';
import { sync } from 'vuex-router-sync';
import Vuetify from 'vuetify';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';

Vue.use(Vuetify);

sync(store, router);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
