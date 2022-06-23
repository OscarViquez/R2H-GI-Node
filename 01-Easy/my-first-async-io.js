/*
    INSTRUCTIONS FOR THIS PROBLEM
    *****************************
    Create a file named my-first-async-io.js.

    Write a program that uses a single asynchronous filesystem operation    
    to read a file and print the number of newlines it contains to the      
    console (stdout), similar to running cat file | wc -l.

    The full path to the file to read will be provided as the first
    command-line argument.
*/

var fs = require('fs');

// Keywords ==> fs.readFile(), collect the value from a callback function,'utf8', String, Buffer
// HINTS: Documentaion that the HINTS referenced ==> https://github.com/maxogden/art-of-node#callbacks
// process.argv[2]   ==> is the location of the file
// fs.readFile() ==> reading the file but Async this time
// HINTS:  function callback (err, data) { /* ... */ }
// HINTS: check if an error occurred by checking whether the first argument is truthy.

fs.readFile(process.argv[2], function (err, data) {
    if (!err) {
        const bufferObjects = data.toString().split('\n');
        console.log(bufferObjects.length - 1);
    };
});