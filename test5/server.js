var http = require("http");
var url = require("url");

function start(_route, _config){

    function onRequest(_request, _response){

        var content = _route.route(_config, url.parse(_request.url).pathname);

        _response.writeHead( 200, {"Content-Type" : "text/html"});
        _response.write(content);
        _response.end();
        
    }
    http.createServer(onRequest).listen(8888);
}

exports.start = start;
