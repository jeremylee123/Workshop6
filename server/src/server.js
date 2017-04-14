var bodyParser = require('body-parser');


var express = require('express');

var app = express();

// You run the server from `server`, so `../client/build` is `server/../client/build`.
// '..' means "go up one directory", so this translates into `client/build`!
app.use(express.static('../client/build'));

app.use(bodyParser.text());



app.listen(3000, function(){
  console.log('Example app listening on port 3000');
});
