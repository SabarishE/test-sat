import express, { response } from "express";

import mongoose from "mongoose";

import mrouter from "./routes/mentorAPI.js";

// import srouter from "./routes/studentAPI.js";

const PORT = process.env.PORT || 5000;

const app=express();

app.use(express.json());
// testing
app.get("/",(req,res)=>{res.send("hi chieffffff lets begin again!!!!")});

app.listen(PORT,console.log("server started"));



// mongoose testing starts here

// mongodb://localhost/userlist
// new url from mongo atlas (cluster > connect > connect your application > copy string)
// change password and change database name to userlist in last block of new url, after slash

 const url="mongodb+srv://SabarishE:sabarishe@cluster0.eeimf.mongodb.net/msportal"
// const url= process.env.MONGODB_URI || "mongodb://localhost/msportal";

mongoose.connect(url,{useNewUrlParser:true});

const con=mongoose.connection;
  // to check mongoDB is connected or not
con.on("open",()=>console.log("MongoDB in connected"));


// router is used to access the DB

app.get("/",(req,res)=>{
res.send("heroku test");
console.log("Heroku to be deployed");
  })

app.use("/mentors",mrouter);
// app.use("/students",srouter);
// app.use("/users",router);
  

