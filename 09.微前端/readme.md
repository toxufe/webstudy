# vue ts
window.$wujie.props 报错解决方式
declare global {
    interface Window {
        $wujie : {
            props:Recore<string,any>
        }
    }
}
# 微前端

## 实现方式
- iframe
- qiankun 沙箱环境
- micro-app 京东开发 沙箱环境
- emp 方案 webpack5 百度开发
- 无界微前端方案
- 模块联邦技术

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
pnpm install -D @swc/cli


使用setup函数模式 需要引入defineComponent

#### 无界传参
```js
// 子应用读取父应用的参数
window.parent.变量名;
// 通过组件传参的形式
// :props='{name:'xxx'}'
// 子应用 会有$wujie的实例
window.$wujie.props;

eventBus 用的比较多哦
主应用
import {bus} from 'wujie'
bus.$on('vue3',function(data:any){
    console.log(data,"我是主应用");
});
子应用
window.$wujie.bus.$emit('vue3','我是子应用')


```

#### 预加载
mdn
requestIdleCallback 
浏览器没有任务执行  会有60ms的空闲时间 这个时间会执行  requestIdleCallback

react16 postmessage + requestAnimationFrame
polyfill
setTimeOut 0 大概是4毫秒

react18 
```js
let {port1,port2}= new MessageChannel()
// onmessage 隐士开始start
port1.onmessage = function(e){
    console.log('收到了port2的消息',e);
}

postMessage();
```


#### 发布到npm
设置版本号
设置files:[]
"main": "lib/index.js",
"files": [
"lib",
"esm",
"index.d.ts"
],
"main": "lib/index.js",
"module": "esm/src/index.js",

npm adduser
npm login
npm publish

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

## 模块联邦技术
- emp
- 模块联邦技术和webpack5是强耦合的

pnpm i webpack 
pnpm i webpack-cli
pnpm i webpack-dev-server
pnpm i html-webpack-plugin
-D

