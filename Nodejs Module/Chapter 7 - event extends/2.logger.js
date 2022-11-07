const EventEmitter = require('events');
// This is a calss.

// Instance creation. Object creation
const emitter = new EventEmitter();

var url = 'some url here';

function log(message) {
    // Send an HTTP request
    console.log(message);

    // // Event argument, data about the event.
    emitter.emit('messageLogged', {id: 1, url: 'some url here'});
};

module.exports = log;
// module.exports = log;
// module.exports.endPoint = url;



// ---------------------------------------------------------


const EventEmitter = require('events');
// This is a calss.

var url = 'some url here';

class Logger extends EventEmitter {
    log(message) {
        // Send an HTTP request
        console.log(message);
    
        // // Event argument, data about the event.
        this.emit('messageLogged', {id: 1, url: 'some url here'});
    };
};

module.exports = Logger;
// module.exports = log;
// module.exports.endPoint = url;