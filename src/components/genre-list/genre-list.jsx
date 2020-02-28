import PropTypes from "prop-types";
import {connect} from "react-redux";
import React, {PureComponent} from "react";
import {ActionCreator} from "../../reducer.js";
import {ALL_GENRES} from "../utils/genres.js";

import MovieList from "../movie-list/movie-list.jsx";


class GenreList extends PureComponent {
  constructor(props) {
    super(props);

  }

  getGenres(movies) {
    return [ALL_GENRES, ...new Set(movies.map((movie) => movie.genre))];
  }

  getMoviesByGenre(genre, filmList) {
    return genre === ALL_GENRES
      ? filmList
      : filmList.filter((movie) => movie.genre === genre);
  }

  render() {
    const {filmList, genre, changeGenre, onMovieCardClick} = this.props;
    const genders = this.getGenres(filmList);

    return <React.Fragment>
      <ul className="catalog__genres-list">
        {genders.map((availableGenre, index) => (
          <li key={availableGenre + index}
            className={`catalog__genres-item ${
              genre === availableGenre ? `catalog__genres-item--active` : ``
            }`}
          >
            <a onClick={() => {
              changeGenre(availableGenre);
            }}
            href="#" className="catalog__genres-link">{availableGenre}</a>
          </li>
        ))}
      </ul>

      <MovieList filmList={this.getMoviesByGenre(genre, filmList)} onMovieCardClick={onMovieCardClick}/>

    </React.Fragment>;
  }
}

const mapStateToProps = (state) => ({
  genre: state.genre,
  movies: state.filmList
});

const mapDispatchToProps = (dispatch) => ({
  changeGenre(availableGenre) {
    dispatch(ActionCreator.changeGenre(availableGenre));
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
  genre: PropTypes.string.isRequired
};

export {GenreList};
export default connect(mapStateToProps, mapDispatchToProps)(GenreList);
