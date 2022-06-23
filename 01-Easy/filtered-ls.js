/*
    INSTRUCTIONS FOR THIS PROBLEM
    *****************************
    Create a program that prints a list of files in a given directory,  filtered by the extension of the files. You will be provided a
    directory name as the first argument to your program (e.g. '/path/to/dir/') and a file extension to filter by as the second argument.

    For example, if you get 'txt' as the second argument then you will need to filter the list to only files that end with .txt. Note that the second argument will not come prefixed with a '.'.

    Keep in mind that the first arguments of your program are not the first values of the process.argv array, as the first two values are     
    reserved for system info by Node.

    The list of files should be printed to the console, one file per line.  You must use asynchronous I/O.
*/


// Create a program that prints a list of files in a given directory, filtered by the extension of the files.
// HINTS ==> First Arg is '/path/to/dir/' ==> Second Arg is file extension to filter
// HINTS ==> function callback (err, list) { /* ... */ }
//                                   ^^^^ 'list' is an array of filename strings.
// HINTS ==> You may also find node's path module helpful, particularly the extname method.

var fs = require('fs');
var path = require('path');


// process.argv[1] ==> Prints out the files and folder that im working in
// process.argv[2] ==> Prints out the File Path of the file where The Learnyounode Files are located
// process.argv[3] ==> Prints out 'md', which is a file type / extension

// HINTS ==> First Arg is '/path/to/dir/' ==> Second Arg is file extension to filter
// HINTS ==> function callback (err, list) { /* ... */ }

fs.readdir(process.argv[2], function (err, lists) {
    
    // If there are no errors, then it will loop through the process.argv[2]
    if (!err) {

        // Lists Represents the List of File Directory Paths (Plural)
        // List Represents EACH individual File Directory Path (Singular)

        lists.forEach(list => {
            // IF the Exact File Directory Path Extension (e.g .html, .md, .js) === '.' + File type / extension
            // THEN console.log(the name of the File)
            if (path.extname(list) === '.' + process.argv[3]) {
                console.log(list);
            }
        })

    } else {
        console.log(err);
    }

});