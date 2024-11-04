//create http server 

const http = require('http');
const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Welcome parth');
    res.end();
});
server.listen(8080, () => {
    console.log('Server is running on 8080');
});