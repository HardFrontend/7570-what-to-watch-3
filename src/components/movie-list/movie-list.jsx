import React from "react";
import PropTypes from 'prop-types';
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import {connect} from "react-redux";

const PLAYBACK_DELAY_TIMEOUT = 1000;

const MovieList = (props) => {
  const {filmsToRender, onMovieCardClick, filmsToShowCount, activeItem, onActiveItemChange, activeItemHandler} = props;
  const newFilmsToRender = filmsToRender.slice(0, filmsToShowCount);

  return (
    <div className="catalog__movies-list">
      {newFilmsToRender.map((movie) => (
        <SmallMovieCard
          key={movie.id}
          movie={movie}
          activeCard={activeItem}
          onMovieCardClick={() => onMovieCardClick(movie.id)}
          onMovieCardHover ={activeItemHandler}
          onMovieCardMouseOut={activeItemHandler}
          // isPlaying={this.state.selectedMovieId === index}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  filmsToRender: state.filmsToRender,
  filmsToShowCount: state.filmsToShowCount
});


MovieList.propTypes = {
  filmsToRender: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        imgPoster: PropTypes.string.isRequired
      }).isRequired
  ).isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
  filmsToShowCount: PropTypes.number.isRequired,
  activeItem: PropTypes.object.isRequired,
};


export {MovieList};
export default connect(mapStateToProps)(MovieList);
