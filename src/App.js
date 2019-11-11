import React, { useState, useEffect } from "react";
import axios from "axios";
import "./reset.css";
import "./App.css";

import Item from "./composants/item";
import Logo from "./images/logo.svg";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState(
    "https://api-allocine.herokuapp.com/api/movies/popular"
  );
  const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(category);
    setMovies(response.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="App">
      <header className="App-header">
        <img className="logo" src={Logo}></img>
      </header>
      <div className="menu">
        <h1
          className={
            category === "https://api-allocine.herokuapp.com/api/movies/popular"
              ? "activeTab"
              : "tab"
          }
          onClick={() =>
            setCategory("https://api-allocine.herokuapp.com/api/movies/popular")
          }
        >
          Popular Movies
        </h1>
        <h1
          className={
            category ===
            "https://api-allocine.herokuapp.com/api/movies/upcoming"
              ? "activeTab"
              : "tab"
          }
          onClick={() =>
            setCategory(
              "https://api-allocine.herokuapp.com/api/movies/upcoming"
            )
          }
        >
          Upcoming Movies
        </h1>
        <h1
          className={
            category ===
            "https://api-allocine.herokuapp.com/api/movies/top_rated"
              ? "activeTab"
              : "tab"
          }
          onClick={() =>
            setCategory(
              "https://api-allocine.herokuapp.com/api/movies/top_rated"
            )
          }
        >
          Top rated Movies
        </h1>
      </div>
      <div className="item">
        {isLoading === true ? (
          <p>Chargement en cours...</p>
        ) : (
          <ul className="container">
            {movies.map((movie, index) => {
              return (
                <Item
                  key={index}
                  image={movie.backdrop_path}
                  title={movie.title}
                  date={movie.release_date}
                  overview={movie.overview}
                ></Item>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
