import React from "react";
import PropTypes from 'prop-types';
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

const MovieList = (props) => {
  const {
    filmList = `12345`,
    onFilmCardTitleClick} = props;

  return <React.Fragment>
    <div className="catalog__movies-list">
      {filmList.map((movie, index) => (
        <SmallMovieCard
          key={movie.name + index}
          movie={movie}
        />
      ))}
    </div>
  </React.Fragment>;
};

MovieList.propTypes = {
  filmList: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired
      }).isRequired
  ).isRequired,
  onFilmCardTitleClick: PropTypes.func.isRequired,
};

export default MovieList;
