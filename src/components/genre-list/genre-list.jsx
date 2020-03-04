import PropTypes from "prop-types";
import {connect} from "react-redux";
import React, {PureComponent} from "react";
import {ActionCreator} from "../../reducer.js";
import genres from '../../mocks/genres';


import MovieList from "../movie-list/movie-list.jsx";


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


/*  constructor(props) {
    super(props);

  }

  getGenres(movies) {
    return [ALL_GENRES, ...new Set(movies.map((movie) => movie.genre))];
  }

  getMoviesByGenre(genre, filmList) {
    return genre === ALL_GENRES
      ? filmList
      : filmList.filter((movie) => movie.genre === genre);
  }*/

/*  render() {
    const {filmList, genre, changeGenre, onMovieCardClick, currentGenre} = this.props;
    const genders = this.getGenres(filmList);*/


/* { <MovieList filmList={this.getMoviesByGenre(genre, filmList)} onMovieCardClick={onMovieCardClick}/>}*/


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
