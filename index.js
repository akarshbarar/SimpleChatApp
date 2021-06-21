const express=require("express");
const app=express();
const http=require("http");
const server=http.createServer(app);
const {Server}=require("socket.io");
const io=new Server(server);

app.get('/',(req,res)=>{
   res.sendFile(__dirname+'/index.html');
})

server.listen(3000,()=>{
    console.log(`server runnning at 3000`);
})


io.on('connection',(socket)=>{
    console.log("A User connected");

    socket.on('chatMessage',(message)=>{
        console.log("meesage",message);
        io.emit("chatMessage",message);
    })
    socket.on("disconnect",()=>{
        console.log("A User Disconnected");
    })
})