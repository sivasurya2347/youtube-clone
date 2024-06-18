import React from 'react';
import { Link } from 'react-router-dom';
// import VideoContainer from './VideoContainer';

const SearchVideo = ({ val }) => {
  if (!val || typeof val !== 'object') {
    return null;
  }

  const { snippet, id } = val;
  if (!snippet || !id) {
    return null;
  }

  const { title, thumbnails, description } = snippet;
  const videoId = id.videoId;

  return (
    <div className='my-4'>
    <Link to={`/watch?v=${videoId}`} className='flex items-center no-underline text-black'>
      <img src={thumbnails?.high?.url} alt={title} width={320} className='mr-4'/>
      <div>
        <h3 className='text-lg font-bold'>{title}</h3>
        <p className='text-gray-600'>{description}</p>
      </div>
    </Link>
    </div>

  );
};

export default SearchVideo;
