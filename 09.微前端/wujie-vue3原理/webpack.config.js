const { Configuration } = require('webpack');
const path = require('path');
// 通过注解的方式给对象提供声明
/**
 * @type {Configuration}
 */
const config = {
    entry:"./src/index.ts",
    output:{
        filename:"index.js",
        path:path.resolve(__dirname,'lib')
    }
};
module.exports = config;