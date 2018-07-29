/* eslint-disable */

import Axios from '../http';
import router from '../router';

export default {
    namespaced: true,
    state: {
        registerEmail: null,
        registerPassword: null,
        registerError: null,
        loginEmail: null,
        loginPassword: null,
        loginError: null,
        token: null
    },
    actions: {
        register({ commit, state }) {
            return Axios().post('/auth/register', {
                email: state.registerEmail,
                password: state.registerPassword
            })
            .then(({ data }) => {
                commit('setToken', data.token);
                commit('setRegisterError', null);
                commit('setRegisterPassword', null);
                router.push('/')
            })
            .catch(() => {
                commit('setRegisterError', 'An error has occurred');
            });
        },
        login({ commit, state }) {
            return Axios().post('/auth/login', {
                email: state.loginEmail,
                password: state.loginPassword
            })
            .then(({ data }) => {
                commit('setToken', data.token);
                commit('setLoginError', null);
                commit('setLoginPassword', null);
                router.push('/')
            })
            .catch(() => {
                commit('setLoginError', 'An error has occurred');
            });
        },
        logout({ commit, rootState }) {
            commit('resetApp', rootState);
            router.push('/login');
        },
    },
    mutations: {
        setRegisterEmail: (state, email) => state.registerEmail = email,

        setRegisterPassword: (state, password) => state.registerPassword = password,

        setToken: (state, token) => state.token = token,

        setRegisterError: (state, error) => state.registerError = error,

        setLoginEmail: (state, email) => state.loginEmail = email,

        setLoginPassword: (state, password) => state.loginPassword = password,

        setLoginError: (state, error) => state.loginError = error,

        resetApp: (state, rootState) => {
            rootState.authentication.token = null
            rootState.projects.currentProject = null
            rootState.tasks.tasks = []
        }
    },
    getters: {
        isLoggedIn: (state) => !!state.token,
    },
};
