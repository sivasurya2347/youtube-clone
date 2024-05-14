import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../redux/appSlice';

const Container = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch()
  // console.log(searchParams.get('v'))

  useEffect(()=>{
        dispatch(closeMenu())
  },[])

  return (
    <div className='mx-5 my-2'>
      <iframe width="1200"
       height="650" 
       src={"https://www.youtube.com/embed/"+searchParams.get('v')}
       title="YouTube video player" 
       frameBorder="0" 
       allow="accelerometer; 
       autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;
        web-share" 
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen></iframe>
    </div>
  )
}

export default Container