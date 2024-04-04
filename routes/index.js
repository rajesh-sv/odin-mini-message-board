var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Void Walker",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "DreamStealer",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Message Board", messages: messages });
});

module.exports = router;
