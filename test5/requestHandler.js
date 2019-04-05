var exec =  require("child_process").exec;

function start(_response){

    exec("dir", function(_error, _stdout, _stderr){
        _response.writeHead(202, {"Content-Type": "text/html"});
        _response.write(_stdout);
        _response.end();
    })

};

function upload(_response){
    _response.writeHead( 202 , {"Content-Type" : "text/html"});
    _response.write("upload() requestHandler has been triggered");
    _response.end();
};

exports.start = start;
exports.upload = upload;