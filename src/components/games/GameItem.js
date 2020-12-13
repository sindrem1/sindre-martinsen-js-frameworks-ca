import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function GameItem({ id, name, image, rating, release }) {
  return (
    <div className="gamecolumn">
      <div className="card">
        <img className="cardimg" src={image} alt={name} />
        <h2>{name}</h2>
        <p>Rating: {rating}</p>
        <p>Released: {release}</p>
        <br />
        <Link to={"game/" + id} role="link">
          <button>More Details</button>
        </Link>
      </div>
    </div>
  );
}

GameItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  release: PropTypes.string.isRequired
};

export default GameItem;
