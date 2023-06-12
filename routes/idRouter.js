const express = require("express");
const router = express.Router();

const { getSeriesFromId } = require("../controllers/idController");

// call http://localhost:3001/api/id/1399  (1399 is the :id) (for details of a particular id)
router.route("/:id").get(getSeriesFromId);

module.exports = router;
