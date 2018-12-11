var db = require("../models");

module.exports = function(app) {

  // Create a new example
  app.post("/api/words/", function(req, res) {
    db.submissions.create({
      category:req.body.category,
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
      console.log(wordsdb)
    });
  });

  
    // Get by current id
    app.get("/api/words/:id", function(req, res) {
      db.submissions.findAll({
        
           where:{id:req.body.id}
          
      }).then(function(wordsdb) {
        res.json('FROM DB: ', wordsdb);
        console.log(wordsdb)
      });
    });


};



