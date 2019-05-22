// Local dependencies
var express = require("express");
var path = require("path");
// var { body,validationResult } = require('express-validator/check');
// var { sanitizeBody } = require('express-validator/filter');

// Set up Express App
var app = express();
var PORT = process.env.PORT || 3000;
var htmlRoutes = require("./app/routing/htmlRoutes");
var apiRoutes = require("./app/routing/apiRoutes");

// Express app handles data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Home page
app.get("/home", htmlRoutes.home);

// Survey page
app.get("/survey", htmlRoutes.survey);

// api calls
app.get("/api/friends", apiRoutes.display);
app.post("/api/friends", apiRoutes.add);

// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
