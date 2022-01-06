//consider modules to be the same as JavaScrpit libraries. A set of functions you want to include in your applications

// node js has a set of _built-in-modules_ you can use without any futhuer installations.

// const name = "Manish";
// console.log(name);



//***********core modules**************//


//creating a new file
//  const fs = require("fs");  //method to aquire the file module
//  fs.writeFileSync("read.txt", "welcome to my channel");
 //sync system means to order and serve after completing first order then only it make the 2nd order

 // runnig the same file again, it overwrites the prevoius data
//  const fs = require("fs");
//  fs.writeFileSync("read.txt", "welcome to my Page, this is intiial Node Page");



//  //** updating the file****/
//  fs.appendFileSync("read.txt", "by the user");

// const fs = require("fs")
// const buf_data = fs.readFileSync("read.txt");
// org_data = buf_data.toString(); //converted the buf data in string data
// console.log(org_data); //printing out the string data




// //to rename the file 
// fs.renameSync("read.txt", "readwrite.txt");