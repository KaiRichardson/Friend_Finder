var express = require("express");
var path = require("path");

// Displays home page
exports.home = function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
};

// Displays survey page
exports.survey = function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
};
