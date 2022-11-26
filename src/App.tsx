import { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import Title from './components/Title';
import styles from './App.module.scss';
import React from 'react';

export default function App() {
  // JS
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // fetch('https://yts.mx/api/v2/list_movies.json')
    fetch('https://yts.mx/api/v2/list_movies.json?sort_by=rating')
      .then(res => res.json())
      .then(json => {
        setMovies(json.data.movies);
      });
  }, []);

  // XML
  return (
    <div className={styles.App}>
      <Title />
      <MovieList movies={movies} />
    </div>
  );
}
