import React from 'react'

const Comment = ({list}) => {
  // console.log(list)
  return (
    <div className='my-2'>
        <p className='font-bold'>{list?.authorDisplayName}</p>
        <p className=''>{list?.textDisplay}</p>
    </div>
  )
}

export default Comment