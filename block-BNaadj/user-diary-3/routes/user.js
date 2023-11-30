var express = require("express");
var router = express.Router();
var User = require("../models/userSchema");

router.get("/", async (req, res) => {
  try {
    var users = await User.find({});
    res.render("usersList.ejs", { users: users });
  } catch (err) {
    res.send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    var user = await User.create(req.body);
    res.render("userDetailsForm.ejs");
  } catch (err) {
    res.send(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    var id = req.params.id;
    var user = await User.findById(id);
    res.render("singleUser.ejs", { user });
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
