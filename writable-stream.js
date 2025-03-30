
const fs = require('fs');

const writableStream = fs.createWriteStream('./output.txt', {encoding: 'utf-8'});

writableStream.write('Hello!\n');
writableStream.write('My name is Svetlin!\n');
writableStream.write('How are you today ?')

writableStream.end();