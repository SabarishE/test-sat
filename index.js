import express, { response } from "express";


const app=express();

      
app.listen(3000,console.log("server started now"));

app.get("/",(req,res)=>{
    res.send("test !!!!");
    console.log("sc");
      })


  

