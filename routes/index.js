var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index");
});

router.get("/faild", function (req, res) {
  req.flash("age", 12);// req se data mil jaiye gah
  res.send("bangaya");
});

router.get("/cheakkaro", function (req, res) {
  console.log(req.flash("age")); //

  res.send("cheak karlo Backend ke terminal pe");
});
module.exports = router;
