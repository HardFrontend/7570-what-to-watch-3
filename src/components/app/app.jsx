import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {ALL_GENRES} from "../utils/genres.js";

import Main from "../main/main.jsx";
import MovieDetails from "../movie-details/movie-page-details.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedMovieId: null
    };

    this.movieCardClickHandler = this.movieCardClickHandler.bind(this);
  }

  movieCardClickHandler(selectedMovieId) {
    this.setState({selectedMovieId});
    console.log(selectedMovieId)
  }

  _renderApp() {
    const {filmPromo, filmList} = this.props;
    const {selectedMovieId} = this.state;

    if (selectedMovieId !== null) {
      return <MovieDetails movie={this.props.filmList[selectedMovieId]} />;
    }

    return <React.Fragment>
      <Main
        filmPromo={filmPromo}
        filmList={filmList}
        onMovieCardClick={this.movieCardClickHandler}
        genre={ALL_GENRES}
      />;
    </React.Fragment>;
  }

  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-component">
            <MovieDetails movie={this.props.filmList[this.state.selectedMovieId || 0]}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

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
};

export default App;
