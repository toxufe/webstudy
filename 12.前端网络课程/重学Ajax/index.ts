import express from 'express'
import fs from 'fs'

const app = express();

// 添加全局跨域 
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    next();
})


app.get('/api/jsonp',(req,res)=>{
    const {callback} = req.query;
    res.send(`${callback}('hello jsonp')`)
});

// app.get('/api/json',(req,res)=>{
//     res.json({message:'hello json'})
// })


app.get('/api/json',(req,res)=>{
    // 不安全的 任何人都可以调用该接口
    res.setHeader('Access-Control-Allow-Origin','http://127.0.0.1:5500')
    res.json({message:'hello json111'})
})

app.get('/api/text',(req,res)=>{
    const data = fs.readFileSync('./index.txt','utf-8');
    res.send(data);
});

app.listen(3000,()=>{
    console.log('server is running at http://localhost:3000')
})

// ts-node-esm index.ts
// ts-node index.ts