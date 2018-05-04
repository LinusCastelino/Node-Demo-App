//import custom appServer, router and handler modules
var appServer = require("./appServer");
var router = require('./router');
var handler = require('./handler');

//create request to handler mapping object
var handlerMap = {};
handlerMap["/login"] = handler.login;
handlerMap["/home"] = handler.home;

appServer.startServer(router.route, handlerMap);