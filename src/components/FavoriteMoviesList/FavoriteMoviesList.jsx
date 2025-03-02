import { MovieCard } from '../MovieCard/MovieCard';
import './favorite-movies-list.css';

export const FavoriteMoviesList = ({ favoriteMovies, handleButtonClick }) => {
  if (favoriteMovies.length === 0) {
    return <p>No favorite movies added yet</p>;
  }

  return (
    <div className="favorite-movies-section">
      <h2 className="favorite-movies-title">Favorite Movies</h2>
      <div className="favorite-movies-list">
        {favoriteMovies.map((movie) => (
          <div key={movie.id} className="movie-card-wrapper">
            <MovieCard
              movie={movie}
              isFavorite={true} // Tai reiškia, kad filmas yra mėgstamas
              handleButtonClick={handleButtonClick} // Pašalina filmą iš sąrašo
            />
          </div>
        ))}
      </div>
    </div>
  );
};
