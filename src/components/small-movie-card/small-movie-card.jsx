import React from "react";
import PropTypes from 'prop-types';

const MovieCard = (props) => {
  const {movie, onMovieCardClick, onMovieCardHover} = props;

  return (
    <article className="small-movie-card catalog__movies-card" onMouseOver={onMovieCardHover}>
      <div className="small-movie-card__image">
        <img src={movie.img} alt={movie.title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title" onClick={onMovieCardClick}>
        <a className="small-movie-card__link" href="movie-page.html">{movie.title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  }),
  onMovieCardClick: PropTypes.func.isRequired,
  onMovieCardHover: PropTypes.func.isRequired
};

export default MovieCard;