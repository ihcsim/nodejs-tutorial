/*
 * A chat server. Client codes can be found in ../resources/chat-client
 * To run server, execute node chat.js
 * To run client, navigate to ../resources/chat-client/client.html from browser
 */
var DEFAULT_USERNAME = 'Guest';
var express = require('express');
var app = express();
var server = require('http').createServer(app).listen(7000);
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(client){
  client.emit('welcome', {greetings:'Welcome to Chat Room!'});
  client.on('message', broadcastMessage);
  client.on('user-join', registerUsername);

  function broadcastMessage(msg){
    client.get('username', function(err, username){
      if(!username)
        username = DEFAULT_USERNAME;
      var broadcastMsg = {
	msgOwner:username,
        msgContent:msg
      };
      client.broadcast.emit('message', broadcastMsg);
    });
  }

  function registerUsername(username){
    client.set('username', username);
    var systemInfo = {
      msgOwner:'System',
      msgContent:'Your current username is ' + username
    };
    client.emit('info', systemInfo);
  }
});
