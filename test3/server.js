var http = require("http");

http.createServer(function(request, response){

    console.log("New request");

    response.writeHead( 200, {"Content-Type" : "text/html"});
    response.write("Hello world");
    response.end();
    
}).listen(8888);

console.log("End of server.js script");