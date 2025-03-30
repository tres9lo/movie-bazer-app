import React from 'react';
import { BsFillCollectionPlayFill } from 'react-icons/bs';

function Navbar() {
  return (
    <nav className="bg-transparent text-white p-4">
      <div className="container mx-auto flex justify-between items-center px-12">
        <div className="flex flex-cols-2 gap-2 items-center justify-center font-bold text-xl"><BsFillCollectionPlayFill/> Movies Bazer</div>
        <ul className="flex space-x-8">
          <li><a href="/" className=" text-gray-500 hover:text-gray-300">Home</a></li>
          <li><a href="/explore" className="text-gray-500 hover:text-gray-300">Explore</a></li>
          <li><a href="/genre" className=" text-gray-500 hover:text-gray-300">Genre</a></li>
          <li><a href="/news" className="text-gray-500 hover:text-gray-300">News</a></li>
          <li><a href="/movies" className=" text-gray-500 hover:text-gray-300">Movies</a></li>
          <li><a href="/tv-shows" className=" text-gray-500 hover:text-gray-300">TV Shows</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;