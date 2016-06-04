//
// Request Header Parser - FreeCodeCamp Backend Project #2

var express = require('express');
var app = express()
var portNum = process.env.PORT || 3000

app.get('/', function(req, res) {
  res.sendfile('index.html')
})
.listen(portNum, function(){
  console.log("Server listening at", portNum);
});
