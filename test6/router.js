function route(_config, _pathname, _response){
    
    if ( typeof _config[_pathname] === 'function'){
        return _config[_pathname](_response);
    }else{
       _response.writeHead( 404 , {"Content-Type" : "text/html"});
       _response.write("Not found");
       _response.end();
    };
};

exports.route = route;