var CHAT_SERVER = "http://localhost:7000'"
$(document).ready(function(){
  var server = io.connect(CHAT_SERVER);
  
  server.on('welcome', function(msg){
    $("#title").text(msg['greetings']);
  });
});