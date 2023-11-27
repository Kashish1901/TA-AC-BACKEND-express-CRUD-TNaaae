var express = require("express");

var router = express.Router();

router.get("/", (req, res) => {
  res.render("user.ejs", { users: ["user1", "user2", "user3 ", "user4"] });
});

router.get("/new", (req, res) => {
  res.render("userForm.ejs");
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    let user = await User.create(req.body);
    res.send("user created");
    res.render("user.ejs");
  } catch (err) {
    console.log(err);
  }
});

//router.get("/:id", (req, res) => {
//res.render("singleUSer.ejs", {
//user: { name: "singleUSer", email: "singleUser@gmail.com" },
//});
//});

router.get("/", async (req, res) => {
  try {
    let user = await User.findById(req.body);
    res.render("user.ejs");
  } catch (err) {
    res.send(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    var id = req.params.id;
    let user = await User.findById(id);
    res.render("singleUser.ejs");
  } catch (err) {
    res.send(err);
  }
});

router.put("/", (req, res) => {});

router.delete("/:id", (req, res) => {
  res.send({});
});
module.exports = router;
