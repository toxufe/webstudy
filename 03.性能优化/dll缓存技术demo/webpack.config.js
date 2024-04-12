const {Configuration}  =  require('webpack');
const path = require('path');
const {DllReferencePlugin} = require('webpack');
// 配置打包main.js

/**
 * @type {Configuration}
 */
const config = {
    entry:'./main.js',
    mode:'development',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    },
    plugins:[
        new DllReferencePlugin({
            manifest:require('./dll/vue.manifest.json')
        })
    ]
}

module.exports = config;