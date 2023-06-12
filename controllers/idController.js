const idService = require("../services/idService");

exports.getSeriesFromId = async (req, res) => {
  try {
    const series = await idService.getSeriesFromId(req.params["id"]);
    res.json({ data: series.data, status: series.status });
  } catch (err) {
    res.status(500).json({ file: "id controller", error: err.message });
  }
};
