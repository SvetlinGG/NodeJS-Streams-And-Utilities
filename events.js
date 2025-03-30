const events = require('events');

const messageBroker = new events.EventEmitter();

messageBroker.on('message_received', (message) => {
    console.log(`Message received: ${message}`);
    
});

messageBroker.emit('message_received', 'Hello World!');
