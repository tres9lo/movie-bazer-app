// src/App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MovieCard from './components/MovieCard';
import MovieModal from './components/MovieModal';
import Footer from './components/Footer';
import { GiFireBowl } from 'react-icons/gi';

function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const movies = [
    {
      id: 1,
      title: 'Spider-Man: Across the Spider-Verse',
      image: 'captain.jpg',
      year: '2024',
      downloaded: '200m',
    },
    {
      id: 2,
      title: 'Guardians of the Galaxy Vol. 3',
      image: 'avengers.jpg',
      year: '2024',
      downloaded: '50m',
    },
    {
      id: 3,
      title: 'Black Panther: Wakanda Forever',
      image: 'wakanda.jpg',
      year: '2024',
      downloaded: '80m',
    },
    {
      id: 4,
      title: 'Avengers: Endgame',
      image: 'thanos.jpg',
      year: '2024',
      downloaded: '50m',
    },
    {
      id: 5,
      title: 'A Quiet Place Part II',
      image: 'quiet.jpg',
      year: '2024',
      downloaded: '400m',
    },
    {
      id: 6,
      title: 'Dc Universe',
      image: 'dc.jpg',
      year: '2024',
      downloaded: '120m',
    },
  ];

  const handleCardClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  const handleSeeMore = () => {
    // Add logic to load more movies or navigate to a dedicated page
    console.log('See More clicked!');
  };

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center">
          <div className="text-yellow-500 mr-2"></div>
          <h2 className="flex flex-cols-2 items-center justify-center gap-2 text-white font-semibold text-lg">
            <GiFireBowl className="text-yellow-400" />
            Trending
          </h2>
        </div>
        <div className="border-b border-gray-700 flex-grow mx-4"></div>
        <button onClick={handleSeeMore} className="text-gray-400 hover:text-gray-200">
          See More
        </button>
      </div>
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onCardClick={handleCardClick} />
        ))}
      </div>
      <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center">
          <div className="text-yellow-500 mr-2"></div>
          <h2 className="flex flex-cols-2 items-center justify-center gap-2 text-white font-semibold text-lg">
            YOU MAY LIKE THIS
          </h2>
        </div>
        <div className="border-b border-gray-700 flex-grow mx-4"></div>
        <button onClick={handleSeeMore} className="text-gray-400 hover:text-gray-200">
          See More
        </button>
      </div>
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} onCardClick={handleCardClick} />
        ))}
      </div>
      <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
      <Footer />
    </div>
  );
}

export default App;