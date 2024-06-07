import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../redux/appSlice';
import { Youtube_Comments } from '../utils/constants';
import MainContainer from './MainContainer';
import Comment from './Comment';
import { Google_API } from '../utils/constants';

const Container = () => {
  const [searchParams] = useSearchParams();
  const [commentsList,setcommentsList]=useState([])
  const dispatch = useDispatch()
  // console.log(searchParams.get('v'))
  const handledata=async()=>{
    const videoId = searchParams.get('v');
    const data = await fetch(`${Youtube_Comments}${videoId}&key=${Google_API}`);    
      const json = await data.json()
      setcommentsList(json?.items)
  }

  useEffect(()=>{
        dispatch(closeMenu())
        handledata()
  },[dispatch,searchParams])

  return (
    <div className='mx-4'>
    <div className=''>
      <iframe width="950"
       height="550" 
       src={"https://www.youtube.com/embed/"+searchParams.get('v')}
       title="YouTube video player" 
       frameBorder="0" 
       allow="accelerometer; 
       autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;
        web-share" 
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen></iframe>
    </div>
    <div className='flex w-full max-w-screen-lg'>
     <div className='w-[949px]'>
         {
          commentsList.map(list =>
         <Comment key={list?.id} list={list?.snippet?.topLevelComment?.snippet}/>
        )}
      </div>
      <div className=' w-[0.666667%]'>
           <MainContainer/>
      </div>
    </div>
    </div>
  )
}

export default Container