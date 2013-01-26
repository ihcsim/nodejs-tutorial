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

var events = require('events');
var EventEmitter = events.EventEmitter;
var logger = new EventEmitter();
logger.on('error', function(message){
  console.log('An error has occurred: ' + message);
});
logger.on('warning', function(message){
  console.log('WARNING: ' + message);
});
logger.emit('error', 'A test error message');
logger.emit('warning', 'A test warning message');
