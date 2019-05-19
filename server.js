// Local dependencies
var express = require("express");
var path = require("path");
// var { body,validationResult } = require('express-validator/check');
// var { sanitizeBody } = require('express-validator/filter');


// Set up Express App
var app = express();
var PORT = process.env.PORT || 3000; 
var routes = require('./app/routing/htmlRoutes')(app);

// Express app handles data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', function(req, res) {
  res.write("Im listening for something...")
  res.end();
})

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
