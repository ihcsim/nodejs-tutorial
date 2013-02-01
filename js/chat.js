/*
 * A chat server
 * To run, execute node chat.js
 */
var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app).listen(7000);
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(client){
  console.log('Client connected...');
  //client.emit('message', {msg:'Welcome to chat room!'});
});