const express = require("express");
const router = express.Router();

const { getSeriesList } = require("../controllers/seriesController");

// call http://localhost:3001/api/series/1 (for the list of series on homepage)
router.route("/:page").get(getSeriesList);

module.exports = router;
