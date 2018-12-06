var db = require("../models");

module.exports = function(app) {

  // Create a new example
  app.post("/api/words", function(req, res) {
    db.words.create({
      w1: req.body.word1,
      w2: req.body.word2,
      w3: req.body.word3,
      w4: req.body.word4,
      w5: req.body.word5,
      w6: req.body.word6,
      w7: req.body.word7,
      w8: req.body.word8,
      w9: req.body.word9,
      w10: req.body.word10
    }).then(function(wordsdb) {
      res.json(wordsdb);
    });
  });

    // Get all examples
    app.get("/api/words", function(req, res) {
      db.words.findAll({}).then(function(wordsdb) {
        res.json(wordsdb);
      });
    });
};
