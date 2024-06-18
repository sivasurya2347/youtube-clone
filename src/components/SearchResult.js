import React from 'react';
import SearchVideo from './SearchVideo';
import Shimmer from './Shimmer'; // Ensure Shimmer component is imported correctly

const SearchResult = ({ videosearch }) => {
  // Check if videosearch is null or empty
  // console.log(videosearch)
  if (!videosearch || videosearch.length === 0) {
    return <Shimmer />; // Render shimmer component or loading indicator
  }

  return (
    <div>
      {videosearch.map(item => (
        <SearchVideo key={item.id.videoId} val={item} />
      ))}
    </div>
  );
};

export default SearchResult;
