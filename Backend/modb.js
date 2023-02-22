//const emailValidator = require('email-validator');
const bodyParser = require('body-parser');
const routes = require('routes');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());
app.listen(3001);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(routes);

//code is important to set a database connection in mongodb otherwise it gets error
mongoose.set('strictQuery',true);
const db_link = 'mongodb+srv://daksh_6387:LkBSrJUve8HLKY8R@cluster0.pknelhl.mongodb.net/?retryWrites=true&w=majority';
//connect method is used for making a connection with database
mongoose.connect(db_link)
.then(function(db){
    console.log('db_connected')
})
.catch(function(error){
    console.log(error);
})


//Design a schema for database
const UserSchema = mongoose.Schema({
    name:{
        type : String,
        required: true,
    },
    email : {
        type : String,
        required:true,
        unique : true
    },
    password : {
        type: String,
        required:true,
        minLength: 8
    },
    confirmPassword : {
        type: String,
        required:true,
        minLength : 8
    }
});

//model
const UserModel = mongoose.model('userModel',UserSchema);

//Hooks ->pre,post  remove

UserSchema.pre('save',function(){
    console.log('before saving in db');
})

UserSchema.post('save',function(){
    console.log('after saving in db');
})


//make a one user
// (async function createUser(){
//     let user = {
//         'name' : 'yash',
//         'email': 'yash@gmail.org',
//         'password': '123@$5df',
//         'confirmPassword': '123@$5df'
//     }
//     let data = await UserModel.create(user);
//     console.log(data);
// })();


//making a router and function for performing crud operation on database

const userRouter = express.Router();
const authRouter = express.Router();
app.use('/user',userRouter);
app.use('/auth',authRouter);

userRouter
.route('/')
.get(getUsers)
.post(postUsers)
.patch(updateUsers)
.delete(deleteUsers)


// authRouter
// .route('/signup')
// .post(postSignUp);

async function getUsers(req,res){
     let allUsers = await UserModel.find();
    //let allUsers = await UserModel.findOne({name:"Rajesh"});
    res.json({message:"Response of all users", data:allUsers})
};

async function postUsers(req,res){
    let dataobj = req.body;
    console.log(dataobj);
    let user = await UserModel.create(dataobj);
    console.log("backend", user);
    res.json({
      message:"Data Received Successfully",
      data:user
    });
};


async function updateUsers(req,res){
    let dataToBeUpdated = req.body;
    let user = await UserModel.findOneAndUpdate({email:"yash@gmail.org"},dataToBeUpdated)
    res.json({
      message:"Data Updated Successfully",
      data:user
    });
}

async function deleteUsers(req,res){
   let dataToBeUpdated = req.body;
   let user = await UserModel.findOneAndDelete(dataToBeUpdated);
    res.json({
        message:"Data Is Deleted Successfully",
        data:user
    })
}