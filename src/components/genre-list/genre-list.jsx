import PropTypes from "prop-types";
import {connect} from "react-redux";
import React from "react";
import {ActionCreator} from "../../reducer.js";
import genres from '../../mocks/genres';


const GenreList = ({currentGenre, changeGenre}) => {
  return (
    <ul className="catalog__genres-list">
      {genres.map((availableGenre, index) => (
        <li key={availableGenre + index}
          className={`catalog__genres-item
           ${currentGenre === availableGenre ? `catalog__genres-item--active` : ``
        }`}
        >
          <a onClick={() => {
            changeGenre(availableGenre);
          }}
          href="#" className="catalog__genres-link">{availableGenre}</a>
        </li>
      ))}
    </ul>);
};

const mapStateToProps = (state) => ({
  currentGenre: state.currentGenre
});

const mapDispatchToProps = (dispatch) => ({
  changeGenre(availableGenre) {
    dispatch(ActionCreator.changeGenre(availableGenre));
    dispatch(ActionCreator.setNewFilmsList());
  }
});

GenreList.propTypes = {
  filmList: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        releaseDate: PropTypes.number.isRequired,
        imgPoster: PropTypes.string.isRequired,
        imgBg: PropTypes.string.isRequired,
        runTime: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        starring: PropTypes.array.isRequired
      }).isRequired
  ).isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
  changeGenre: PropTypes.func.isRequired,
  currentGenre: PropTypes.string.isRequired
};

export {GenreList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
