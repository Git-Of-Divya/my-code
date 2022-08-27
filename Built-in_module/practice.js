const fs = require('fs');
const http = require('http');
http.createServer((request, response) => {
    // console.log(request.url);

    if (request.url == "/" || request.url == "home") {
      let data =  fs.readFileSync('index.html');
        response.end(data);
    }
    else if (request.url == "/login") {
        response.write("<h1>Login Page</h1>");
        response.end();
    }
}).listen(3000, () => {
    console.log('server running...');
})

