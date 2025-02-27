import './movie-card.css';

export const MovieCard = ({ movie, handleButtonClick, isFavorite }) => {
  const imgUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  // paima propsa title ir atvaizduoja
  return (
    <div className="movie-card">
      <img src={imgUrl} alt="movie" />
      <h3>{movie.title}</h3>
      <p>Originali kalba: {movie.original_language}</p>
      <p>Isleidimo data: {movie.release_date}</p>
      <p>Reitingas: {movie.vote_average}</p>
      <p>{movie.overview}</p>
      <button onClick={() => handleButtonClick(movie)}>
        {isFavorite
          ? 'Pašalinti iš mėgstamiausių'
          : 'Pridėti prie mėgstamiausių'}
      </button>
    </div>
  );
};

// App.jsx -> MoviesList.jsx -> MovieCard.jsx
