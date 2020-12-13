import React from "react";
import PropTypes from "prop-types";

function Search({ handleInput }) {
  return (
    <div className="search">
      <input className="searchfield" type="text" placeholder="Search for game by name" onChange={event => handleInput(event)} />
    </div>
  );
}

Search.propTypes = {
  handleInput: PropTypes.func.isRequired,
};

export default Search;