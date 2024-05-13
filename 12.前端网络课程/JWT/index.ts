import express from 'express';
import jwt from 'jsonwebtoken';
import cors from 'cors';

let app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


let user = {
    id: 1,
    username: 'admin',
    password: '123456'
};
let Key = '123456';
// 1. 登录 返回前端token 用于授权
app.post('/api/login', (req, res) => {
    let { username, password } = req.body;
    if (username === user.username && password === user.password) {
        res.json({
            message: '登录成功',
            token: jwt.sign({ id: user.id}, Key, {expireIn: '1h' })
        }); 
    } else {
        res.status(403).json({ message: '用户名或密码错误' });
    }
});
// 2. 列表接口但是必须是授权状态才能访问,否则是403 
app.get('/api/list',(req,res)=>{
    // 前端会把token存到这个请求头里，这是一个规范 authorization
    let token = req.headers.authorization as string;
    jwt.verify(token,Key,(err,decode)=>{
        if(err){
            // token 没有权限 根据规范是返回403
            res.status(403).json({message:'无效的token'});
        }else{
            res.json({
                list:[
                    {id:1,name:'张三'},
                    {id:2,name:'李四'},
                    {id:3,name:'王五'},
                ]
            });
        }
    });

});


app.listen(3000, () => {
    console.log('server is running at http://localhost:3000');
});