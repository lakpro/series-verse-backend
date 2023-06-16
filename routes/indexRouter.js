const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../controllers/authController");
const CircularJSON = require("circular-json");
require("dotenv").config();

router.route("/").get(ensureGuest, (req, res) => {
  // res.render("login", { layout: "login" });
  res.send("Login");
});

router.route("/dashboard").get(ensureAuth, (req, res) => {
  // res.render("dashboard");
  // res.send("Dashboard");
  // let str = CircularJSON.stringify(req.app.get("user"));
  // str = JSON.parse(str);
  // res.send(str);
  // if (!req.user) res.send("Not logged in");
  // else res.send(req.user);
  // redirect(process.env.REACT_APP_FRONTEND_URL + "/profile");
  res.writeHead(302, {
    // Location: "http://localhost:3000/home",
    Location: process.env.FRONRTEND_URI + "/profile",
    datajson: JSON.stringify(req.app.get("user")),
  });
  // res.send(req.app.get("user"));
  res.end();
  //   console.log(req.user);
});

module.exports = router;
