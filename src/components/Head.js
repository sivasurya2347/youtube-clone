import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../redux/appSlice';
import { Youtube_API_Search, Google_API } from '../utils/constants';
import SearchSuggestion from './SearchSuggestion';
import { Link } from 'react-router-dom';
import _ from 'lodash';

const Head = ({onSearch}) => {
  const dispatch = useDispatch();
  const [searchSuggestion, setSearchSuggestion] = useState('');
  const [suggestionData, setSuggestionData] = useState([]);
  const [searchAccordian, setSearchAccordian] = useState(false);
 

  const handler = () => {
    dispatch(toggleMenu());
  };

  const SearchThings = async () => {
    try {
      const response = await fetch(`${Youtube_API_Search}${searchSuggestion}&type=video&key=${Google_API}`);
      const json = await response.json();
      onSearch(json?.items || []);
      setSearchAccordian(false);
    } catch (error) {
      console.error('Error fetching video search results:', error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`${Youtube_API_Search}${searchSuggestion}&key=${Google_API}`);
      const json = await response.json();
      if (json?.items) {
        setSuggestionData(json.items);
        setSearchAccordian(true);
      } else {
        setSuggestionData([]);
        setSearchAccordian(false);
      }
    } catch (error) {
      console.error('Error fetching search suggestions:', error);
      setSuggestionData([]);
      setSearchAccordian(false);
    }
  };

  const debouncedHandleSearch = useCallback(_.debounce(handleSearch, 500), [searchSuggestion]);

  const handleSuggestion = (title) => {
    setSearchSuggestion(title);
    setSearchAccordian(false)
  };

  useEffect(() => {

    if (searchSuggestion) {
      debouncedHandleSearch();
    } else {
      setSearchAccordian(false);
      setSuggestionData([]);
    }
    return () => {
      debouncedHandleSearch.cancel();
    };
  }, [searchSuggestion, debouncedHandleSearch]);

  return (

    <div className='grid grid-flow-col shadow-lg my-3'>
      <div className='flex col-span-1 m-2'>
        <img
          onClick={handler}
          className='h-6 m-2 cursor-pointer'
          alt="menu"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
        />
       <Link to={'/'}> 
       <img
          className='h-8 mx-3'
          alt="youtube-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Logo_of_YouTube_%282013-2015%29.svg/2560px-Logo_of_YouTube_%282013-2015%29.svg.png"
        /></Link>
      </div>
      <div className='col-span-10'>
        <input
          className='border border-black p-2 w-1/2 rounded-l-full my-2'
          type="text"
          value={searchSuggestion}
          onChange={(e)=>handleSuggestion(e.target.value)}
          onFocus={() => searchSuggestion && setSearchAccordian(true)}
        />
        <Link to='/results'>
        <button 
          onClick={SearchThings} 
          className='border border-gray-400 rounded-r-full p-2'>
          Search
        </button>
        </Link>
        
      
      {searchAccordian && suggestionData.length > 0 && (
        <div className='shadow-md'>
          {suggestionData.map((item) => (
            <SearchSuggestion key={item.id.videoId} search={item} suggestion={handleSuggestion}/>
          ))}
        </div>
      )}
    
      </div>
      <div className='col-span-1'>
        <img
          className='size-12'
          alt="user-logo"
          src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAAD8/Py8vLz19fV/f3/v7+9fX1/Ozs7z8/OEhITBwcHd3d3Kysqtra1KSkpMTExzc3MQEBDl5eVRUVHW1tYlJSUyMjKnp6eUlJRnZ2dvb28fHx9DQ0OLi4s5OTlYWFienp4YGBgTExMgICCQkJA7Ozurq6szMzOZmZnSKFS8AAAFa0lEQVR4nO2da3OqSBCGHRTEKKCi4uV4oiZm4///g6vr2YjKwFza7ma3n49JWTVvwfRtuodORxAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRC4EgQB9RJeRZDH+3DTH2fj/ibcx/l/TGgvCbfqnm2Y9KiXBcY8XKgqFuGcemkgJONKeVfGCfXyvJk/vp2PbNv9HHuTBn0XJi3ej8O'
        />
      </div>
    </div>
  );
};

export default Head;
