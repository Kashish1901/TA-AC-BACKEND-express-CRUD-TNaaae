var express = require("express");
var router = express.Router();
var User = require("../models/user");

router.get("/", async (req, res) => {
  try {
    var users = await User.find({});

    res.render("listUsers.ejs", { users: users });
  } catch (err) {
    res.send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    var user = await User.create(req.body);
    res.redirect("/users");
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

router.put("/:id", async (req, res) => {
  try {
    var id = req.params.id;
    var user = await User.findByIdAndUpdate(id);
    res.redirect("/users");
  } catch (err) {
    res.send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    var id = req.params.id;
    var user = await User.findByIdAndDelete(id);
    res.render("user.ejs");
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
