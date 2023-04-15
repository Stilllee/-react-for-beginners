import React from "react";
import Proptypes from "prop-types";

function Movie({ id, year, title, summary, poster }) {
  return <h5>{title}</h5>;
}

Movie.propTypes = {
  id: Proptypes.number.isRequired,
  year: Proptypes.number.isRequired,
  title: Proptypes.string.isRequired,
  summary: Proptypes.string.isRequired,
  poster: Proptypes.string.isRequired,
};

export default Movie;
