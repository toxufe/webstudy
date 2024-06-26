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
        path:path.resolve(__dirname,'lib'),
        // 正常工作用不到，只有开发插件会需要
        library:"wujievue",
        libraryTarget:"umd",
        umdNamedDefine:true
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
                // use:'ts-loader'// 1800
                use:'swc-loader'// 201
            }
        ]
    }
};
module.exports = config;