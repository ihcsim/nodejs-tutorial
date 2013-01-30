var url = require('url');
var request = require('request');
var express = require('express');

var app = express();
app.get('/tweets/:username',function(userRequest, userResponse){
  var username = userRequest.params.username;
  var options = {
    protocol:'http:',
    host:'api.twitter.com',
    pathname:'/1/statuses/user_timeline.json',
    query:{screen_name:username, count:10}
  };
  var twitterURL = url.format(options);
  /*  request(twitterURL, function(err, res, body){
    var tweets = JSON.parse(body);
    userResponse.render('tweets.ejs', {tweets:tweets, name:username});
    });*/
  request(twitterURL).pipe(userResponse);
});
app.listen(7000);
