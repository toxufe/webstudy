# 微前端

## 实现方式
- iframe
- qiankun 沙箱环境
- micro-app 京东开发 沙箱环境
- emp 方案 webpack5 百度开发
- 无界微前端方案

## webComponts


## typescript
- npm i typescript -g
- tsc -w 实时编译ts文件


## monorepo 架构
pnpm 官网
https://pnpm.io/zh/pnpm-workspace_yaml
- npm i pnpm -g
- pnpm -v
- main 主应用 npm init vue
- 子应用 npm init vite
    - vue-demo vue typescript
- 子应用 npm init vite
    - react-demo React typescript

安装依赖
npm 每个里边都需要安装
monorepo 架构
项目最外层可以安装依赖
pnpm init
配置 pnpm-workspace.yaml
pnpn i


// 根目录下执行 子应用
pnpm -F react-demo dev



可以复用子模块
common 文件夹
pnpm init
09.微前端/monorepo架构/pnpm-workspace.yaml 
添加common配置
pnpm i axios

main 应用
cd main 
pnpm -F main add common

pnpm版本不一直需要设置.nmprc
link-workspace-packages=true
save-workspace-protocol=true


###  无界入门
官网
https://wujie-micro.github.io/doc
cd main
del pnpm i wujie
npm i wujie-vue3 -S
import Wujie from 'wujie-vue3' // 引入
app.use(Wujie)// 注册 
主：pnpm run dev


 #### 无界Vue3原理
pnpm init
tsc init
webpack.config.js

pnpm i wujie
pnpm i vue -D
pnpm i webpack webpack-cli -D
pnpm i typescript -D
pnpm i ts-loader -D

新技术 swc 提升打包性能 代替babel ts-loader
pnpm i -D @swc/core swc-loader
swc 底层 rust

esm 格式打包
npm install -D @swc/cli




使用setup函数模式 需要引入defineComponent

### pnpm 优势
- pnpm官网优势
- 只有一个仓库链接 组件 软连接 硬链接 组件中心
- 软连接 符号链接 mklink ruan.js index.js 需要管理员的权限  快捷方式  ln -s
- 硬链接 mklink /H ying.js index.js   (硬链接文文件，原文件)   ln
    共享一个内存地址，因此内容是一模一样的
- pnpm store path 查看组件中心
- 命令
- pnpm import 转成自用的软件管理包格式




#### 创建项目
- pnpm init
- pnpm i vue


## 扁平???


