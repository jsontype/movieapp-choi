import { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import './App.css';

export default function App() {
  // JS
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://yts.mx/api/v2/list_movies.json')
      .then(res => res.json())
      .then(json => {
        setMovies(json.data.movies);
      });
  }, []);
  // XML
  return (
    <div className="App">
      무비리스트리액트 숙제
      <MovieList movies={movies} />
    </div>
  );
}
