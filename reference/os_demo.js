const os = require('os');
 
//Platform
console.log(os.platform());

//Cpu arch
console.log(os.arch());

//CPU core info
console.log(os.cpus());

//Memory info
console.log(os.freemem());
console.log(os.totalmem());

//Home dir
console.log(os.homedir());

// up time
console.log(os.uptime()/3600);