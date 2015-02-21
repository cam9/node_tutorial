/*
 *	A simple time server implementation for node.js. Accepts a timestamp as the first query string parameter "iso" and 
 *	returns either the unix time stamp in JSON, or the passed time's clock time in JSON.
 */
var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response){
	response.writeHead(200, {'Content-type': 'application/json'});
	var parsedUrl = url.parse(request.url, true);

	switch (parsedUrl.pathname) {
		case '/api/parsetime':
			var date = new Date(parsedUrl.query.iso);

			response.write(JSON.stringify(
				{
					hour: date.getHours(), 
					minute: date.getMinutes(), 
					second: date.getSeconds()
				}
			));
			break;
		case '/api/unixtime':
			var date = new Date(parsedUrl.query.iso);

			response.write(JSON.stringify(
				{
					unixtime: date.getTime()
				}
			));	
			break;
	}
	response.end();
});

server.listen(process.argv[2]);
