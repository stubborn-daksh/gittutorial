const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
app.listen(3000);

let users = [
    {
        "id" : 1,
        "name": "Daksh Kesarwani",
        "Age" : 21
    },
    {
        "id" : 2,
        "name": "Raju Kesarwani",
        "Age" : 22
    },
    {
        "id" : 3,
        "name": "Naksh Kesarwani",
        "Age" : 23
    }
]

const userRouter = express.Router();
const authRouter = express.Router();
app.use('/user',userRouter);
app.use('/auth',authRouter);

userRouter
.route('/')
.get(getUser)
.post(postUser)
.patch(updateUser)
.delete(deleteUser)

userRouter
.route('/id')
.get(getUserById);

authRouter
.route('/signup')
.get(getSignUp)
.post(postSignUp);

function getUserById(req,res){
    console.log(res.params.id);
    let paramId = req.params.id;
    let obj ={};
    for(let i=0; i<users.length; i++){
        if(users[i]['id']==paramId){
            obj = users[i];
        }
    }
    res.json({
        message: "Data Received",
        data:obj
    })
}


function getUser(req,res){
    res.send(users);
};

function postUser(req,res){
    console.log(req.body);
    res.json({
      message:"Data Received Successfully",
      user:req.body
    });
}

function updateUser(req,res){
    console.log('req.body -> ', req.body);
    let dataToBeUpdated = req.body;
    for(Key in dataToBeUpdated){
        users[key]=dataToBeUpdated[key];
    }
    res.json({
      message:"Data Updated Successfully"
    });
}

function deleteUser(req,res){
    users={};
    res.json({
        message:"Data Is Deleted Successfully"
    })
}


function getSignUp(req,res){
   res.sendFile('public/index.html',{root:__dirname});
}

function postSignUp(req,res){
    let obj = req.body;
    console.log(obj)
    res.json({
        message : "User signup Successfully",
        data:obj
    });
}

function middleware(req, res, next){
    
}
//code for database connection in mongodb
mongoose.set('strictQuery',true);
const db_link = 'mongodb+srv://daksh_6387:LkBSrJUve8HLKY8R@cluster0.pknelhl.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(db_link)
.then(function(db){
    //console.log(db);
    console.log('db_connected')
})
.catch(function(error){
    console.log(error);
})
// Design a schema for database
// const UserSchema = mongoose.Schema({
//     name:{
//         type : String,
//         required: true,
//     },
//     email : {
//         type : String,
//         required:true,
//         unique : true
//     },
//     password : {
//         type: String,
//         required:true,
//         min: 8
//     },
//     confirmPassword : {
//         type: String,
//         required:true,
//         min : 8
//     }
// });

// //design a model for database
// //const UserModel = mongoose.model('UserModel',UserSchema)

// (async function createUser(){
//     let user = {
//         'name' : 'Daksh',
//         'email': 'daksh@anudip.org',
//         'password': '123@$5df',
//         'confirmPassword': '123@$5df'
//     }
//     let data = await UserModel.create(user);
//     console.log(data);
// })();