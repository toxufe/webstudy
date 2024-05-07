import express from 'express';
const app = express();
app.get('/api/sse', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream', //核心返回数据流
        'Connection': 'close'
    })
    const data = fs.readFileSync('./index.txt', 'utf8')
    const total = data.length;
    let current = 0;
    //mock sse 数据
    let time = setInterval(() => {
        console.log(current, total)
        if (current >= total) {
            console.log('end')
            clearInterval(time)
            return
        }
        //返回自定义事件名
        res.write(`event:lol\n`)
        //返回数据
        res.write(`data:${data.split('')[current]}\n\n`)
        current++
    }, 300)
})
app.listen(3000, () => {
    console.log('Listening on port 3000');
});

