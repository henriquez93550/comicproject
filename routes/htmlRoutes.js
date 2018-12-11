var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.submissions.findAll({}).then(function (wordsdb) {
      res.render("index", {
        submissions: wordsdb
      });
    });
  });



  // Load example page and pass in an example by id
  app.get("/user/:id", function (req, res) {
    db.submissions.findOne({ where: { id: req.params.id } }).then(function (wordsdb) {
      if (wordsdb.category === "Motor Skills") {
        res.render("example", {
          submissions: wordsdb
        });
      } else if (wordsdb.category === "Furry Friends") {
        res.render("example2", {
          submissions: wordsdb
        });
      } else {
        res.render("example3", {
          submissions: wordsdb
        });
      }

    })
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
//