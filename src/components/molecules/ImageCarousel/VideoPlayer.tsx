import React from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = ({ videoLink }) => {
  const opts = {
    height: '414',
    width: '739',
    playerVars: {
      autoplay: 1,
    },
  };

  return <YouTube videoId={videoLink} opts={opts} />;
};

export default VideoPlayer;
