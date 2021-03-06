import React from "react";
import PropTypes from 'prop-types';
import MoviePlayer from "../videoplayer/videoplayer.jsx";
import withActiveMovieCard from "../../hocs/with-active-movie-card.jsx";

const ActiveMovieCard = withActiveMovieCard(MoviePlayer);

const MovieCard = (props) => {
  const {movie, onMovieCardClick, onMovieCardHover, onMovieCardMouseOut, activeCard} = props;

  return <React.Fragment>
    <article className="small-movie-card catalog__movies-card"
      onMouseOver={() => {
        onMovieCardHover(movie);
      } }

      onMouseOut={onMovieCardMouseOut}
      onClick={(e) => {
        e.preventDefault();
        onMovieCardClick(activeCard);
      }}
    >
      <div className="small-movie-card__image">

        <ActiveMovieCard isPlaying={activeCard === movie} src={movie.videoUrl} movie={movie} muted={true} />
      </div>
      <h3 className="small-movie-card__title" >
        <a className="small-movie-card__link"
          onClick={(e) => {
            e.preventDefault();
            onMovieCardClick(activeCard);
          }}
        >{movie.id} {movie.title}</a>
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
    videoUrl: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }),
  onMovieCardClick: PropTypes.func.isRequired,
  onMovieCardHover: PropTypes.func.isRequired,
  onMovieCardMouseOut: PropTypes.func.isRequired,
  activeCard: PropTypes.object.isRequired
};

export default MovieCard;
