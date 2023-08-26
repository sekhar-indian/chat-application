const express=require('express');
const {chats}=require("./data/data")
const app=express();

app.get("/",(req, res)=>
{
    res.send("api is runing");
});
 
app.get("/api/chat",(req,res)=>
{
    res.send(chats)
});


app.listen(7000, console.log("you sucsuss fully created 7000 port"));

