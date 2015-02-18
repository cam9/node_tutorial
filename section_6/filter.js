module.exports = function (directory, extension, callback) {
	var path = require('path');
	var fs = require('fs');
	var filteredList = [];

	fs.readdir(directory, function(err, list){
		if(err){
			return callback(err);
		}
		for(i = 0; i < list.length; i++){
			if(path.extname(list[i]) === '.' + extension){
				filteredList.push(list[i]);
			}
		}
		return callback(null, filteredList);
	});
};
