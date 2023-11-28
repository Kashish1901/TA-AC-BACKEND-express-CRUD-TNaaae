var express = require("express");
var router = express.Router();
var User = require("../models/userSchema");

router.get("/", async (req, res, next) => {
  try {
    var user = await User.findById(req.body);
    res.render("user.ejs", { users: ["user1", "user2", "user3 ", "user4"] });
  } catch (err) {
    next(err);
  }
});

router.get("/new", (req, res) => {
  res.render("userForm.ejs");
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    var user = await User.create(req.body);
    res.render("user.ejs");
    //res.redirect("/users/new");
  } catch (err) {
    console.log(err);
  }
});

//router.get("/:id", (req, res) => {
//res.render("singleUSer.ejs", {
//user: { name: "singleUSer", email: "singleUser@gmail.com" },
//});
//});

router.get("/:id", async (req, res, next) => {
  try {
    var id = req.params.id;
    var user = await User.findById(id);
    res.render("singleUser.ejs", {
      users: ["user1", "user2", "user3", "user4"],
    });
  } catch (err) {
    next(err);
  }
});

router.put("/", (req, res) => {});

router.delete("/:id", (req, res) => {
  res.send({});
});
module.exports = router;
