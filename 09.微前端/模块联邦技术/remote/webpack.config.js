const { Configuration } = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// 模块联邦技术
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');// webpack 5 内置
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
        port:9001,//remote
    },
    plugins:[
        new htmlWebpackPlugin({template:'./index.html'}),
        new ModuleFederationPlugin({
            name:"remote",
            filename:"remoteEntry.js",
            exposes:{
                './addList':'./list.js',// 暴露的模块的路径
            }
        })
    ]
}
module.exports = config;