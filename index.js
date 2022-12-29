const express=require("express");
const app=express();
const path=require("path")

const staticPath=path.join(__dirname,"./web");

app.use(express.static(staticPath));

app.get("/index",(req,res)=>{
    res.sendFile(__dirname+"/web/index.html");
});

// app.get("",(req,res)=>{
//     res.render("index");
// });
app.listen(4000)