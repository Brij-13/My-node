const events = require("events");
const event = new events.EventEmitter();

event.on('click',(a,b)=>{
    var c= a+b;
    console.log("Hello Brij. This is event 1. " +c );
    event.emit('click2');
    event.emit('click3');
    event.emit('click4');
    event.emit('click5');
    event.emit('click6');
    event.emit('click7');
    event.emit('click8');
    event.emit('click9');
});


event.on('click2',()=>console.log("This is event 2"));
event.on('click3',()=>console.log("This is event 3"));
event.on('click4',()=>console.log("This is event 4"));
event.on('click5',()=>console.log("This is event 5"));
event.on('click6',()=>console.log("This is event 6"));
event.on('click7',()=>console.log("This is event 7"));
event.on('click8',()=>console.log("This is event 8"));
event.on('click9',()=>console.log("This is event 9"));

event.emit('click',7,1);