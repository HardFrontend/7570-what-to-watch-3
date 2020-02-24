import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();

    this.state = {
      isPlaying: props.isPlaying
    };
  }

  componentDidMount() {
    const {movie, muted, autoPlay} = this.props;
    const video = this._videoRef.current;

    video.src = movie.videoUrl;
    video.poster = movie.imgPoster;
    video.muted = muted;
    video.autoplay = true;

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
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.onplay = null;
    video.onpause = null;
    video.src = ``;
    video.height = ``;
    video.poster = ``;
  }

  render() {
    const {movie, muted, autoPlay} = this.props;

    return (
      <video
        ref={this._videoRef}
        width="100%"
        height="auto"
        autoPlay={autoPlay}
      />
    );
  }

  componentDidUpdate() {
    const {isPlaying, stopOnPause} = this.props;
    const video = this._videoRef.current;

    if (isPlaying) {
      video.play();
    } else {
      video.pause();
      if (stopOnPause) {
        video.currentTime = 0;
        video.load();
      }
    }
  }
}

VideoPlayer.propTypes = {
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
};

export default VideoPlayer;
