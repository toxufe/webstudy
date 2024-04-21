# 开发插件步骤
1. 新建src 文件夹
2. 新建src/enum/index.ts 文件 存放枚举 
3. 新建src/type/index.ts 文件 存放类型
4. 新建src/index.ts 存放插件的主要逻辑
5. src的平级新建 index.html 用来做代码测试
6. npm init -y package.json
7. src平级新建rollup.config.js 作用：把ts打包成js
8. tsc --init 生成tsconfig.json文件
    - module 改成 ESNext
    - moduleResolution node
    - strict false 
9. 编写程序
10. 打包
    - 安装打包库
    - npm install rollup typescript rollup-plugin-typescript2
11. package.json 配置打包命令 build rollup -c

## 补充说明
新版的rollup
package.json 指定 type module 