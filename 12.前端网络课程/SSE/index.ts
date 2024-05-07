import express from 'express'
import fs from 'fs'


const app = express();

// 添加全局跨域 
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','*');
    res.setHeader('Access-Control-Allow-Methods','*');
    res.setHeader('Access-Control-Allow-Credentials','true');
    next();
})



app.get('/api/sse', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream', //核心返回数据流
        'Connection': 'close'
    })

    // 同步的方式读取文件内容
    const txt = fs.readFileSync('./index.txt', 'utf8');
    // 切割成数组 索引为0  索引++的方式返回数据
    const arr = txt.split('');
    let current = 0;
    let timer = setInterval(() => {
        if (current < arr.length) {
            res.write(`event:lol\n`)
            res.write(`data:${arr[current]}\n\n`)
            current++;
        } else {
            clearInterval(timer)
        }
    },300)
});


app.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
})

// ts-node-esm index.ts
// ts-node index.ts