const { Configuration } = require('webpack');
const path = require('path');
// 通过注解的方式给对象提供声明
/**
 * @type {Configuration}
 */
const config = {
    mode: 'none',// 模式
    entry:"./src/index.ts",
    output:{
        filename:"index.js",
        path:path.resolve(__dirname,'lib')
    },
    // 给Cdn使用的
    externals:{
        vue:'vue',
        wujie:'wujie'

    },
    module:{
        rules:[
            {
                test:/\.ts$/,
                use:'ts-loader'
            }
        ]
    }
};
module.exports = config;