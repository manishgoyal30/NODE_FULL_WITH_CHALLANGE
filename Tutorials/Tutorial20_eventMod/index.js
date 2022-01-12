// Event Module

// nodejs has a built module called events where you can create, fire and listen for your own events



// example-1: Registration for the event to be fired only one time using 

//creating the class
// const { CANCELLED } = require("dns");
// const EventEmitter = require("events");
// const event = new EventEmitter();

// event.on("sayMyname", ()=> {
//     console.log("Your name is Manish");
// });
// event.emit("sayMyname");


// the concept is quite simple: emitter objects emit named evenets cause previuously registered listerns to be CANCELLED. so, an emitter object basically has two main features:

// emitting name events
// Registring and unregistering listerner functions.



//example 2

// const { CANCELLED } = require("dns");
// const EventEmitter = require("events");
// const event = new EventEmitter();

// event.on("sayMyname", ()=> {
//     console.log("Your name is Manish");
// });
// event.on("sayMyname", ()=> {
//     console.log("Your name is Manish");
// });
// event.on("sayMyname", ()=> {
//     console.log("Your name is Manish");
// });
// event.on("sayMyname", ()=> {
//     console.log("Your name is Manish");
// });

// event.emit("sayMyname");




// Example 3

const { CANCELLED } = require("dns");
const EventEmitter = require("events");
const event = new EventEmitter();

event.on("checkPage", (sc, msg)=>{
    console.log(`status code is ${sc} and the page is ${msg}`);
});

event.emit("checkPage", 200, "ok");

