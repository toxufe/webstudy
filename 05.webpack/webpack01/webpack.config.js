const {Configuration} = require('webpack');

// 通过注解的方式给对象提供声明
/**
 * @type {Configuration}
 */
const config = {
     entry: './src/main.ts',
}

module.exports = config;