import API_DETAILS from "./apiConfig.js";

fetch(
  API_DETAILS.genres_url +
    new URLSearchParams({
      api_key: api_key,
    })
)
  .then((res) => res.json())
  .then((data) => console.log(data.results));
