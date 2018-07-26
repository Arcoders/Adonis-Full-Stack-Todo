/* eslint-disable */

module.exports = {
    devServer: {
        disableHostCheck: true,
        https: false,
        proxy: {
            '/api': {
                target: 'http://127.0.0.0:3333'
            }
        }
    }
};