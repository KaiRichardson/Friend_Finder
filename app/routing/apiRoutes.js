// Displays all friends
app.get("/api/friends", function (req, res) {
    return res.json(friends);
});

// Adds to friends obj
app.post("/api/friends", function(req, res) {
    let newFriend = req.body;
  
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newFriend);
  
    friends.push(newFriend);
  
    res.json(newFriend);
  });

  function findFriend() {
      
      let friendScore = friends.scores;
      
  }
  