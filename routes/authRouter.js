const express = require("express");
const passport = require("passport");
const router = express.Router();
var session = require("express-session");
const CircularJSON = require("circular-json");
var httpContext = require("express-http-context");
// var app = express();
// app.use(httpContext.middleware);

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
  passport.authenticate("google", {
    failureRedirect: "/",
  }),
  (req, res) => {
    // httpContext.ns.bindEmitter(req);
    // httpContext.ns.bindEmitter(res);
    // httpContext.set("user", req.user);
    // console.log("user callback", req.user);
    // res.locals.user = req.user;
    // console.log("user callback after setting res", res.locals.user);

    // req.app.set("user", req.user);

    // res.locals.user = req.user;
    // res.send(req.user);
    const name = req.user.displayName;
    const email = req.user.email;
    const image = req.user.image;
    const googleId = req.user.googleId;
    return res.redirect(
      process.env.FRONRTEND_URI +
        "/profile?name=" +
        name +
        "&email=" +
        email +
        "&image=" +
        image +
        "&googleId=" +
        googleId
    );
    // res.writeHead(302, {
    //   // Location: "http://localhost:3000/home",
    //   Location: process.env.FRONRTEND_URI + "/profile",
    //   datajson: JSON.stringify(req.user),
    // });
    // res.end();
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
      req.session.destroy(
        () => res.redirect("https://series-verse-lakpro.netlify.app/home")
        // res.redirect("http://localhost:3000/home")
      );
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
