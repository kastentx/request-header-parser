// # # # # # # # # # # # # # #
// #  Request Header Parser  #
// #    By: Nick Kasten      #
// # # # # # # # # # # # # # #

var useragent = require('useragent')
var locale2 = require('locale2')
var express = require('express')
var app = express()
var portNum = process.env.PORT || 3000

app.get('/', function(req, res) {
  res.setHeader('Content-Type', 'application/json')
  
  res.send(JSON.stringify({
    'IP Address': req.headers['x-forwarded-for'],
    'OS': useragent.parse(req.headers['user-agent']).os.toString(),
    'Language': locale2
  }))  
})
.listen(portNum, function(){
  console.log("Listening on", portNum)
});