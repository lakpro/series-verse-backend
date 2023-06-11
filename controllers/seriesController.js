const seriesService = require("../services/seriesService");

exports.getSeriesList = async (req, res) => {
  try {
    const series = await seriesService.getSeries();
    res.json({ data: series.data, status: series.status });
  } catch (err) {
    res.status(500).json({ file: "controller", error: err.message });
  }
};
