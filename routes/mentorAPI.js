import express from "express";

import {Mentor} from "../models/mentorModel.js";

const mrouter =express.Router();


// READ all mentors
mrouter.get("/",async(req,res)=>{

    const Allmentors = await Mentor.find();
    console.log("All mentors >>>",Allmentors);
    res.send(Allmentors);
})

// CREATE mentor

mrouter.post("/",async(req,res)=>{

    const addmentor=req.body ;
    console.log("new mentor entry >>>",addmentor);
  
    const mentor=new Mentor(addmentor)
 
  try{
    const newmentor =await mentor.save();
    console.log("new mentor added !!!")
    res.send(newmentor);
  }
  catch(err){
     res.status(500);
     res.send(err);
  }
  
  })

  // Asign student to mentor (update - PATCH)
//mentor name is the query
mrouter.patch('/:name', (req, res) => {


    Mentor.findOneAndUpdate(
       {name:req.params.name}, 
        {$push: {students :"new-comer"}} 
    ,{new: true}
        )
    
    .then((m) => {
        if (!m) {
            return res.status(404).send();
        }
        else{
            res.send(m);
            console.log("mentor for assigned for the student !!!",m)
        }
        
    }).catch((error) => {
        res.status(500).send(error);
        console.log("error in assigning student to mentor",error)
    })
})

//get mentor by name



mrouter.get('/:name', (req, res) => {


    Mentor.findOne({name:req.params.name})
    
    .then((m) => {
        if (!m) {
            return res.status(404).send();
        }
        else{
            res.send(m);
            console.log("mentor found !!!",m)
        }
        
    }).catch((error) => {
        res.status(500).send(error);
        console.log("error in finding mentor !!!!")
    })
})






// mrouter.patch('/:name', (req, res) => {
//     Blog.findByIdAndUpdate(req.params.id, req.body, {new: true}).then((blog) => {
//         if (!blog) {
//             return res.status(404).send();
//         }
//         res.send(blog);
//     }).catch((error) => {
//         res.status(500).send(error);
//     })
// })


export default mrouter;