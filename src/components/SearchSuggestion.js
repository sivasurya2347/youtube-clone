import React from 'react'

const SearchSuggestion = ({search,suggestion}) => {

  const handlesearchthing = (title)=>{
    console.log('Title passed to handlesearchthing:', title);
    suggestion(title);
  }
    const {snippet} =search;
    const {title} = snippet
  return (
    <div className='font-bold my-2 flex flex-wrap rounded-lg'>
      <img className='mx-3'
      width={25} alt='search'
      src='https://img.icons8.com/?size=100&id=59878&format=png&color=000000'/>
       <p className='cursor-pointer' onClick={() => handlesearchthing(title)}>
        {title}
      </p>
    </div>
  )
}

export default SearchSuggestion