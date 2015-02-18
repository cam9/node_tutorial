var filter = require("./filter");

var directory = process.argv[2];
var ext = process.argv[3];

filter(directory, ext, function(err, filteredList){
	if(err){
		console.log(err);
		return;
	}
	for(i = 0; i < filteredList.length; i++){
		console.log(filteredList[i]);
	}
});
