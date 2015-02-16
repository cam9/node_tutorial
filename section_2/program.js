var sum = 0;
//Start at 2 to avoid the 0th element "node", and 1st element path/to/program
for(i = 2; i < process.argv.length; i++){
	//prefixes the '+' coherces the string in the argv array to a number
	sum+= +process.argv[i];
}
//Output
console.log(sum);
