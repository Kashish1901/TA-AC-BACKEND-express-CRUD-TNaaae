var express = require("express");
var path = require("path");

var school = express();

school.use(express.json);

school.set("view engine", "ejs"),
  school.set("views", path.join(__dirname, "views"));

school.get("/", (req, res) => {
  res.render("index.ejs");
});

school.get((req, res, next, err) => {
  res.send("page not found!");
});
school.listen(3000, () => {
  console.log("Server listening on port 3k");
});
