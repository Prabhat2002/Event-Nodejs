const EventEmitter=require("events");
const event=new EventEmitter();
event.on("myname",()=>{
    console.log("Prabhat Mishra")
})
event.on("myname",()=>{
    console.log("Computer Science")
})
event.emit("myname");

event.on("status",(port,data)=>{
    console.log(`My Port is ${port} and My message is ${data}`);
})
event.emit("status",200,"I Love You")