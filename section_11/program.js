var http = require('http');
var fs = require('fs');

var fileStream = fs.createReadStream(process.argv[3]);

var server = http.createServer(function (request, response) {
	//ignore the request! give the same response for everything per the tutorial instruction
	fileStream.pipe(response);
});

server.listen(process.argv[2]);
