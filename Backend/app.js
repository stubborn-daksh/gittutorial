const express = require('express');
const app = express();

app.listen(3000);

app.get('/',function(req,res){
    res.send('Hello World');
});

//use root:_dirname rather than full path
app.get('/about',function(req,res){
    res.sendFile('./Files/about.html',{root:__dirname});
});

//give full path
app.get('/header',function(req,res){
    res.sendFile('C:\Users\CCF28\Desktop\Web Deveopment\Basics\gittutorial\Backend\Files\errorPage.html');
});
//redirect
app.get('/about-us',function(req,res){
    res.redirect('/about');
});


//404 page
//when i used use method it is compulsory to use it at the end otherwise all the files which is written after this it does not run.
app.use('/error',function(req,res){
    res.status(404).sendFile('./Files/errorPage.html',{root:__dirname});
});