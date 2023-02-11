import React, { useEffect, useState } from "react";
import axios from "../axios";

const baseUrl = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(fetchURL);
      console.log(response.data.results);
      setMovies(response.data.results);
      return response;
    };

    fetchData();
  }, [fetchURL]);
  return (
    <div className="container mx-auto px-10">
      <h2 className="text-2xl text-white capitalize">{title}</h2>

      {/* container ->*/}
      <div className="p-8 container-snap scroll-smooth overflow-x-scroll overflow-y-none mx-auto space-x-2 flex ">
        {movies.map((movie) => {
          return (
            <img
              src={`${baseUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              className={`max-h-[150px] transition transform duration-300 ease-in-out hover:scale-110  hover:delay-150 w-full md:max-h-28 ${
                isLargeRow && "max-h-[250px] hover:scale-115"
              }`}
              key={movie.id}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Row;
