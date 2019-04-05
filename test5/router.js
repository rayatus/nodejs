function route(_config, _pathname){
    
    if ( typeof _config[_pathname] === 'function'){
        return _config[_pathname]();
    }else{
        return "404 Not found";
    };
};

exports.route = route;