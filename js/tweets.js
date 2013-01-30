/*
 * Retrieve the last 100 tweets of the specified user.
 * To run, execute node tweets.js
 */
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
    query:{screen_name:username, count:100}
  };
  var twitterURL = url.format(options);
  request(twitterURL, function(err, res, body){
    var tweets = JSON.parse(body);
    userResponse.render('../views/tweets.ejs', {tweets:tweets, name:username});
  });
});
app.listen(7000);
