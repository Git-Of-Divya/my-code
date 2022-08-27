const event = require('events');

const eventEmitter = new event.EventEmitter();

eventEmitter.on('click',()=>{
    console.log("click event called...");
})

eventEmitter.addListener('data',()=>{
    console.log("data event handled...");
})

eventEmitter.on('finish',()=>{
    console.log("finish event handled...");
})

eventEmitter.on('error',()=>{
    console.log("It is error event...");
})

eventEmitter.on('end',()=>{
    console.log("It is end event...");
})

eventEmitter.once('Hello',()=>{
    console.log("hello event handled...");
})

eventEmitter.emit("click");
eventEmitter.emit("click");
eventEmitter.emit("data");
eventEmitter.emit("end");
eventEmitter.removeAllListeners("end");
eventEmitter.emit("end");
eventEmitter.emit("error");
eventEmitter.emit("finish");
eventEmitter.emit("Hello");
eventEmitter.emit("Hello");