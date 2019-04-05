var http = require("http");

function start(){

    function onRequest(_request, _response){
        _response.writeHead( 200, {"Content-Type" : "text/html"});
        _response.write("Hello world");
        _response.end();
        
    }
    http.createServer(onRequest).listen(8888);
}

exports.start = start;
