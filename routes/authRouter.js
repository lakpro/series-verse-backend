const express = require("express");
const passport = require("passport");
const router = express.Router();
const CircularJSON = require("circular-json");

router.get(
  "/google",
  passport.authenticate("google", {
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
    ],
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    req.app.set("user", req.user);
    return res.redirect("/dashboard");
  }
);

router.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      console.log(err);
    } else {
      // req.session.destroy(() => res.redirect("/"));
      console.log("Logged out");
      res.redirect("/");
    }
  });
});

router.get("/check", (req, res) => {
  if (req.isAuthenticated()) {
    // let str = CircularJSON.stringify(req.user);
    // str = JSON.parse(str);
    res.send(true);
  } else {
    res.send(false);
  }
});

module.exports = router;
