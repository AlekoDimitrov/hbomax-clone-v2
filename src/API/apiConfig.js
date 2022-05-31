const API_DETAILS = {
  api_key: "63325b79e1d8fa2774d16ddcaf15b405",
  img_url: "https://image.tmdb.org/t/p/w500",
  genres_url: "https://api.themoviedb.org/3/genre/movie/list?api_key=",
  base_url: "https://api.themoviedb.org/3",
  api_url: "",
};
API_DETAILS.api_url =
  API_DETAILS.base_url +
  "/discover/movie?sort_by=popularity.desc&api_key=" +
  API_DETAILS.api_key;

export default API_DETAILS;
