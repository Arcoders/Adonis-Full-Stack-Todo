import Vue from 'vue';
import Vuex from 'vuex';
import createPresistedState from 'vuex-persistedstate';
import authentication from './authentication';
import projects from './projects';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    baseUrl: '/api',
  },
  modules: {
    authentication,
    projects,
  },
  mutations: {

  },
  actions: {

  },
  plugins: [
    createPresistedState(),
  ],
});
