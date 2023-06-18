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
  // req.logout(function (err) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     req.session.destroy(() => res.redirect("http://localhost:3000/home"));
  //     // console.log("Logged out");
  //     // res.redirect(process.env.REACT_APP_FRONTEND_URL + "/home");
  //     // res.writeHead(302, {
  //     // Location: "http://localhost:3000/home",
  //     // Location: process.env.FRONRTEND_URI + "/home",
  //     // });
  //     // return res.redirect("/dashboard");
  //   }
  // });
  req.app.set("user", null);
  req.logout(function (err) {
    if (err) {
      console.log(err);
    } else {
      req.session.destroy(() => res.redirect("http://localhost:3000/home"));
    }
  });

  // req.session.destroy();
});

router.get("/check", (req, res) => {
  if (req.isAuthenticated()) {
    // let str = CircularJSON.stringify(req.user);
    // str = JSON.parse(str);
    res.send({ check: true });
  } else {
    res.send({ check: false });
  }
});

module.exports = router;
