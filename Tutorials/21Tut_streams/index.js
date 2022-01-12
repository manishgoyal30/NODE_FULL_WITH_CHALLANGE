

// const server= http.createServer();
// server.on("request", (req, res) =>{
//     var fs = require('fs');    
//     fs.readFile("input.txt", (err,data)=>{
//         if(err) return console.error(err);
//         res.end(data.toString());
//     });

// });

// server.listen(8000);



// 2nd way
// Reading from a Stream
// Creat a readble Stream
// Handle stream events___ Data, end and error




// const fs = require("fs");
// const http = require("http");

// const server= http.createServer();

// server.on("request", (req, res) =>{

//     const rstream = fs.createReadStream("input.txt");
//     rstream.on("data", (chunkdata)=>{
//         res.write(chunkdata);
//     });
//     rstream.on('end',()=>{
//         res.end();
//     });
//     rstream.on("error", (err) => {
//         console.log(err);
//         res.end("file not found");
//     })    
//     });
// server.listen(8000);




// 3rd way
//PIPELINE method 

const fs = require("fs");
const http = require("http");

const server= http.createServer();

server.on("request", (req, res) =>{

    const rstream = fs.createReadStream("input.txt");
    rstream.pipe(res);
    });
server.listen(8000);