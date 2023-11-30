var express = require("express");
var mongoose = require("mongoose");
var path = require("path");

mongoose
  .connect("mongodb://127.0.0.1:27017/user-diary-2")
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err));

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/users", require("./routes/user"));

app.get("/", (req, res) => {
  res.send("hello!");
});

app.use((req, res, next) => {
  res.send("Page not found!");
});

app.use((err, req, res, next) => {
  next(err);
});
app.listen(2000, () => {
  console.log("listening on port 2k");
});
