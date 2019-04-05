var server = require("./server");
var router = require("./router");
var requestHandler = require("./requestHandler");

//configuration
var config = {};
config["/"] = requestHandler.start;
config["/start"] = requestHandler.start;
config["/favicon.ico"] = requestHandler.start; //
config["/upload"] = requestHandler.upload

server.start(router, config);