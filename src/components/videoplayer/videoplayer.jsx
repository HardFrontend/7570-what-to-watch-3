import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      isPlaying: false
    };

    this.handleVideoPlay = this.handleVideoPlay.bind(this);
  }

  handleVideoPlay() {
    const video = this._videoRef.current;
    console.log("click video");

    if (video.paused) {
      video.play();
      this.setState({isPlaying: true});
    } else {
      video.pause();
      this.setState({isPlaying: false});
    }
  }
  componentDidMount() {
    this.setState({isPlaying: this.props.autoPlay});
  }

  render() {
    const {movie, muted, autoPlay} = this.props;

    return (
      <video
        ref={this._videoRef}
        muted={muted}
        controls
        poster={movie.imgPoster}
        width="100%"
        autoPlay={autoPlay}
        onClick={() => this.handleVideoPlay}
      >
        <source src={movie.video} />
      </video>
    );
  }


}

VideoPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  autoPlay: PropTypes.bool.isRequired
};
