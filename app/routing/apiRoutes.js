var friendList = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendList);
    });

    app.post("/api/friends", function(req, res) {
        friendList.push(req.body);

        // add current user scores together
        function getSum(total, num) {
            return total + num;
        }

        var currentUserScore = req.body.scores.reduce(getSum);

        console.log(req.body);
        console.log(currentUserScore);

        var userDif = 100;
        var userMatch = [];
        var userScore = 0;
        for (let i = 0; i < friendList.length; i++) {
            var UserScore = friendList[i].scores.reduce(getSum);

            if (UserScore < userDif) {
                userDif = UserScore;
                userMatch.push(friendList[i]);

            }
        }
        res.json(true);
    });

    app.post("/api/clear", function(req, res) {
        // Empty out the arrays of data
        friendList.length = 0;

        res.json({ ok: true });
    });
};