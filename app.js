var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/index.html');
}).configure(function() {
  app.use('/imgs', express.static(__dirname + '/imgs'));
  app.use('/css', express.static(__dirname + '/css'));
}).listen(port);
