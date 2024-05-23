# nodejs

Node.js 是一个免费的、开源的、跨平台的 JavaScript 运行时环境，允许开发人员创建服务器、Web 应用程序、命令行工具和脚本。

## 架构
![](../source/img/2024-05-22-23-03-05.png)

跨平台

## 优点部分 / 薄弱部分
![](../source/img/2024-05-22-23-05-24.png)

高性能、可扩展、易上手

## package.json
![](../source/img/2024-05-22-23-14-56.png)
![](../source/img/2024-05-22-23-15-50.png)

npm init  创建项目的描述文件  
npm install vue@2.6.0 安装指定的版本号  
npm uninstall vue 卸载操作
npm install --save
npm install --save-dev

npm config list 背会  
npm config set registry url 背会  
npm get registry   

npm install xmzs -g  小满切换源工具  

npm login  
npm publish 发布包  

## 1.0.0
主版本号 重大的更新或重大的改动 Vue2.0 Vue3.0
次版本号 功能的更新 Vue3.0 编译宏的更新
修订号   fix bug 

### devDependencies
开发的依赖要装到这 
npm i 包名 --save-dev  
npm i 包名 --D  
比如 webpack vite rollup 生产环境不需要  

### dependencies
生产环境所需要的依赖  
VUE vuex  

### peerDependencies
给编写插件人员或编写npm包的开发人员去使用  
vite plugin  
对等依赖 
插件的宿主环境  不能凭空运行  

## npm install 的时候发生了什么
![](../source/img/2024-05-22-23-35-08.png)
扁平化  理想状态下  
广度优先的算法，而不是深度优先。  
所有插件 插件目录里的插件  

理想状态下  
![](../source/img/2024-05-22-23-37-55.png)

非理想状态下  模块冗余   
![](../source/img/2024-05-22-23-38-53.png)

![](../source/img/2024-05-22-23-39-49.png)


npm 缓存包
integrity + version + name + 缓存


## npm run dev
所有的可行命令都在.bin中
1. 当前的项目找node_modules/.bin  vite
2. 全局的node_modules 下面去找 npm install ts-node -g
3. 环境变量下边去找
4. 报错

[/usr/local/lib/node_modules]

## 生命周期
CI脚本  

package.json
```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "predev":"node pre.js",
    "dev": "node index.js",
    "postdev":"node post.js"
  }
```

