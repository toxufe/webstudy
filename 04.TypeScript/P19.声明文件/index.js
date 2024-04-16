"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 声明文件 declare
// import axios from 'axios';// 不报错 因为axios有声明文件
const express_1 = __importDefault(require("express")); // 报错，因为没有声明文件
// 声明文件 命名规则 *.d.ts
const app = (0, express_1.default)();
const router = express_1.default.Router();
app.use('/api', router);
router.get('/api', (req, res) => {
    res.json({
        code: 200
    });
});
app.listen(9001, () => {
    console.log('server is running');
});
