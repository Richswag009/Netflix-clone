import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import requests from "../../request";
import axios from "../../axios";
const Header = () => {
  const [movie, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(requests.fetchNetflixOriginals);
      setMovies(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
      return response;
    };

    fetchData();
  }, []);
  console.log(movie);

  //
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + ". . ." : str;
  }

  return (
    <header
      className=" text-white object-contain  h-[448px]"
      style={{
        backgroundSize: "cover",
        backgroundImage: ` url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "center center",
        zIndex: "99",
      }}
    >
      <Navbar />
      <div className=" mx-3 pt-12 h-[198px] md:mx-14">
        {/* title */}
        <h1 className="text-white capitalize text-5xl font-extrabold pb-2">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* buttons */}
        <div className="space-x-10 my-5  ">
          <button className="btn "> Play</button>
          <button className="btn"> My List </button>
        </div>
        {/* descriptioms */}
        <p className="w-[45rem] leading-6 h-[80px] pt-4 text-md max-w-sm">
          {truncate(movie.overview, 150)}
        </p>
      </div>

      <div className="fade"></div>
    </header>
  );
};

export default Header;
