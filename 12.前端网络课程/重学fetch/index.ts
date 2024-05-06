import express from 'express'
import fs from 'fs'
import multer from 'multer'
import path from 'path';


const app = express();


// 设置存储引擎
const storage = multer.diskStorage({
destination: function (req:any, file:any, cb:any) {
    cb(null, 'uploads/') // 上传的文件将保存在 uploads 目录
},
filename: function (req:any, file:any, cb:any) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
}
});

// 创建 Multer 实例
const upload = multer({ storage: storage });

// 添加全局跨域 
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Headers','*');
    res.setHeader('Access-Control-Allow-Methods','*');
    res.setHeader('Access-Control-Allow-Credentials','true');
    next();
})

app.use(express.json());
app.use(express.urlencoded({extended:true}));


// 后端post请求
app.post('/api/post',(req,res)=>{
    console.log(req.body.name,req.body.age);
    res.json({message:'post请求成功'})
});

// 上传文件
app.post('/api/upload',upload.single('file'),(req:any,res)=>{
    console.log(req.files);
    res.json({message:'上传成功'})
});

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
    console.log(req.query.name);
    const data = fs.readFileSync('./index.txt','utf-8');
    res.send(data);
});

app.listen(3000,()=>{
    console.log('server is running at http://localhost:3000')
})

// ts-node-esm index.ts
// ts-node index.ts