const { Configuration } = require('webpack');
const path = require('node:path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');

// 通过注解的方式给对象提供声明
/**
 * @type {Configuration}
 */
const config = {
    mode: 'development',// 模式
    entry: './src/main.ts',// 入口文件
    output: {
        path: path.resolve(__dirname, 'dist'),// 生成目录
        filename: 'bundle.js'// 生成文件名
    },
    stats: 'errors-only',// 只显示错误信息
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new VueLoaderPlugin()
    ],// webpack的插件都是class,所以都需要new
    module: { 
        rules: [
            {
                test: /\.ts$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/]
                    }
                }
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: 'css-loader'
            }
        ]
    },

}

module.exports = config;