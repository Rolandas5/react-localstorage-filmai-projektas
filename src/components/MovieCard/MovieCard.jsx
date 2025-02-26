import './movie-card.css';

export const MovieCard = ({ movie }) => {
  const imgUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  // paima propsa title ir atvaizduoja
  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <img src={imgUrl} alt={movie.title} />
      <p>Originali kalba: {movie.original_language}</p>
      <p>Isleidimo data: {movie.release_date}</p>
      <p>Reitingas: {movie.vote_average}</p>
      <p>{movie.overview}</p>
      <button>Prideti prie megstamiausiu</button>
    </div>
  );
};
