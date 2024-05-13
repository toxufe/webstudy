import express from 'express';
import jwt from 'jsonwebtoken';
import cors from 'cors';

let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


let user = {
    username: 'admin',
    password:'123456'
};
// 1. 登录 返回前端token 用于授权
app.post('/api/login',(req,res)=>{
    let {username,password} = req.body;
    if(username === user.username && password === user.password){
        let token = jwt.sign
    }else{
        res.status(403).json({message:'用户名或密码错误'});
    }
});
// 2. 列表接口但是必须是授权状态才能访问,否则是403 


app.listen(3000, () => {
    console.log('server is running at http://localhost:3000');
});