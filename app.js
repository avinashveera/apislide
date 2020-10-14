const http=require('http');
const { url } = require('inspector');

const fs=require('fs'); 
const { Console } = require('console');




const server=http.createServer((resq,res)=>{

   

    if(resq.url == '/')
    {
        console.log(__dirname+"/public/index.html")
        res.writeHead(200,{'content-type':'text/html'})
     
           fs.readFile("/home/avinash/Desktop/thapa/public/index.html",'utf-8' ,(err,data)=>{
            console.log(err);
               res.end(data)
            
        })

        res.end();
    }
    
}).listen(3000)