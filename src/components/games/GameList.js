import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constants/api";
import Search from "./GameSearch";
import GameItem from "./GameItem";


function GameList() {
  const [games, setGames] = useState([]);
  const [searchGames, setsearchGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(BASE_URL)
      .then(response => response.json())
      .then(data => {
        setGames(data.results);
        setsearchGames(data.results);
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  const makeSearchable = function (e) {
    const searchValue = e.target.value.toLowerCase();
    const filteredArray = games.filter(function (game) {
      const lowerCaseName = game.name.toLowerCase();
      if (lowerCaseName.startsWith(searchValue)) {
        return true;
      }
      return false;
    });


    setsearchGames(filteredArray);
  };

  if (loading) {
    return (
      <div className="results">
        <h3>Waiting for games to load</h3>
      </div>
    )
  }

  function Matches() {
    if (searchGames.length === 0) {
      return (
        <div className="results">
          <h3>Sorry, no matches were found</h3>
        </div>
      );
    }

    return searchGames.map(game => {
      const { id, name, background_image, rating, released } = game;

      return (
        <GameItem
          key={id}
          id={id}
          name={name}
          image={background_image}
          rating={rating}
          release={released}
        />
      );
    });
  }

  return (
    <>
      <Search handleInput={makeSearchable} />

      {Matches()}

    </>
  );
}

export default GameList;
