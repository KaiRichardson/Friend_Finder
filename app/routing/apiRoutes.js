var express = require("express");
var path = require("path");
var friendList = require("../data/friends");
console.log(friendList);

// Displays all friends
exports.display = function(req, res) {
  return res.json(friendList);
};

// Adds to friends obj
exports.add = function(req, res) {
  let newFriend = req.body;

  newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();

  console.log(newFriend);

  friendList.push(newFriend);

  res.json(newFriend);
};

//   function addFriend() {

//   }

//   function findFriend() {

//       let friendScore = friends.scores;

//   }
