import React from "react";
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";

import Main from "../main/main.jsx";
import MovieDetails from "../movie-details/movie-page-details.jsx";

const App = ({filmList, currentGenre, filmPromo, chosenFilm, onMovieCardClick}) => {

  const renderApp = () => {
    if (chosenFilm) {
      return (
        <MovieDetails movie={chosenFilm} onMovieCardClick={onMovieCardClick} filmList={filmList} />
      );
    }

    return (
      <Main
        filmPromo={filmPromo}
        filmList={filmList}
        genre={currentGenre}
        onMovieCardClick={onMovieCardClick}
      />
    );
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {renderApp()}
        </Route>
        <Route exact path="/dev-movie-page">
          <MovieDetails onMovieCardClick={onMovieCardClick} filmsList={filmList} movie={chosenFilm ? chosenFilm : filmList[0]}/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};


App.propTypes = {
  filmPromo: PropTypes.shape({
    name: PropTypes.string,
    genre: PropTypes.string,
    releaseDate: PropTypes.number,
  }),
  filmList: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        imgPoster: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        releaseDate: PropTypes.number.isRequired,
        imgBg: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        runTime: PropTypes.string.isRequired,
        starring: PropTypes.array.isRequired,
        videoUrl: PropTypes.string.isRequired
      }).isRequired
  ).isRequired,
  chosenFilm: PropTypes.object,
  onMovieCardClick: PropTypes.func.isRequired,
  currentGenre: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  promoFilm: state.promoFilm,
  filmsList: state.filmsList,
  chosenFilm: state.chosenFilm,
  currentGenre: state.currentGenre
});

const mapDispatchToProps = (dispatch) => ({
  onMovieCardClick: (chosenFilm) => {
    dispatch(ActionCreator.setChosenFilm(chosenFilm));
  }
});


export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);

