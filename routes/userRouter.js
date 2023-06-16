const express = require("express");
const router = express.Router();
const { ensureAuth, ensureGuest } = require("../controllers/authController");

const { getUser } = require("../controllers/userController");

// call http://localhost:3001/api/user (get user details)
router.route("/").get(getUser);

module.exports = router;
