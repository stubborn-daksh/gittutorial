//import http module

const http = require('http');
const fs = require('fs');
const _=require('lodash');

const server = http.createServer((req,res)=>{
    console.log("request has been made from browser to server");
    // console.log(req);
    // console.log(req.method);
    // console.log(req.url);

    // res.setHeader('Content-Type','text/plain');
    // res.write('Hello Daksh');
    // res.setHeader('Content-Type','text/html');
    // res.write('<h1>Hello Daksh</h1>');
    // let num=_.random(0,20);
    // console.log(num);
    let path = './Files';
    switch(req.url){
        case '/':
            path+='/index.html'
            res.statusCode = 200;
            break;
        case '/about':
             path+='/about.html'
            res.statusCode = 200;
            break;
        case '/about-me':
               res.statusCode = 301;
               res.setHeader('Location','/about')
               res.end();
               break;
       default:
            path+='/errorPage.html'
            res.statusCode = 404;
    }

     fs.readFile(path,(err, fileData) => {
        if(err){
            console.log(err);
        } else {
            // res.write(fileData);//if you have only file then  no need to write a res.write method call your file on end method.
            res.end(fileData);
        }
     })

    // res.end();
})


server.listen(3000,'localhost',()=>{
    console.log('server is listening on port 3000');
})