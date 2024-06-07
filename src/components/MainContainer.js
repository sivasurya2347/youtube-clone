import React, { useEffect, useState } from 'react'
// import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { Youtube_API_Videos } from '../utils/constants'
import { Link } from 'react-router-dom'

const MainContainer = () => {
  const [videos,setvideos]= useState([])

  useEffect(()=>{
    GetVideos()
  },[])

  const GetVideos= async()=>{
    const data = await fetch(Youtube_API_Videos)
    const json = await data.json();
    setvideos(json.items)
    console.log(videos)
 }

  return (
    <div >
        {/* <ButtonList/> */}
        <div className='flex flex-wrap'>
              {videos.map(videos=>
              <Link to={'/watch?v='+videos.id}>
                <VideoContainer key={videos.id} info={videos}/> 
              </Link>
              )}
        </div>
    </div>
  )
}

export default MainContainer