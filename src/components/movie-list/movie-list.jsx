import React from "react";
import PropTypes from 'prop-types';
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import {connect} from "react-redux";

const PLAYBACK_DELAY_TIMEOUT = 1000;

const MovieList = (props) => {
  const {filmsToRender, onMovieCardClick, filmsToShowCount, activeItem, onActiveItemChange} = props;

  return (
    <div className="catalog__movies-list">
      {filmsToRender.map((movie, index) => (
        <SmallMovieCard
          key={movie.title + index}
          movie={movie}
          onMovieCardClick={() => onMovieCardClick(index)}
          /*onMovieCardHover={() => this.movieCardHoverHandler(index)}
          onMovieCardMouseOut={this.movieCardMouseOutHandler}
          isPlaying={this.state.selectedMovieId === index}*/
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  filmsToRender: state.filmsToRender
});

MovieList.propTypes = {
  filmsToRender: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        imgPoster: PropTypes.string.isRequired
      }).isRequired
  ).isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
};


export {MovieList};
export default connect(mapStateToProps)(MovieList);
