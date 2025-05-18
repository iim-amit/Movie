import React, { useEffect, useState } from "react";
import GlobalApi from "../services/GlobalApi";
import MovieCard from "./MovieCard";

const MovieList = ({ genreId }) => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovieByGenreId = () => {
      GlobalApi.getMovieByGenreId(genreId).then((res) => {
        console.log(res.data.results);
        setMovieList(res.data.results);
      });
    };

    getMovieByGenreId();
  }, [genreId]); // ✅ watch for genreId changes

  return (
    <div className="flex overflow-x-auto gap-8 px-3 pt-5 pb-5 scroll-smooth">
      {movieList.map((item) => (
        <MovieCard movie={item} />
      ))}
    </div>
  );
};

export default MovieList;
