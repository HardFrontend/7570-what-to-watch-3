import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

const PLAYBACK_DELAY_TIMEOUT = 1000;

class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedMovieId: null
    };

    this.movieCardHoverHandler = this.movieCardHoverHandler.bind(this);
    this.movieCardMouseOutHandler = this.movieCardMouseOutHandler.bind(this);
  }

  movieCardHoverHandler(selectedMovieId) {
    this._timeout = setTimeout(() => {
      this.setState({
        selectedMovieId
      });
    }, PLAYBACK_DELAY_TIMEOUT);
  }

  movieCardMouseOutHandler() {
    clearTimeout(this._timeout);
    this.setState(() => ({
      selectedMovieId: null
    }));
  }

  render() {
    const {filmList, onMovieCardClick} = this.props;

    return <React.Fragment>
      <div className="catalog__movies-list">
        {filmList.map((movie, index) => (
          <SmallMovieCard
            key={movie.title + index}
            movie={movie}
            onMovieCardClick={() => onMovieCardClick(index)}
            onMovieCardHover={() => this.movieCardHoverHandler(index)}
            onMovieCardMouseOut={this.movieCardMouseOutHandler}
            isPlaying={this.state.selectedMovieId === index}
          />
        ))}
      </div>
    </React.Fragment>;
  }

  componentWillUnmount() {
    clearTimeout(this._timeout);
  }
}


MovieList.propTypes = {
  filmList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      imgPoster: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
};

export default MovieList;
