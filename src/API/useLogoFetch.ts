import { useEffect, useState } from "react";

const useLogoFetch = (custom_url, randomMovieID) => {
  const [logo, setLogo] = useState("");

  const API_DETAILS = {
    api_key: "63325b79e1d8fa2774d16ddcaf15b405",
    img_url: "https://image.tmdb.org/t/p/w500/",
    genres_url: "https://api.themoviedb.org/3/genre/movie/list?api_key=",
    base_url: "https://api.themoviedb.org/3",
    api_url: "",
  };

  useEffect(() => {
    API_DETAILS.api_url =
      API_DETAILS.base_url + custom_url + API_DETAILS.api_key;
    randomMovieID &&
      fetch(API_DETAILS.api_url)
        .then((res) => res.json())
        .then((data) => {
          setLogo(API_DETAILS.img_url + data.logos[0].file_path);
        });
  }, [randomMovieID]);
  return logo;
};

export default useLogoFetch;
