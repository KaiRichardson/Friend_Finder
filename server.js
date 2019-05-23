// Local dependencies
var express = require("express");
var path = require("path");

// Set up Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Express app handles data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);

// Home page
// app.get("/home", htmlRoutes.home);

// // Survey page
// app.get("/survey", htmlRoutes.survey);

// // api calls
// app.get("/api/friends", apiRoutes.display);
// app.post("/api/friends", apiRoutes.add);

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});