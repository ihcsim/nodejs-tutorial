/*
 * Write a file to a HTTP response stream.
 * To run, execute node stream.js
 */
var fs = require('fs');
var file = fs.createReadStream('../resources/index.html', {encoding:'utf8'});

var http = require('http');
http.createServer(function(request, response){
  response.writeHead('200');
  file.pipe(response);
  response.end();
}).listen('7000', 'localhost');