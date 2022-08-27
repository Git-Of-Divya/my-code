const fs = require('fs');

console.log("at the top");

fs.appendFile('./abc.txt',"Node is very fast",(err)=>{
    err?console.log(err):console.log('operation success');
});

console.log("at the end");