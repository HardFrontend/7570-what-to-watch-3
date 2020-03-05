import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withActiveMovieCard = (Component) => {
  class WithActiveMovieCard extends PureComponent {
    constructor(props) {
      super(props);

      this._videoRef = React.createRef();

      this.state = {
        isPlaying: this.props.isPlaying
      };
    }

    componentDidMount() {
      const {movie, muted, isPlaying} = this.props;
      const video = this._videoRef.current;

      video.src = movie.videoUrl;
      video.poster = movie.imgPoster;
      video.muted = muted;
      video.controls = true;

      video.onplay = () => {
        this.setState({
          isPlaying: true
        });
      };

      video.onpause = () => {
        this.setState({
          isPlaying: false
        });
      };

      if (isPlaying) {
        video.play();
      }
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      video.onplay = null;
      video.onpause = null;
      video.src = ``;
      video.height = ``;
      video.poster = ``;
    }

    componentDidUpdate() {
      const video = this._videoRef.current;

      const {isPlaying} = this.props;

      if (isPlaying !== this.state.isPlaying) {
        this.setState({isPlaying}, () => {
          if (isPlaying) {
            video.play();
          } else {
            video.load();
          }
        });
      }
    }

    render() {
      const {movie} = this.props;
      return (
        <Component {...this.props}>
          <video ref={this._videoRef} poster={movie.imgPoster} src={movie.videoUrl} width="280" height="175" />
        </Component>
      );
    }

  }

  WithActiveMovieCard.propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      releaseDate: PropTypes.number.isRequired,
      imgPoster: PropTypes.string.isRequired,
      imgBg: PropTypes.string.isRequired,
      runTime: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      starring: PropTypes.array.isRequired,
      videoUrl: PropTypes.string.isRequired
    }),
    isPlaying: PropTypes.bool.isRequired,
    muted: PropTypes.bool.isRequired
  };

  return WithActiveMovieCard;
};

export default withActiveMovieCard;
