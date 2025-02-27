import axios from 'axios';
import { NavBar } from './components/Navbar/NavBar';
import { MoviesList } from './components/MoviesList/MoviesList';
import { FavoriteMoviesList } from './components/FavoriteMoviesList/FavoriteMoviesList';
import { POPULAR_MOVIES_URL } from '../constants/api';
import { useEffect, useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);
  const [favoriteMovies, setFavoritesMovies] = useState(() => {
    // jeigu nera favoriteMovies masyvo, grazina tuscia masyva
    const savedFavoriteMovies = localStorage.getItem('favoriteMovies');

    if (savedFavoriteMovies) {
      // JSON.parse() pavercia JSON stringa i JavaScript masyva/objekta
      return JSON.parse(savedFavoriteMovies);
    } else {
      return [];
    }
  });

  const fetchData = async () => {
    const response = await axios.get(POPULAR_MOVIES_URL);
    // paima tik 10 filmu
    setMovies(response.data.results.slice(0, 10));
  };

  const handleFavoriteMovies = (movie) => {
    console.log(movie);
    // Patikrina, ar filmas jau yra mėgstamų sąraše
    if (favoriteMovies.some((favMovie) => favMovie.id === movie.id)) {
      // Jei filmas jau yra mėgstamų sąraše, jis pašalinamas
      const updatedFavorites = favoriteMovies.filter(
        (favMovie) => favMovie.id !== movie.id
      );
      setFavoritesMovies(updatedFavorites);
    } else {
      // Prideda filmą į mėgstamų sąrašą
      // Spread operatorius - prideda nauja elementa/ filma i masyva, taciau islaiko senus viduje
      setFavoritesMovies([movie, ...favoriteMovies]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // useEffectas suveiks kai uzsikraus puslapis
    localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
    // useEffect() paleis savyje esanti koda, kiekeviena karta kada atsinaujins favoriteMovies masyvo informacija
  }, [favoriteMovies]);

  return (
    <div className="App">
      <NavBar favoriteMovies={favoriteMovies} />
      <MoviesList
        movies={movies}
        favoriteMovies={favoriteMovies}
        handleButtonClick={handleFavoriteMovies}
      />
      <FavoriteMoviesList
        favoriteMovies={favoriteMovies}
        handleButtonClick={handleFavoriteMovies}
      />
    </div>
  );
}

export default App;

// App.jsx -> MoviesList.jsx -> MovieCard.jsx
