const express = require("express");
const router = express.Router();

const { getSeriesList } = require("../controllers/seriesController");

router.route("/").get(getSeriesList);

module.exports = router;
