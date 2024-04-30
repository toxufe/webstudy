import express from 'express'

const app = express();
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

app.listen(3000,()=>{
    console.log('server is running at http://localhost:3000')
})

// ts-node-esm index.ts
// ts-node index.ts