/*
 * Return a greeting message to requests sent to localhost:7000
 * To run, execute node hello-server.js
 */
var http = require('http');
http.createServer(function(request, response){
  response.writeHead(200, {'Content-type':'text/plain'});
  response.write('Hello Server!','utf8');
  response.end();
}).listen('7000','localhost');