var express = require("express");
var router = express.Router();
var User = require("../models/user");

router.get("/", (req, res) => {
  res.render("user.ejs", { users: ["user1", "user2", "user3 ", "user4"] });
});

router.get("/new", (req, res) => {
  res.render("userForm.ejs");
});

router.post("/", (req, res) => {
  User.create({});
});

router.get("/:id", (req, res) => {
  res.render("singleUSer.ejs", {
    user: { name: "singleUSer", email: "singleUser@gmail.com" },
  });
});

router.put("/", (req, res) => {});

router.delete("/:id", (req, res) => {
  res.send({});
});
module.exports = router;