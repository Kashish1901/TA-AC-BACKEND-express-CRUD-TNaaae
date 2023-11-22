var express = require("express");
var path = require("path");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/users", require("./routes/user"));

app.get("/", (req, res) => {
  res.send("hello!");
});

app.use("/", (req, res, next) => {
  res.send("PAge not found!");
});
app.listen(2000, () => {
  console.log("listening on port 3k");
});