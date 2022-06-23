/*  INSTRUCTIONS FOR THIS PROBLEM
    *****************************
    Write a program that uses a single synchronous filesystem operation to  
    read a file and print the number of newlines (\n) it contains to the  
    console (stdout), similar to running cat file | wc -l.  
    
    The full path to the file to read will be provided as the first  
    command-line argument (i.e., process.argv[2]). You do not need to make  
    your own test file.  
*/

// Keywords: Buffers, fs Modules, readFileSync, process.argv, toStrings(), split(), /n <== I need research on that again
const fs = require('fs');

// So Im trying to read data from a file that are apparently is somewhere
// =============================================================
// process.argv[2]   ==> is the location of the file
// fs.readFileSync() ==> reading the file
// bufferObjects     ==> Outputs the buffers of the file
const bufferObjects = fs.readFileSync(process.argv[2]);

// converting that bufferObjects in to strings
// then converting each string into an array, using an expression to seperate them.
// =============================================================
const bufferObjectResult = bufferObjects.toString().split('\n');

// Console logging the results by adding the .length to find the length of the array, then do - 1 since arrays and // // strings always start at 0, not 1 when counting.
// =============================================================
console.log(bufferObjectResult.length - 1);





