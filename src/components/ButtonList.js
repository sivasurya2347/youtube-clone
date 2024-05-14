import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const list = ["All","React","HTML","Music","AI","Live","T-Series","DataStructures","Anirudh Ravichandran"]
  return (
    <div className='flex'>
      {list.map((list)=>
      <Button name={list}/>
      )}
    </div>
  )
}

export default ButtonList