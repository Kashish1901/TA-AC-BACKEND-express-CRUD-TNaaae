//complete user.js with create and update

var express = require("express");
var router = express.Router();
var User = require("../models/user");

router.get("/", async (req, res) => {
  try {
    let user = await User.find(req.body);
    res.render("user.ejs", { users: ["user1", "user2", "user3 ", "user4"] });
  } catch (err) {
    res.send(err);
  }
});

//router.get("/", (req, res) => {
//res.render("user.ejs", { users: ["user1", "user2", "user3 ", "user4"] });
//});

router.get("/new", (req, res) => {
  res.render("userForm.ejs");
});

router.post("/", async (req, res) => {
  try {
    var user = await User.create(req.body);
    res.send(req.body);
  } catch (err) {
    res.send(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    var id = req.params.id;
    let user = await User.findById(id);
    res.render("singleUser.ejs", {
      user: { name: "singleUSer", email: "singleUser@gmail.com" },
    });
  } catch (err) {
    res.send(err);
  }
});

//router.get("/:id", (req, res) => {
// res.render("singleUSer.ejs", {
// user: { name: "singleUSer", email: "singleUser@gmail.com" },
//});
//});

router.get("/:id/edit", async (req, res) => {
  try {
    var id = req.params.id;
    var user = await User.findById(id);
    res.render("editUserForm", { user: user });
  } catch (err) {
    res.send(err);
  }
});

router.post("/:id", async (req, res) => {
  try {
    var id = req.params.id;
    var user = await User.findByIdAndUpdate(id, req.body);
    res.redirect("/books/ + id");
  } catch (err) {
    res.send(err);
  }
});

router.get("/:id/delete", async (req, res) => {
  try {
    var user = await User.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (err) {
    res.send(err);
  }
});
module.exports = router;
