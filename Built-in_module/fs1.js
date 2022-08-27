const fs = require('fs');
console.log("at the top");
fs.writeFile('./data.txt',"Node.js  source",(err)=>{
    err?console.log(err):console.log('operation success');
});
console.log("at the end");