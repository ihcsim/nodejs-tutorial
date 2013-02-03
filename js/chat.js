/*
 * A chat server
 * To run, execute node chat.js
 */
var express = require('express');
var app = express();
var server = require('http').createServer(app).listen(7000);
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(client){
  client.emit('welcome', {greetings:'Welcome to Chat Room!'});
});
