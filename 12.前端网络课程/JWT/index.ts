import express from 'express';
import jwt from 'jsonwebtoken';
import cors from 'cors';

let app = express();
app.use(cors());



app.listen(3000, () => {
    console.log('server is running at http://localhost:3000');
});