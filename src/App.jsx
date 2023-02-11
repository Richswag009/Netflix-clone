import React from "react";
import Row from "./Components/Row";
import requests from "./request";
import Header from "./Components/Header/Header";
function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <Row
        title="Netflix Originals"
        isLargeRow
        fetchURL={requests.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries " fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
