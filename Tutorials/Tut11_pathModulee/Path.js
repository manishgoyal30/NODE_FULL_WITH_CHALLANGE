
const path = require("path");

// console.log(path.dirname('F:/Courses/NODEJS THAPA/Tutorials/Tut11_pathModulee/Path.js'));

// console.log(path.extname('F:/Courses/NODEJS THAPA/Tutorials/Tut11_pathModulee/Path.js'));

// console.log(path.basename('F:/Courses/NODEJS THAPA/Tutorials/Tut11_pathModulee/Path.js'));

const myPath = path.parse('F:/Courses/NODEJS THAPA/Tutorials/Tut11_pathModulee/Path.js');

console.log(myPath.name);
