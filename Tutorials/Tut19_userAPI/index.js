const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

   if(req.url=="/")
    res.end("Hello from the other side"); 

   else if(req.url=="/about")   
    res.end("Hello from the about side");

    else if(req.url=="/contact")   
    res.end("Hello from the contactus sides");

    else if(req.url=="/userapi") {
        fs.readFile("userapi.json", "utf-8", (err, data)=> {
            res,writeHead(200, {"content-type":"application/json"})
            console.log(data);            
            const objData = JSON.parse(data);
            res.end(objData);            
         });     

         res.end("Hello from the userapi sides"); 
         
    }

   else{
    res.writeHead(404, {"Content-type": "text/html"});
    res.end("<h1>404 Eroor Page, Page doesn't Exist</h1>"); 
   }
   
});
server.listen(8000, () => {
    console.log("listining to the port no 8000");
});
