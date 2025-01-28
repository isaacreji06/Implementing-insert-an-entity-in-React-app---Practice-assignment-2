// src/components/Dashboard.jsx

import React, { useState } from 'react';
import MovieCard from './MovieCard';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Inception',
      director: 'Christopher Nolan',
      genre: 'Science Fiction',
      releaseYear: 2010,
      synopsis: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
      posterUrl: 'https://image.tmdb.org/t/p/original/xymM5aW6MDcH5AR9I3CamSegJd6.jpgg',
    },
    {
      id: 2,
      title: 'The Matrix',
      director: 'The Wachowskis',
      genre: 'Action',
      releaseYear: 1999,
      synopsis: 'A computer hacker learns about the true nature of his reality and his role in the war against its controllers.',
      posterUrl: 'https://image.tmdb.org/t/p/original/dXNAPwY7VrqMAo51EKhhCJfaGb5.jpg',
    },
  ]);
const handleClick=()=>{
navigate('/add-movie')
}
  return (
    <div className="dashboard">
      <div>
      <button onClick={handleClick} style={{padding: "0.4rem 0.8rem",fontSize: "0.8rem",backgroundColor: "#f0f0f0",color: "#333",border: "1px solid #ccc",borderRadius: "5px",cursor: "pointer",}}>Add Movie</button>
      </div>
      <header className="dashboard-header">
        <h1>Movie Collection</h1>
      </header>
      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
