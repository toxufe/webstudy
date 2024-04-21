import ts from 'rollup-plugin-typescript2'
import path from 'path'
import { fileURLToPath } from 'url'
const metaUrl = fileURLToPath(import.meta.url)
console.log('metaUrl: ', metaUrl);
const dirName = path.dirname(metaUrl)
export default {
    input: 'src/index.ts',
    output:{
        file: path.resolve(dirName, './dist/index.js'),
    },
    plugin:[
        ts()
    ]
}