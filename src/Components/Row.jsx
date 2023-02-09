import React, { useEffect, useState } from "react";
import instance from "../axios";

const baseUrl = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await instance.get(fetchURL);
      console.log(response.data.results);
      setMovies(response.data.results);
      return response;
    }

    fetchData();
  }, [fetchURL]);
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl">{title}</h2>

      {/* container ->*/}
      <div className="grid grid-cols-1 md:flex ">
        {movies.map((item) => {
          return (
            <img
              src={`${baseUrl}${item.poster_path}`}
              alt={item.name}
              className="object-contain transition transform duration-300 ease-in-out hover:scale-110  delay-150 w-full max-h-28"
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Row;
