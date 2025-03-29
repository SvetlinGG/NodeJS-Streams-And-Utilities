const messageBroker = require('./messageBroker')

function messageReceivedHandler(){
    console.log('Message is received');
    
}

function logMessage(){
    console.log('Message is logged!');
    
}

messageBroker.subscribe('message_received', messageReceivedHandler);
messageBroker.subscribe('message_received', logMessage);
messageBroker.subscribe('message_deleted', logMessage);

messageBroker.publish('message_received');
messageBroker.publish('message_received');
messageBroker.publish('message_deleted');


// const http = require('http');

// const port = 4000;

// const server = http.createServer((req, res)  =>{

//     res.write('Hello Server');


//     res.end();

// })

// server.listen(port);
// console.log(`Server is listen on http://localhost:${port}...`);
