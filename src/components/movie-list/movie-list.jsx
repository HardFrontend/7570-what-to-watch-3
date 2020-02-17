import React, {PureComponent} from "react";
import PropTypes from 'prop-types';
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";

class MovieList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      selectedMovieId: null
    };

    this.movieCardHoverHandler = this.movieCardHoverHandler.bind(this);
  }

  movieCardHoverHandler(selectedMovieId) {
    this.setState({selectedMovieId});
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
