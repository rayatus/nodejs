function start(_response){

    var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Enviar texto" />'+
    '</form>'+
    '</body>'+
    '</html>'

    _response.writeHead(202, {"Content-Type": "text/html"});
    _response.write(body);
    _response.end();

};

function upload(_response){
    _response.writeHead( 202 , {"Content-Type" : "text/html"});
    _response.write("upload() requestHandler has been triggered");
    _response.end();
};

exports.start = start;
exports.upload = upload;