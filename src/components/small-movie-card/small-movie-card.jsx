import React from "react";
import PropTypes from 'prop-types';
import MoviePlayer from "../videoplayer/videoplayer.jsx";

const MovieCard = (props) => {
  const {movie, onMovieCardClick, onMovieCardHover, isPlaying, onMovieCardMouseOut} = props;

  return <React.Fragment>
    <article className="small-movie-card catalog__movies-card" onMouseOver={onMovieCardHover} onMouseOut={onMovieCardMouseOut} >
      <div className="small-movie-card__image">
        {!isPlaying && (
          <img src={movie.imgPoster} alt={movie.title} width="280" height="175" />
        )}
        {isPlaying && (
          <MoviePlayer src={movie.videoUrl} movie={movie} muted={true} autoPlay={true} />
        )}
      </div>
      <h3 className="small-movie-card__title" >
        <a className="small-movie-card__link" onClick={onMovieCardClick}>{movie.title}</a>
      </h3>
    </article>
  </React.Fragment>;
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.number.isRequired,
    imgPoster: PropTypes.string.isRequired,
    imgBg: PropTypes.string.isRequired,
    runTime: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.array.isRequired,
    videoUrl: PropTypes.string.isRequired
  }),
  onMovieCardClick: PropTypes.func.isRequired,
  onMovieCardHover: PropTypes.func.isRequired,
  onMovieCardMouseOut: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool.isRequired
};

export default MovieCard;
