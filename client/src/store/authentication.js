/* eslint-disable */

import Axios from '../http';
import router from '../router';

export default {
    namespaced: true,
    state: {
        registerEmail: null,
        registerPassword: null,
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
                router.push('/')
            })
        }
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
        }
    },
};
