$(document).ready(function(){
  var server = io.connect('http://localhost:7000');
  server.on('message', function(message){
    $("#messages").append("<div class='message'" + message + "</div>");
  });
});