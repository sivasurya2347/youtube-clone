import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../redux/appSlice';
import { Youtube_API_Videos, Youtube_Comments } from '../utils/constants';
import MainContainer from './MainContainer';
import Comment from './Comment';
import { Google_API } from '../utils/constants';

const Watch = () => {
  const [searchParams] = useSearchParams();
  const [Item,setItem] = useState([])
  const [VideoInfo,setVideoInfo]=useState([])
  const [commentsList,setcommentsList]=useState([])
  const dispatch = useDispatch()
  // console.log(searchParams.get('v'))

  const handledata = async()=>{
    const Id_video = await fetch(Youtube_API_Videos)
    const json = await Id_video.json();
    setItem(json?.items);
    // console.log(json?.items);
  }

  const handlecomment=async()=>{
    const videoId = searchParams.get('v');
    const data = await fetch(`${Youtube_Comments}${videoId}&key=${Google_API}`);    
      const json = await data.json()
      setcommentsList(json?.items)
  }

  useEffect(()=>{
        dispatch(closeMenu())
        handlecomment()
        handledata()
  },[dispatch,searchParams])

  useEffect(() => {
    if (Item.length > 0) {
      setVideoInfo(Item.filter((item) => item.id === searchParams.get('v')));
    }
    console.log(VideoInfo[0])
  }, [Item, searchParams]);

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

        <span className=' font-bold text-2xl'>{VideoInfo[0]?.snippet?.title}</span><br></br>
        <img alt='like' src='https://img.icons8.com/?size=100&id=24816&format=png&color=000000' width={36}/>
        <span>{VideoInfo[0]?.statistics?.likeCount}</span>
        <div className=' bg-slate-300 rounded-md w-[949px] my-3'>
          <p>{VideoInfo[0]?.snippet?.description}</p>
        </div>
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

export default Watch