const fs = require("fs");

// fs.writeFile("read.txt", "user make the file using the async function", (error) => {
// console.log("file is created");
// console.log(error);
// });


//we pass them a function as an argument- a callback that gets called when that task complets
//the callback has an argument that tells you weather the operation completed successfully
//noe we need to say what to do when fs.writeFile has completed (even if it's nothing), and start cheking for errors.


//adding more data

// fs.appendFile("read.txt", "updated one after adding it", (error)=>{
//     console.log("task completed"); 
// });


//reading out the data without getting the buffer

fs.readFile("read.txt", "utf-8", (error,data) => {
    console.log(data);           
});
console.log("after the Data");



//difference between the asyn and sync



// fs.readFile("read.txt", "utf-8")
//     console.log(data);           
// console.log("after the Data");

