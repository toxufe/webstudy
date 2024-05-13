import express from 'express';
import jwt from 'jsonwebtoken';
import cors from 'cors';

let app = express();
app.use(cors());


// 1. 登录 返回前端token 用于授权
// 2. 列表接口但是必须是授权状态才能访问,否则是403


app.listen(3000, () => {
    console.log('server is running at http://localhost:3000');
});