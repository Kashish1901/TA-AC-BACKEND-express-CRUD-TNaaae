var express = require("express");
var mongoose = require("mongoose");
var path = require("path");

mongoose
  .connect("mongodb://127.0.0.1:27017/User")
  .then(() => console.log("Connected!"))
  .catch((err) => console.log(err));

var app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", require("./router/index"));
app.use("/users", require("./router/userRouter"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.status(404).send("Page not found");
});

app.use((err, req, res, next) => {
  next(err);
});
app.listen(3000, () => {
  console.log("server listening on port 3k");
});
