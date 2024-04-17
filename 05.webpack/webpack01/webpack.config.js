const { Configuration } = require('webpack');
const path = require('node:path');

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
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
            }
        ]
    },

}

module.exports = config;