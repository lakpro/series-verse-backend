const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("/dashboard");
  }
);

router.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Logged out");
      res.redirect("/");
    }
  });
});

// router.get("/loguot", (req, res) => {
//   req.logout((err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Logged out");
//       res.redirect("/");
//     }
//   });
// });

module.exports = router;
