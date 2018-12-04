var db = require("../models");

module.exports = function(app) {

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.words.create(req.body).then(function(wordsdb) {
      res.json(wordsdb);
    });
  });

    // Get all examples
    app.get("/api/examples", function(req, res) {
      db.Example.findAll({}).then(function(wordsdb) {
        res.json(wordsdb);
      });
    });
};
