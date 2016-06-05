// # # # # # # # # # # # # # #
// #  Request Header Parser  #
// #    By: Nick Kasten      #
// # # # # # # # # # # # # # #

var express = require('express')
var app = express()
var portNum = process.env.PORT || 3000

app.get('/', function(req, res) {
  //res.sendfile('index.html')
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify({
    'IP Address': req.headers['x-forwarded-for'],
    'info': req.headers['user-agent'] 
  }))  
})
.listen(portNum, function(){
  console.log("Listening on", portNum)
});
