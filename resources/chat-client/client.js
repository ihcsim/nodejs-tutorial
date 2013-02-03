var CHAT_SERVER = "http://localhost:7000"
$(document).ready(function(){
  var socket = io.connect(CHAT_SERVER);  
  socket.on('welcome', showGreetings);
  socket.on('message', showIncomingMessage);
  socket.on('info', showSystemInfo);

  addWaterMark();
  sendButtonOnClick();
  changeButtonOnClick();
  
  function showGreetings(msg){
    $("#title").text(msg['greetings']);
  }
 
  function showIncomingMessage(msg){
    $("#messages").append("<div class='in-message'>" + msg['msgOwner'] + ": " + msg['msgContent'] + "</div>"); 
  }

  function addWaterMark(){
    $("#outgoing-message").watermark("Enter your message here");
  }

  function sendButtonOnClick(){
    $("#send").click(function(){
      var msg = $("#outgoing-message").val();
      showOutgoingMessage(msg);
      $("#outgoing-message").val('');
      socket.emit('message', msg);
    });
  }

  function showOutgoingMessage(msg){
    $("#messages").append("<div class='out-message'>Me: " + msg + "</div>");
  }

  function showSystemInfo(msg){
    $("#messages").append("<div class='info-message'>" + msg['msgOwner'] + ": " + msg['msgContent'] + "</div>"); 
  }

  function changeButtonOnClick(){
    $("#change").click(function(){
      var username = $("#username").val();
      registerUsername(username);
    });
  }

  function registerUsername(username){
    socket.emit('user-join', username);
  }
});