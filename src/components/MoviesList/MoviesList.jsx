import { MovieCard } from '../MovieCard/MovieCard';
import './movies-list.css';

export const MoviesList = ({ movies }) => {
  return (
    <div className="movies-list">
      {movies.map((movie, index) => (
        // paima propsa title ir perduoda ji i MoveiCard
        <MovieCard key={index} movie={movie}/>
      ))}
    </div>
  );
};
