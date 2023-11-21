var express = require("express");
var router = express.Router();

router.get("/new", (req, res) => {
  res.send("student form");
});

router.post("/", (req, res) => {
  res.send("Create student");
});

router.get("/", (req, res) => {
  res.render("students", { lists: ["ankit", "suraj", "prashant", "ravi"] });
});

router.get("/:id", (req, res) => {
  var id = req.params.id;
  res.render("studentDetail", {
    student: { name: "rahul", email: "rahul@altcampus.io" },
  });
});
module.exports = router;
