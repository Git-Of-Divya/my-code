var http = require('http');
var url = require('url');

http.createServer(function(req,res){
  res.write('Hello world');
  res.writeHead(200,{'content-Type':'text/html'});
   var q = url.parse(req.url,true).query;
   var text = q.year + " " +q.month;
  res.end();
}).listen(3000,(err)=>{
    err?console.log(err):console.log('start');
})