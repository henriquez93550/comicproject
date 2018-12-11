const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3005;
const app = express();
const cors = require('cors')

app.use(cors());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("./build"));
}

app.get("/api/data", function(req, res) {
  res.json({"data": "DATA, WE HAVE DATA!!!!"});
});

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./build/index.html"));
});



app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

module.exports = app;
//

