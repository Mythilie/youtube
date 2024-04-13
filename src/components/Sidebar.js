import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //Early return pattern
  if(!isMenuOpen) return null;
  return (
    <div className='p-5 shadow-lg shadow-gray-250 col-span-1'>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <li>Sports</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscription</h1>
      <ul>
        <li>Musics</li>
        <li>Sports</li>
        <li>Game</li>
        <li>Movie</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Musics</li>
        <li>Sports</li>
        <li>Game</li>
        <li>Movie</li>
      </ul>
    </div>
  )
}

export default Sidebar