import { MovieCard } from '../MovieCard/MovieCard';
import './movies-list.css';

export const MoviesList = ({ movies, handleButtonClick, favoriteMovies }) => {
  return (
    <div className="movies-list">
      {movies.map((movie, index) => (
        // paima propsa title ir perduoda ji i MoveiCard
        <MovieCard
          key={index}
          movie={movie}
          isFavorite={favoriteMovies.some(
            (favMovie) => favMovie.id === movie.id
          )}
          handleButtonClick={handleButtonClick}
        />
      ))}
    </div>
  );
};

// App.jsx -> MoviesList.jsx -> MovieCard.jsx
