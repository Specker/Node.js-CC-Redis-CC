const fs = require('fs');
const path = require('path');

// Create folder
// fs.mkdir(path.join(__dirname, 'test'), {}, err => {
//     if (err) throw err;
//     console.log('Folder created');
// });

// Create and write
// fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'Hello World!', err => {
//     if (err) throw err;
//     console.log('File created and writen to');
//     // Write to file
//     fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), ' Writen from inside Node.js', err => {
//         if (err) throw err;
//         console.log('Appended to file');
//     });

// });

//Read File
    fs.readFile(path.join(__dirname, 'test', 'hello.txt') ,'utf8', (err,data) =>{
        if (err) throw err;
        console.log(data);
    });




