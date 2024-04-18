const { Configuration } = require('webpack');
const path = require('node:path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');
const moment = require('moment/moment');

// 通过注解的方式给对象提供声明
/**
 * @type {Configuration}
 */
const config = {
    mode: 'development',// 模式
    entry: './src/main.ts',// 入口文件
    output: {
        path: path.resolve(__dirname, 'dist'),// 生成目录
        filename: '[chunkhash].js',// 生成文件名
        clean: true// 清空上次打包的文件
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
                use: ['style-loader', 'css-loader'],// 规则是从右向左解析 css-loader -> style-loader -> 插入 style 标签
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],// 规则是从右向左解析 css-loader -> style-loader -> 插入 style 标签
            },
        ]
    },
    optimization:{
        splitChunks:{
            cacheGroups:{
                moment:{
                    name:'moment',
                    chunks:'all',// 全部拆出来
                    test:/[\\/]node_modules[\\/]moment[\\/]/
                },
                common:{
                    name:'common',
                    chunks:'all',// 全部拆出来
                    minSize:0,// 最小拆分大小
                    minChunks:2,// 最小拆分次数
                }
            }
        }
    }// 优化项

}

module.exports = config;