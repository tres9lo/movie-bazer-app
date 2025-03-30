import React from 'react';
import { FiPlayCircle } from 'react-icons/fi';

function Hero() {
  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white p-8 relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">FIND MOVIES<br /><h3 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600 text-left">
  TV SHOWS AND MORE</h3></h1>
          <p className="text-gray-300 mb-6">
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <button className="flex flex-cols-2 justify-between gap-2 items-center w-50 bg-black text-white font-bold border py-2 px-4 rounded">
          <FiPlayCircle className="h-6 w-6 text-white" />   Watch Tutorial
          </button>
        </div>
        <div className="w-full md:w-1/2 relative flex justify-end p-4 md:p-9">
          <div className="absolute bottom-1/4 right-0 w-1/2 hidden sm:block">
            <img
              src="dc.jpg"
              alt="Guardians of the Galaxy Vol. 3"
              className="rounded-lg shadow-lg w-full h-48 md:h-72 object-cover"
            />
          </div>
          <div className="relative w-full sm:w-3/4">
            <img
              src="dc.jpg"
              alt="Spider-Man: Across the Spider-Verse"
              className="rounded-lg shadow-lg w-full h-48 md:h-72 object-cover"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-2/3 rotate-[-240deg] -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 md:p-4">
              <FiPlayCircle className="h-8 w-8 md:h-12 md:w-12 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;