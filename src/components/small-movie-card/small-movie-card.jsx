import React from "react";
import PropTypes from 'prop-types';

const MovieCard = (props) => {
  const {movie, onMovieCardClick, onMovieCardHover} = props;

  return <React.Fragment>
    <article className="small-movie-card catalog__movies-card" onMouseOver={onMovieCardHover} onClick={onMovieCardClick}>
      <div className="small-movie-card__image">
        <img src={movie.imgPoster} alt={movie.title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title" >
        <a className="small-movie-card__link" href="/dev-component">{movie.title}</a>
      </h3>
    </article>
  </React.Fragment>;
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imgPoster: PropTypes.string.isRequired
  }),
  onMovieCardClick: PropTypes.func.isRequired,
  onMovieCardHover: PropTypes.func.isRequired
};

export default MovieCard;
