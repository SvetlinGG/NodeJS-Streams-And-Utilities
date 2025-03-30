const fs = require('fs');

const readableStream = fs.createReadStream('./text.txt', {encoding: 'utf-8'});

readableStream.on('data', (chunk) => {
    console.log('-----NEW CHUNK-----');
    
    console.log(chunk);
    
});

readableStream.on('end', () => {
    console.log('Readable stream ended');
    
});
readableStream.on('close', () => {
    console.log('Readable stream closed');
    
});