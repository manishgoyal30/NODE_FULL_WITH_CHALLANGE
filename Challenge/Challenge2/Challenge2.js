//Challenge 

// 1: create a folder name User
// 2: Create file named mybio.txt add data into into
// 3: Add more data means update it without overwriting
// 4: Read the data without getting the buffer data 
// 5: Rename the file to bio.txt
// 6: Now delete both the file and folder


//2
const fs = require("fs");

fs.writeFile("bio.txt", "file system by the user in async mode", (error)=>{
    console.log("file is created");
    console.log(error);  //checking for the error
});

//3
 fs.appendFile("bio.txt", "updating the data",  (error)=>{
       console.log("file is created");
 });

 //4
fs.readFile("bio.txt", "utf-8", (error, data)=>{
    console.log(data);
} );

//5
fs.rename("bio.txt", "mybio.txt", (error)=>{
    console.log("file is created");
});

//6
// fs.unlink("./Challenge2.js", (error)=>{
//     console.log("file deleted");
// })

// fs.rmdir() to delete the folder