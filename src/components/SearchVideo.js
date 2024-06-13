import React from 'react';
import { Link } from 'react-router-dom';
import VideoContainer from './VideoContainer';

const SearchVideo = ({ val }) => {
  if (!val || typeof val !== 'object') {
    return null;
  }

  const { snippet, id } = val;
  if (!snippet || !id) {
    return null;
  }

  const { title, thumbnails, description } = snippet;
  const videoId = id.videoId; // Ensure correct capitalization

  return (
    <div className="search-video">
      <img src={thumbnails?.default?.url} alt={title} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <Link to={`/watch?v=${videoId}`}>
        <VideoContainer info={val}/>
      </Link>
    </div>
  );
};

export default SearchVideo;
