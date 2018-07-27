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
                router.push('/')
            })
            .catch(() => {
                commit('setLoginError', 'An error has occurred');
            });
        },
        logout({ commit }) {
            commit('setToken', null);
            router.push('/login');
        },
    },
    mutations: {
        setRegisterEmail(state, email) {
            state.registerEmail = email;
        },
        setRegisterPassword(state, password) {
            state.registerPassword = password;
        },
        setToken(state, token) {
            state.token = token;
        },
        setRegisterError(state, error) {
            state.registerError = error;
        },
        setLoginEmail(state, email) {
            state.loginEmail = email;
        },
        setLoginPassword(state, password) {
            state.loginPassword = password;
        },
        setLoginError(state, error) {
            state.loginError = error;
        },
    },
    getters: {
        isLoggedIn(state) {
            return !!state.token;
        }
    },
};
