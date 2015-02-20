var http = require('http');
var map = require('through2-map');

var server = http.createServer(function(request, response){
	if(request.method != 'POST')
		return response.end('Only POST accepted on this server');

	request.pipe(map(function (chunk) {
		return chunk.toString().toUpperCase();
	})).pipe(response);
});

server.listen(process.argv[2]);