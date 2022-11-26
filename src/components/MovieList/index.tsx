import React, { useState } from 'react';
import MovieDetail from './MovieDetail';
import styles from './style.module.scss';

type MovieProps = {
  rating: number | string;
  genres: string[];
  id: number;
  url: string;
  title: string;
  large_cover_image: string;
};

type MovieListProps = {
  movies: MovieProps[];
};

export default function MovieList({ movies }: MovieListProps) {
  // TODO:
  console.log(movies);
  const [isDetail, setIsDetail] = useState<boolean>(false);
  const [id, setId] = useState<number>(0);

  const render = movies.map(item => {
    const onClick = () => {
      isDetail === true && id !== item.id
        ? setIsDetail(true)
        : setIsDetail(!isDetail);
      setId(item.id);
    };

    return (
      <div className={styles.list} key={item.id}>
        <div className={styles.movieTitle} onClick={onClick}>
          {item.title}
        </div>

        {isDetail && id === item.id && <MovieDetail item={item} />}

        <img
          className={styles.movieImage}
          src={item.large_cover_image}
          alt={item.title}
        ></img>
      </div>
    );
  });

  // XML
  return <>{render}</>;
}
