const path = require('path');

//File name
console.log(path.basename(__filename));
//Directory name == __dirname
console.log(path.dirname(__filename));

//File extension
console.log(path.extname(__filename));

//Create path object
console.log(path.parse(__filename));

// Concatner paths
console.log(path.join(__dirname, 'test','hello.html'));