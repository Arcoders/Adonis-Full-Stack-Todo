/* eslint-disable */

import Axios from '../http';

export default {
    namespaced: true,
    state: {
        registerEmail: null,
        registerPassword: null,
    },
    actions: {
        register({ commit, state }) {
            return Axios().post('/auth/register', {
                email: state.registerEmail,
                password: state.registerPassword
            });
        }
    },
    mutations: {
        setRegisterEmail(state, email) {
            state.registerEmail = email;
        },
        setRegisterPassword(state, password) {
            state.registerPassword = password;
        }
    },
};
