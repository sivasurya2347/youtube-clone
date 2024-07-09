import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SideBar = () => {
  const data = useSelector((store)=>store.app.isMenuOpen)

  if(data===null) return null

  //Early return 
  // if(data===false) return(
  //   <div className='mx-2'>
  //    <Link to='/'><img alt='home' className='w-18'
  //      src="https://endlessicons.com/wp-content/uploads/2012/11/home-icon-614x460.png"/></Link> 
  //      <span>Home</span>
  //      <img alt='shorts' className='w-14'
  //      src="https://logowik.com/content/uploads/images/youtube-shorts-black3609.jpg"/>
  //      <span>Shorts</span>
  //      <img alt='subscriptions' className='w-10'
  //      src='https://cdn.icon-icons.com/icons2/2248/PNG/512/youtube_subscription_icon_136007.png'/>
  //      <span>Subscriptions</span>
  //      <img alt='you' className='w-10'
  //      src='https://cdn-icons-png.flaticon.com/512/1384/1384012.png'/>
  //      <span>You</span>
  //   </div>
  // )
  return (
    <div className='shadow-lg w-32 mx-2'>
      <ul>
        <li className='font-bold'><Link to='/'>Home</Link></li>
        <li className='font-bold'>Shorts</li>
        <li className='font-bold'>Subscriptions</li>
      </ul>
      <h1 className='font-bold text-lg pt-2'>You</h1>
      <ul>
        <li>Your Channel</li>
        <li>History</li>
        <li>Playlist</li>
        <li>Your videos</li>
        <li>Watch Later</li>
      </ul>
    </div>
  )
}

export default SideBar