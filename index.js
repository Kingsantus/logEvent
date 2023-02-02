const logEvents = require('./logEvent');
const EventEmitter = require('events');

class MyEmitter extends EventEmitter{};

//initialize the object

const myEmitter = new MyEmitter();

//add listerner for the log event

myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(() => {
    //Emit event
    myEmitter.emit('log', 'Log event emitted!');
}, 2000);