const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../controllers/authController");

router.route("/").get(ensureGuest, (req, res) => {
  // res.render("login", { layout: "login" });
  res.send("Login");
});

router.route("/dashboard").get(ensureAuth, (req, res) => {
  // res.render("dashboard");
  res.send("Dashboard");
});

module.exports = router;
