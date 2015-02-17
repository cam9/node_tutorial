var fs = require('fs'); var path = process.argv[2];

function callback(err, data){
	if(err != true){
		console.log(data.match(/\n/g).length);
	}
	else{
		console.log(err);
	}
}

//Call the asynchronous file read command and pass our callback function to catch the file contents when they come back
//Note: instead of using a buffer we will ask for a utf8 string so that we dont have to convert it before using the handy
//match function to count new lines 
fs.readFile(path, 'utf8', callback);


