var fs = require('fs');
var path = require('path');

var directory = process.argv[2];
var ext = '.'+process.argv[3];

fs.readdir(directory, function(err, list){
	for(i = 0; i < list.length; i++){
		if(path.extname(list[i]) == ext){
			console.log(list[i]);
		}
	}	
});

