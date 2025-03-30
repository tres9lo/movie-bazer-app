import React, { useState } from 'react';
import { BsFillCollectionPlayFill } from 'react-icons/bs';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent text-white p-4">
      <div className="container mx-auto flex justify-between items-center px-12">
        <div className="flex flex-cols-2 gap-2 items-center justify-center font-bold text-xl"><BsFillCollectionPlayFill/> Movies Bazer</div>
        <ul className={`md:flex md:space-x-8 ${isOpen ? 'block' : 'hidden'}`}>
          <li><a href="/" className="text-gray-500 hover:text-gray-300 block py-2 md:py-0">Home</a></li>
          <li><a href="/explore" className="text-gray-500 hover:text-gray-300 block py-2 md:py-0">Explore</a></li>
          <li><a href="/genre" className="text-gray-500 hover:text-gray-300 block py-2 md:py-0">Genre</a></li>
          <li><a href="/news" className="text-gray-500 hover:text-gray-300 block py-2 md:py-0">News</a></li>
          <li><a href="/movies" className="text-gray-500 hover:text-gray-300 block py-2 md:py-0">Movies</a></li>
          <li><a href="/tv-shows" className="text-gray-500 hover:text-gray-300 block py-2 md:py-0">TV Shows</a></li>
        </ul>
        <button 
          className="md:hidden flex flex-col space-y-2 cursor-pointer z-50" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-gray-500 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-500 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-500 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
