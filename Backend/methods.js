const express = require('express');
const app = express();
//middleware function - post -> used for converting a response data into json
app.use(express.json());
app.listen(3000);


let users = {};

app.get('/user',(req,res)=>{
    res.send(users);
})

app.post('/user',(req,res)=>{
      console.log(req.body);
      res.json({
        message:"Data Received Successfully",
        user:req.body
      });
})

app.patch('/user',(req,res)=>{
    console.log('req.body -> ', req.body);
    let dataToBeUpdated = req.body;
    for(Key in dataToBeUpdated){
        users[key]=dataToBeUpdated[key];
    }
    res.json({
      message:"Data Updated Successfully"
    });
})

app.delete('/user',(req,res)=>{
    users={};
    res.json({
        message:"Data Is Deleted Successfully"
    })
})

app.get('/user/:id',(req,res)=>{
    console.log(res.params.id);
    res.send('user id is ')
})

app.get('/user',(req,res)=>{
    console.log(req.query);
    res.send(users);
})