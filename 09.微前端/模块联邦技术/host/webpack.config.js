const { Configuration } = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// 模块联邦技术
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');// webpack 5 
// 通过注解的方式给对象提供声明
/**
 * @type {Configuration}
 */

const config = {
    mode:'none',
    entry:'./index.js',
    output: {
        filename:'bundle.js'
    },
    devServer:{
        port:9002,//host
    },
    plugins:[
        new htmlWebpackPlugin({template:'./index.html'}),
        new ModuleFederationPlugin({
            name:"host",
            remotes:{
                // 导出模块的名字
                remote:"remote@http://localhost:9001/remoteEntry.js"
            }
        })

    ]
}
module.exports = config;