var express = require("express");
var path = require("path");

var app = express();

app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/students", require("./routes/students"));

app.listen(3000, () => {
  console.log("Server listening on port 3k");
});
