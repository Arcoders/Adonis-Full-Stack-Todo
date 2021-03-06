/* eslint-disable */

import axios from 'axios';
import store from './store/';

export default () => {
    return axios.create({
        baseURL: store.state.baseUrl,
        timeout: 7000,
        headers: {
            Authorization: `Bearer ${store.state.authentication.token}`,
        },
    });
}
