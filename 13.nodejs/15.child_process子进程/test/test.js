console.log(11)

process.on("message",function(msg){
    console.log("子进程收到消息：",msg)
})

process.send("我是子进程，收到请回答")