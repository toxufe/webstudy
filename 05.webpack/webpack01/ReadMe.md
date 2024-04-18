# webpack 构建 ts + vue3 项目

## 命令记录
tsc --init
npm init -y
webpack.config.js
index.html
src
src/main.ts
src/App.vue
垫片
src/shim.d.ts

## 修改ts配置文件
`"include": ["src/**/*"]`

## 安装依赖
可打包
webpack 5.0 以上，需要安装配套cli
npm i webpack webpack-cli -D

可本地运行
npm i webpack-dev-server -D

## 支持 typescript
解析文件需要loader
npm i ts-loader -D
npm i typescript -D

## vue
npm i vue
 

## vue 和 html 产生关联
npm i html-webpack-plugin -D

## CSS
npm i css-loader -D
npm i style-loader -D

## 日期库
npm i moment

## 注意
webpack 是基于nodejs环境的
nodejs环境 是遵循commonjs规范的
处理什么文件就要装什么loader