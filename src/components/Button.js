import React from 'react'

const Button = ({name}) => {
  return (
    <div className='m-4'>
        <button className='bg-gray-200 px-3 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button