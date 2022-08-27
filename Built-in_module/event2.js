const event = require('events');

const eventEmitter = new event.EventEmitter();

eventEmitter.on('addition',(a,b)=>{
   console.log('Addition:' +(a+b));
})

eventEmitter.on('multiplication',(a,b)=>{
    console.log('multiply:' +(a*b));
})

eventEmitter.emit('addition',20,10);
eventEmitter.emit('multiplication',20,10);