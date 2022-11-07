const EventEmitter = require('events');
// This is a calss.

// Instance creation. Object creation
const emitter = new EventEmitter();

// Register a listener. Listener is called when the/ that event is raised.
// The function can be replaced with arrow function.
emitter.on('messageLogged', function(arg){
    console.log('Listener Called!', arg)
});

// // To raise an event message logged
// emitter.emit('messageLogged');

// // Event argument, data about the event.
emitter.emit('messageLogged', {id: 1, url: 'some url here'});