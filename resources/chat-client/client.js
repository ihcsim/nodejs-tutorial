var CHAT_SERVER = "http://localhost:7000"
var DEFAULT_USERNAME = "Guest";
$(document).ready(function(){
  var socket = io.connect(CHAT_SERVER);  
  socket.on('welcome', showGreetings);
  socket.on('message', showIncomingMessage); 

  registerUsername(DEFAULT_USERNAME);
  addWaterMark();
  sendButtonOnClick();
  
  function showGreetings(msg){
    $("#title").text(msg['greetings']);
  }
 
  function showIncomingMessage(msg){
    $("#messages").append("<div class='in-message'>" + msg['msgOwner'] + ": " + msg['msgContent'] + "</div>");
  }

  function registerUsername(username){
    socket.emit('user-join', username);
  }

  function addWaterMark(){
    $("#outgoing-message").watermark("Enter your message here");
  }

  function sendButtonOnClick(){
    $("#send").click(function(){
      var msg = $("#outgoing-message").val();
      showOutgoingMessage(msg);
      socket.emit('message', msg);
    });
  }

  function showOutgoingMessage(msg){
    $("#messages").append("<div class='out-message'>Me: " + msg + "</div>");
  }
});