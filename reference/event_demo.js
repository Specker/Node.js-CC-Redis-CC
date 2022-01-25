const EventEmitter = require('events');

// create class
class MyEmitter extends EventEmitter {};

//Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', ()=> console.log('Event started'));

// Init event
myEmitter.emit('event')