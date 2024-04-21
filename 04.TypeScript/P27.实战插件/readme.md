# 开发插件步骤
1. 新建src 文件夹
2. 新建src/enum/index.ts 文件 存放枚举 
3. 新建src/type/index.ts 文件 存放类型
4. 新建src/index.ts 存放插件的主要逻辑
5. src的平级新建 index.html 用来做代码测试
6. npm init -y package.json
7. src平级新建rollup.config.js 作用：把ts打包成js
8. tsc --init 生成tsconfig.json文件