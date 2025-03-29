const messageBroker = require('./messageBroker')

function messageReceivedHandler(message, sender){
    console.log(`${sender}: ${message}`);
    
}

function logMessage(message){
    console.log(`Message (${message}) - Logged`);
    
}

messageBroker.subscribe('message_received', messageReceivedHandler);
messageBroker.subscribe('message_received', logMessage);
messageBroker.subscribe('message_deleted', logMessage);

messageBroker.publish('message_received', 'Hi Pesho!', 'Gosho');
messageBroker.publish('message_received', 'Bye Gosho', 'Pesho');
messageBroker.publish('message_deleted', 'Invalid message');


// const http = require('http');

// const port = 4000;

// const server = http.createServer((req, res)  =>{

//     res.write('Hello Server');


//     res.end();

// })

// server.listen(port);
// console.log(`Server is listen on http://localhost:${port}...`);
