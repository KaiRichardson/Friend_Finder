// Displays home page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

// Displays survey page
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});
