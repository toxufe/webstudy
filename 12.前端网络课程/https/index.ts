import https from 'https';
import fs from 'node:fs';

// http 端口 默认80
// https 端口 443 
https.createServer({
    key: fs.readFileSync('private-key.pem'),
    cert: fs.readFileSync('certificate.pem'),
    // 密码短语
    passphrase: '111111'
}, (req:any, res:any) => {
    res.writeHead(200);
    res.end('success');
}).listen(443,()=>{
    console.log('server is running on https://localhost:443');
});