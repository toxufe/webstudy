import ts from 'rollup-plugin-typescript2'
import path from 'path'
export default {
    input: 'src/index.ts',
    output:{
        file: path.resolve(__dirname, './dist/index.js'),
    },
    plugin:[
        ts()
    ]
}