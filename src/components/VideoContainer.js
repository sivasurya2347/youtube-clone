import React from 'react'

const VideoContainer = ({info}) => {
  // console.log(info)
  const {snippet,statistics} = info;
  const {title,thumbnails,channelTitle}=snippet;
  return (
    <div className='m-4 hover:size-72 hover:transition-transform duration-150 '>
      <img className='rounded-lg hover:cursor-pointer hover:shadow-lg'alt="video"
       src={thumbnails.medium.url}/>
        <h3 className='w-64 font-bold'>{title}</h3>
        <p>{channelTitle}</p>
        <p>{statistics.viewCount}Views</p>
    </div>
  )
}

export default VideoContainer