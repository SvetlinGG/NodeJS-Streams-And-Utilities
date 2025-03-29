
const http = require('http');

const port = 4000;

const server = http.createServer((req, res)  =>{

    res.write('Hello Server');


    res.end();

})

server.listen(port);
console.log(`Server is listen on http://localhost:${port}...`);
