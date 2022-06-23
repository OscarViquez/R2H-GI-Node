const fs = require('fs');

fs.readFile('planets.txt', 'utf8', (err, data) => {
    if (!err) {
        console.log(data)
    };
});