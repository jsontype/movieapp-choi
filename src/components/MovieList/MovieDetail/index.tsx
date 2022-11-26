import React from 'react';
import styles from './style.module.scss';

export default function MovieDetail({ item }: any) {
  const rankClass =
    item.rating >= 9 ? 'good' : item.rating >= 7 ? 'soso' : 'bad';
  const iconClass = item.rating >= 9 && '🔥';
  const movieGenre =
    item.genres.length > 0 ? item.genres.join(', ') : '장르없음';
  const itemRating = item.rating || '평점없음';

  return (
    <div className={styles.movieDetail}>
      <div>영화제목 : {item.title}</div>
      <div>
        평점 : <span className={rankClass}>{itemRating}</span> / 10점{' '}
        <span>{iconClass}</span>
      </div>
      <div>장르 : {movieGenre}</div>
      <div>상영시간 : {item.runtime}</div>
      <div>줄거리 : {item.summary}</div>
    </div>
  );
}
