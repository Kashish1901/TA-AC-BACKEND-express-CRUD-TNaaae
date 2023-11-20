var express = require("express");
var path = require("path");

var app = express();

app.use(express.json);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
