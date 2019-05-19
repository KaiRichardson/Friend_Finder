module.exports = function (app) {

    // Displays home page
    app.get('/home', function (req, res) {
        res.sendFile(path.join(__dirname, "/public/home.html"));
    });

    // Displays survey page
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "/public/survey.html"));
    });

}