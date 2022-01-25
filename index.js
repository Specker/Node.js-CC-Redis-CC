////////////////////////////////////////////////////////////////////////
// const Person =require('./person');

// const person = new Person('Miłosz', 'Giera', 24);

// person.greeting();
////////////////////////////////////////////////////////////////////////
// const Logger = require('./logger')

// const logger = new Logger();
// logger.on('message',(data) => console.log(`Called Listener:`, data));

// logger.log('Hello World!')
// logger.log('Sup')
// logger.log('Hemlo')
////////////////////////////////////////////////////////////////////////
const http = require('http');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    // if (req.url === '/') {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.end(content)
    //     })
    // }
    // if (req.url === '/about') {
    //     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
    //         if (err) throw err;
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.end(content)
    //     })
    // }
    // //REST
    // if (req.url === '/api/users') {
    //     const users = [
    //         { name: 'Thomas Anderson', age: 36 }, 
    //         { name: 'John Doe', age: 666 }];
    //     res.writeHead(200, { 'Content-Type': 'application/json' });
    //     res.end(JSON.stringify(users));
    // }

    // Build File Path
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    // Extension
    let extension = path.extname(filePath)

    // Initial Content Type
    let contentType = 'text/html';

    // Check extension
    switch (extension) {
        case '.js':
            contentType = 'application/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg' :
            contentType = 'image/jpg';
            break;
    }

    // ReadFile
    fs.readFile(filePath, (err, content) => {
        if (err){
            if(err.code == 'ENOENT'){
                // Page not found
                fs.readFile(path.join(__dirname,'public', '404.html'), (err, content) => {
                    if (err) throw err;
                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(content);
                })
            } else {
                // Server error
                res.writeHead(500)
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    })
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));