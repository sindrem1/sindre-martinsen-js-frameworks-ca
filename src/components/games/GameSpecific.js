import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/api";


function GameSpecific() {
  const [specific, setSpecific] = useState([]);
  const { id } = useParams();
  const gameUrl = BASE_URL + "/" + id;

  useEffect(() => {
    fetch(gameUrl)
      .then(response => response.json())
      .then(json => setSpecific(json))
      .catch(err => console.log(err))
  }, [gameUrl]);

  return (
    <div className="detailcolumn">
      <div className="detailcard">
        <img className="bigimg" src={specific.background_image} alt={specific.name} />
        <h2>{specific.name}</h2>
        <p className="desc">{specific.description_raw}</p>
        <br />
        <a className="weblink" href={specific.website}>Visit the offical game website</a>
      </div>
    </div>
  );
}

export default GameSpecific;
