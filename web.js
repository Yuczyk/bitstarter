var fs = require("fs");
var filename ="index.html";
var mybuffer = new Buffer(fs.readFileSync(filename));
var mystring;
var express = require('express');
var app = express.createServer(express.logger());

mystring=mybuffer.toString();

app.get('/', function(request, response) {
  response.send(mystring);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

