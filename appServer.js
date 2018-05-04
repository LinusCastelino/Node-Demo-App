//import the 'http' module
var http = require('http');
//import the 'url' module to parse request URLs
var url = require('url');

function startServer(route, handlerMap){
	
	//create function for handling the request to the server
	var processRequest = function(request,response){
	
		/*
		response.writeHead(200,{"Content-Type":"text/plain"});    //write to the response header. 200 - OK Status. 
		response.write("Hello from application");    //html response from server
		response.end();    //close response
		*/
	
		var pathname = url.parse(request.url).pathname;
		console.log("Request received for " + pathname);

		request.setEncoding("utf8");
		
		//capture request data asynchronously
		var requestData = "";
		request.addListener("data",function(chunk){
		console.log('Input data = '+ chunk);
			requestData += chunk;
		});
		
		//route the request once all the request data has been captured
		request.addListener("end",function(){
		console.log(requestData);
			route(handlerMap, pathname, response, requestData);
		});
	}

	//create server that listens on port 8889
	http.createServer(processRequest).listen(8889);
	console.log("HTTP server started on localhost port 8889");
}

//export to ensure that the methods are available to other modules importing it
module.exports.startServer = startServer;