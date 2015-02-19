/*
 * This tutorial task is to asynchronously make 3 GET requests, then print out the content of results of the 3 requests
 * in the order they were passed in through the command line, not the order the GET requests resolve.
 */

//Required libraries
var http = require('http');
var bl = require('bl');

//Number of pages we will make http GET requests to. For the tutorial problem we are gauranteed only 3
var numPages = 3;
//An array to hold the string contents we GET from the pages
var results = [];
//We will count how many pages we have successfully recieved content from
var count = 0;

//A simple function to print our results in the order they were passed, per the tutorial instruction
function printResults(){
	for(i = 0; i < numPages; i++){
		console.log(results[i]);
	}
}

//This function will make an asynchrous GET request, whose callback will fill in the appropriate index in the results array 
function getAndPlaceResult(index) {
	//Http GET async request
	http.get(process.argv[2+index], function(response){
		//Receiev the Stream object from the GET request
		//pipe its data into a BufferedList object which will concatonate all the Buffer objects read from the page
		response.pipe(bl(function(err,data){
			if(err){
				return console.error(err);
			}
			//Convert the now singular Buffer object into a String and place it in our results array
			results[index] = data.toString();
			count++;
			//If all 3 pages have successfully returned then print them out
			if(count == numPages){
				printResults();
			}
		}));
	});	
}

for(i = 0; i < numPages; i++){
	getAndPlaceResult(i);
}



