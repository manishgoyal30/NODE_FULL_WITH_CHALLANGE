const add = (a,b) => {
    return a+b;
}
const sub = (a,b) => {
    return a-b;
}
const mult = (a,b) => {
    return a*b;
}
// //a, b are the parameters
const name = "Manish";

// //all the file s in node are in module itself

// // module.exports = add;


// // we cant do like this
// // module.exports= sub;
// // module.exports=add;


// //ffor the multiple
// make them the object

// // module.exports= sub;
// // module.exports=add;

module.exports = {add,sub,mult,name}