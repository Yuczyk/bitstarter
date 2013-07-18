var fs = require("fs");
var express=requre("express");

var app=expess.createServer(express.logger());
var filename ="index.html";
var mybuffer = new Buffer(fs.readFileSync(filename,"utf8"));
var mystring;

mystring=mybuffer.toString();

app.get('/', function(request, response) {
  response.send(mystring);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

