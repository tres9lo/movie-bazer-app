// src/components/MovieCard.js
import React from 'react';

function MovieCard({ movie, onCardClick }) {
  return (
    <div 
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer"
      onClick={() => onCardClick(movie)}
    >
      <img src={movie.image} alt={movie.title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-white">{movie.title}</h2>
        <p className="text-gray-300 flex items-center justify-between"><b>{movie.year}</b> <b className='flex flex-cols-2 items-center justify-center gap-1'><i className='text-red-600 flex flex-cols-1 items-center justify-center'>.</i>{movie.downloaded}</b></p>
      </div>
    </div>
  );
}

export default MovieCard;