/*
 * Set up listeners for 'request' event emitted as a result of requests received at localhost:7000
 * To run, execute node event.js
 */
var http = require('http');
var server = http.createServer();

// multiple listeners for 'request' event
server.on('request', function(request, response){
  response.writeHead(200);
  response.write("Hello, this is dog");
  response.end();
});
server.on('request',function(request, response){
  console.log("New request is coming in...");
});

server.listen(7000);