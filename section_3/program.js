//The Node file system
var fs = require('fs');

//The path to our input file will be passed as the first argument (which comes after the two default arguments)
var path = process.argv[2];

//Synchronously read the file at the given path into a Buffer
var textBuffer = fs.readFileSync(path);

//Cast the Buffer object to a string so we can find how many new line characters were in the file
var text = textBuffer.toString();

//Count the new line characters and output the count
console.log(text.match(/\n/g).length);
