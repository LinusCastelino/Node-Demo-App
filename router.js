function route(handlerMap, pathname, response, requestData){
	console.log('Routing request for ' + pathname);
	
	if(typeof handlerMap[pathname] === 'function'){
		handlerMap[pathname](response, requestData);
	}
	else{
		console.log('No handler defined for ' + pathname);
		response.writeHead(404,{"Content-Type":"text/plain"});
		response.write("Error 404 - Page not found !!");
		response.end();
	}
}

module.exports.route = route;