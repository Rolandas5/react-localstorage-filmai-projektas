import axios from 'axios';
import { NavBar } from './components/Navbar/NavBar';
import { MoviesList } from './components/MoviesList/MoviesList';
import { POPULAR_MOVIES_URL } from '../constants/api';
import { useEffect, useState } from 'react';

function App() {
  const [movies, setMovies] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(POPULAR_MOVIES_URL);
    setMovies(response.data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <MoviesList movies={movies} />
    </div>
  );
}

export default App;
