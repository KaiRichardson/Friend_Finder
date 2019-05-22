var friendList = require("../data/friends");

module.exports = function(app) {
  app.get("/api/tables", function(req, res) {
    res.json(friendList);
  });

  app.post("/api/tables", function(req, res) {
      friendList.push(req.body);
      res.json(true);
  });

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    friendList.length = 0;

    res.json({ ok: true });
  });
};