//Challenge 

// 1: create a folder name User
// 2: Create file named mybio.txt add data into into
// 3: Add more data means update it without overwriting
// 4: Read the data without getting the buffer data 
// 5: Rename the file to bio.txt
// 6: Now delete both the file and folder


//1
//2
const fs = require("fs");
fs.writeFileSync("mybio.txt", "Hello my name is User");
//3
fs.appendFileSync("mybio.txt", "I am a B.tech Student");
//4
// const buf_data = fs.readFileSync("mybio.txt");
// org_data = buf_data.toString();
// console.log(org_data);

const data = fs.readFileSync("bio.txt", "utf-8");
console.log(data);
//5
fs.renameSync("mybio.txt", "bio.txt");
//6
fs.unlinkSync("bio.txt");  //delete the file 
fs.rmdirSync("Challenge"); // delete the folder

