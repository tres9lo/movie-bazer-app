// src/components/MovieModal.js
import React from 'react';
import { BiXCircle } from 'react-icons/bi';

function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center">
      <div className="bg-gray-800 rounded-lg p-8 w-[400px] h-3/4">
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-white">{movie.title}</h2>
            <button 
              className="flex flex-cols-2 gap-2  items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={onClose}
            >
              <BiXCircle /> Close
            </button>
          </div>
          <div className="flex-grow">
            <img src={movie.image} alt={movie.title} className="w-full mb-4 h-1/2 object-contain" /> 
            <p className="text-gray-300 flex flex-cols-2  items-center justify-between"><b>{movie.year}</b> <b className='flex flex-cols-2 items-center justify-center gap-1'><i className='text-red-600 flex flex-cols-1 items-center justify-center'>.</i>{movie.downloaded}</b></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;