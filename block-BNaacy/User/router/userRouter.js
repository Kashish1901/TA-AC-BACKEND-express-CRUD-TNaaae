var express = require("express");
var router = express.Router;

router.post("/", (req, res) => {
  res.render("user.ejs");
});

module.exports = router;
