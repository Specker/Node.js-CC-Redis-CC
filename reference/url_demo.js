const url = require('url');

const myUrl = new URL('http://domain.com/hello.html?id=100&status=active')

// Serialized URL
console.log(myUrl.href);
//console.log(myUrl.toString());

// Host/Domain
console.log(myUrl.host);
// Hostname (without port)
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Parameters
console.log(myUrl.searchParams);

// Add Param
myUrl.searchParams.append('abc', '123')
console.log(myUrl.searchParams);

//Loop params
myUrl.searchParams.forEach((value,name) =>(console.log(`Value of ${name} is ${value}`)));