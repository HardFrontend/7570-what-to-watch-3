import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const VideoPlayer = ({children}) => {
  return (
    <Fragment>
      {children}
    </Fragment>
  );
};

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
  muted: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  stopOnPause: PropTypes.bool.isRequired
};

export default VideoPlayer;
