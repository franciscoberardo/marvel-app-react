import { useEffect, useState } from "react";
import axios from "axios";
import md5 from "md5";
import MovieList from "./MovieList";
import PropTypes from "prop-types";
import Loading from "./Loading";

function MarvelAPI({ page }) {
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;
  const privateKey = process.env.REACT_APP_PRIVATE_KEY;

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const perPage = 16;
    const offset = (page - 1) * perPage;

    const timestamp = new Date().getTime();
    const hash = md5(`${timestamp}${privateKey}${publicKey}`);

    const apiUrl = `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=${perPage}&offset=${offset}`;

    setIsLoading(true);

    axios
      .get(apiUrl)
      .then((response) => {
        const movieData = response.data.data.results;
        setMovies(movieData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsLoading(false);
      });
  }, [page, privateKey, publicKey]);

  return <div>{isLoading ? <Loading /> : <MovieList movies={movies} />}</div>;
}

MarvelAPI.propTypes = {
  page: PropTypes.number.isRequired,
};

export default MarvelAPI;
