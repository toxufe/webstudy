// 声明文件 declare
// import axios from 'axios';// 不报错 因为axios有声明文件
import express from 'express';// 报错，因为没有声明文件

// 声明文件 命名规则 *.d.ts

const app = express();

const router = express.Router();

app.use('/api',router);

router.get('/api',(req:any,res:any)=>{
    res.json({
        code:200
    })
});

// http://localhost:9001/api/api
app.listen(9001,()=>{
    console.log('server is running');
})


// 扩充全局变量
console.log(a);
// 扩充全局函数
console.log(fn(1))

// 扩充类
let p = new Person('zhangsan',18);
console.log(p.name,p.age);


// 扩充枚举
console.log(Color.Red,Color.Green,Color.Blue);