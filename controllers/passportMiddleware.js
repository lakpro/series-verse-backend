const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const User = require("../database/Users");

module.exports = function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK,
      },
      async (accessToken, refreshToken, profile, cb) => {
        console.log(profile);
        const newUser = {
          googleId: profile.id,
          displayName: profile.displayName,
          firstName: profile.name.givenName,
          lastName: profile.name.familyName,
          image: profile.photos[0].value,
        };

        try {
          //   let users = await User.find();
          //   let user;
          //   users.forEach(function (u) {
          //     if (u.googleId === profile.id) {
          //       user = user;
          //     }
          //   });

          let user = await User.findOne({ googleId: profile.id });

          if (user) {
            cb(null, user);
          } else {
            user = await User.create(newUser);
            cb(null, user);
          }
        } catch (err) {
          console.error(err);
        }
      }
    )
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });

  passport.deserializeUser((id, cb, next) => {
    let user = User.findById(id);
    next(null, user);
  });
};
