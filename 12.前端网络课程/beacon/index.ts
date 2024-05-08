import express from 'express'

const app = express();

// 使用 raw 格式解析请求体
app.use(express.text())
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));


// 后端post请求
app.post('/api/post',(req,res)=>{
    console.log(req.body);
    res.send("ok");
});

app.listen(3000,()=>{
    console.log('server is running at http://localhost:3000')
})

// ts-node-esm index.ts
// ts-node index.ts