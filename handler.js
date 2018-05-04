//import file system 'fs' and querystring module
var fs= require('fs');
var querystring = require('querystring');

function handleLogin(response){
	console.log("Handler for /login");
	
	var data = fs.readFile("loginForm.html", function(err,data){
		if(err){
			response.writeHead(500,{"Content-Type":"text/plain"});
			response.write("Error 500 - Error occurred");
			response.end();
		}
		else{
			response.writeHead(200,{"Content-Type":"text/html"});
			response.write(data.toString());
			response.end();
		}
	});
}

function handleHome(response, requestData){
	console.log("Handler for /home");
	response.writeHead(200,{"Content-Type":"text/plain"});
	var user = querystring.parse(requestData).user;
	var pwd = querystring.parse(requestData).pwd;
	if(user == 'linus' && pwd == '!QAZzaq1'){
		response.write("Welcome " + user);
	}
	else{
		response.write("User " + user + " not in authorized users list");
	}
	response.end(); 
}

//exporting to ensure that the methods are available to other modules importing it
module.exports.login = handleLogin;
module.exports.home = handleHome;