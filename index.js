const http = require("http");
const fs = require("fs");

const readHTML = fs.readFileSync("./index.html","utf-8");
console.log(readHTML);
http.createServer((req,res)=>{
    if(req.url == "/"){
        res.write(readHTML);
        res.end();
    }
    else{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h2>404 Page Not Found</h2>")
        res.end()
    }
}).listen(5000);