export const GetMovie = () => {
  const API_KEY = "63325b79e1d8fa2774d16ddcaf15b405";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL = `${BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;

  const showMovies = (data) => {
    data.map((movie) => {
      
    })
  }

  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      showMovies(data.results);
    });
};
