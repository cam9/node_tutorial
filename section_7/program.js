var http = require('http');

var url = process.argv[2];

//make an HTTP GET call given the command line argument of the target url
//pass a callback that will accept the Stream that the HTTP GET command will send back to us
http.get(url, function(responseStream){
	//Since we are expecting a list of strings, lets tell the Stream to feed us "utf8" data, or strings
	responseStream.setEncoding("utf8");
	
	//Now lets set an event listener for the Stream. 
	//The stream is capable of feeding us data everytime it has it available
	//Everytime a new piece of data is available, the Stream will send it to our callback!
	//We also could listen for "error" but we assume the tutorial is being nice and helping us avoid any errors
	responseStream.on("data", function(data){
		console.log(data);
	})
	//Since assigning an event listener to our Stream returns the stream we can chain listeners like so
	.on("end", function(){
		return;
	});
});
