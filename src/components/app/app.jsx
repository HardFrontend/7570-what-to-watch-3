import React, {PureComponent} from "react";
import PropTypes from 'prop-types';

import Main from "../main/main.jsx";

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
  }

  render() {
    const {film, filmList} = this.props;

    return <React.Fragment>
      <Main
        film={film}
        filmList={filmList}
        onMovieCardClick={this.movieCardClickHandler}
      />;
    </React.Fragment>;
  }
}

App.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string,
    genre: PropTypes.string,
    releaseDate: PropTypes.number,
  }),
  filmList: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired
      }).isRequired
  ).isRequired,
};

export default App;
