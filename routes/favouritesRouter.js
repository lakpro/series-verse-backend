const express = require("express");
const router = express.Router();
const {
  removeFavourites,
  setFavourites,
  getFavourites,
} = require("../controllers/favouritesController");
const { ensureAuth, ensureGuest } = require("../controllers/authController");

// call http://localhost:3001/api/favourite/set/123/1399 (123 is googleId and 1399 is the id of series to be added)
router.route("/set/:gid/:id").get(ensureAuth, setFavourites);

// call http://localhost:3001/api/favourite/remove/123/1399 (123 is googleId and 1399 is the id of series to be removed)
router.route("/remove/:gid/:id").get(ensureAuth, removeFavourites);

router.route("/get/:gid").get(ensureAuth, getFavourites);

module.exports = router;
