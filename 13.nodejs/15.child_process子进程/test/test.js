console.log(11)

process.on("message",function(msg){
    console.log("子进程收到消息：",msg)
})