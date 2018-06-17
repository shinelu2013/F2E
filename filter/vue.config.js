const path = require('path');    
module.exports = {
    lintOnSave: false,
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            config.output.path = path.resolve(__dirname, './dist/');
            config.output.publicPath = './';
            config.output.filename = '[name].js';
        }
    },
    chainWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            
        }
    }
}