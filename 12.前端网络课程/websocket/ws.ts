import ws from 'ws'

// 创建socket服务 8080端口
const wss = new ws.Server({ port: 8080 },()=>{
    console.log('websocket server is running on ws://localhost:8080')
})

// 监听服务端的链接
wss.on('connection', (socket) => {
    // 监听客户端的消息
    console.log("客户端链接成功");

    socket.on('message', (msg) => {
        // <Buffer 32 32 32 31 31 31>
        // 流信息 toString 转成文本
        console.log('msg: ', msg.toString());
        // 点对点消息
        // socket.send("我是服务端 发送给客户端的消息："+ msg.toString());

        // 广播消息
        wss.clients.forEach(client => {
            // client.send("我是服务端 发送给客户端的消息："+ msg.toString())
            client.send(JSON.stringify({type: 'message',msg: "我是服务端 发送给客户端的消息："+ msg.toString()}))
        })

        // socket 长时间不使用 网络波动 弱网模式 会断开
        // 心跳检测 保持长连接
        // 自定义心跳检测     
        let heartInterval:any = null;
        const heartCheck = ()=>{
            // 等于open 才会发送心跳
            if(socket.readyState === ws.OPEN){
                socket.send(JSON.stringify({type: 'heart',msg:"心跳检测"}));
            }else{
                clearInterval(heartInterval);
            }
        }

        // 心跳检测
        heartInterval = setInterval(heartCheck, 5000);

    });
})