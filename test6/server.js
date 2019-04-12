var http = require("http");
var url = require("url");

function start(_route, _config){

    function onRequest(_request, _response){
         _route.route(_config, url.parse(_request.url).pathname, _response);
    }
    http.createServer(onRequest).listen(8888);
}

exports.start = start;
