import React, { useEffect } from "react";
import Navbar from "./Navbar";
import requests from "../../request";
import axios from "../../axios";
const Header = () => {
  const [movie, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(requests.fetchNetflixOriginals);
      console.log(response.data.results);
    };
    fetchData();
  }, []);

  return (
    <header>
      <Navbar />
      {/* title */}
      {/* buttons */}
      {/* descriptioms */}
    </header>
  );
};

export default Header;
