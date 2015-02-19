/*
 *	This tutorial task was to listen to TCP connections on a given port and write the current time in a specified time data
 *	format.
 */
var net = require('net');
var time = require('strftime');

//Creates a server that calls the given callback function everytime a TCP connection is made to the server
var server = net.createServer(function (socket) {
	//The socket.end function will write the given data, and then close the client socket
	socket.end(time("%Y-%m-%d %H:%M\n"));
});

//Sets the TCP server to listen on the port passed in by the tutorial
server.listen(process.argv[2]);

