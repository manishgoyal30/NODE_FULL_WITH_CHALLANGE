const fs = require("fs");

const bioData = {
    name: "manish",
    age: 20,
    channel: "D.momo",
};

//1: Convert it into the JSON;
//2: have to add it in diff file;
//3: readfile;
//4: again convert back to object original;
//5: have to show in the console;


const jsonData = JSON.stringify(bioData);

fs.writeFile("json1.json", jsonData, (err) => {
    console.log("done");
});

fs.readFile("json1.json", "utf-8", (err,data) => {
    
    const orgData = JSON.parse(data);
    console.log(data);
    console.log(orgData);

    
});

