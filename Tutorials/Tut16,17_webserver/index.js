//The http.createserver() method inludes request and response parameters which is supplied by node.js

//the request object can be used to send a information about the current http request 
//e.g., url, request header, and data.

//the response object can be used to send a response for a current Http request

//if the response from the HTTP server is supposed to displayed as HTML, you should include an http header with the correct content type:



// tutorial 16
// const http = require("http");

// const server = http.createServer((req, res) => {
//     res.end("Hello from the other side"); 
// });
// server.listen(8000, () => {
//     console.log("listining to the port no 8000");
// });


// Tutotial 17
const http = require("http");
// const url = require("url");

const server = http.createServer((req, res) => {

   if(req.url=="/")
    res.end("Hello from the other side"); 

   else if(req.url=="/about")   
    res.end("Hello from the about side");

    else if(req.url=="/contact")   
    res.end("Hello from the contactus sides");

    else if(req.url=="/userapi")   
    res.end("Hello from the userapi sides");
    
   else{
    res.writeHead(404, {"Content-type": "text/html"});
    res.end("<h1>404 Eroor Page, Page doesn't Exist</h1>"); 
   }
   
});
server.listen(8000, () => {
    console.log("listining to the port no 8000");
});
