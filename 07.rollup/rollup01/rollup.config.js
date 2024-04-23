// 由于 Rollup 随附了 TypeScript 类型定义，因此你可以使用 JSDoc 类型提示来利用你的 IDE 的智能感知功能：
/**
 * @type {import('rollup').RollupOptions}
 */
export default {
    input:"./src/index.js",
    output:{
        file:"./dist/bundle.js"
    }

}