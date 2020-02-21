import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

const PLAYBACK_DELAY_TIMEOUT = 1000;

class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedMovieId: null,
      isPlaying: false
    };

    this.movieCardHoverHandler = this.movieCardHoverHandler.bind(this);
    this.movieCardMouseOutHandler = this.movieCardMouseOutHandler.bind(this);
  }

  movieCardHoverHandler(selectedMovieId) {
    this.setState(
        () => ({
          selectedMovieId
        }),
        this.playToggle(selectedMovieId)
    );
  }

  movieCardMouseOutHandler() {
    this.setState(() => ({
      selectedMovieId: null,
      isPlaying: false
    }));
  }

  playToggle(selectedMovieId) {
    setTimeout(() => {
      if (this.state.selectedMovieId === selectedMovieId) {
        this.setState((prevState) => ({
          isPlaying: !prevState.isPlaying
        }));
      }
    }, PLAYBACK_DELAY_TIMEOUT);
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
            isPlaying={
              this.state.selectedMovieId === index && this.state.isPlaying
            }
          />
        ))}
      </div>
    </React.Fragment>;
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
