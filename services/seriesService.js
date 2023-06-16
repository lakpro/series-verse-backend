const axios = require("axios");

const getSeries = async (page) => {
  const url =
    "https://api.themoviedb.org/3/discover/tv?api_key=eaa42a85812c87f3123038ef1c44278e&include_adult=false&include_null_first_air_dates=false&language=en-US&page=" +
    page +
    "&sort_by=vote_count.desc";
  const response = await axios.get(url);
  return response;
};

module.exports = { getSeries };
