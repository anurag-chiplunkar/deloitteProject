const EventEmitter = require('events');
// This is a calss.

// Instance creation. Object creation.
// If this below line is not commented, then, a new object is created. This new object will override the emitter object from teh logger.js file. Hence the emitter.on function will never be called.
const emitter = new EventEmitter();

// Register a listener. Listener is called when the/ that event is raised.
// The function can be replaced with arrow function.
emitter.on('messageLogged', function(arg){
    console.log('Listener Called!', arg)
});

// // To raise an event message logged
// emitter.emit('messageLogged');

const log = require('./2.logger');
log('HTML CSS JS');



// -------------------------------------------------------------------------


const EventEmitter = require('events');
// This is a calss.

const Logger = require('./2.logger');
const logger = new Logger();

// Register a listener. Listener is called when the/ that event is raised.
// The function can be replaced with arrow function.
logger.on('messageLogged', function(arg){
    console.log('Listener Called!', arg)
});

logger.log('HTML CSS JS');
