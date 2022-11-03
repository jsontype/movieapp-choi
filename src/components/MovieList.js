import React from 'react';

export default function MovieList({ movies }) {
  const render = movies.map(item => {
    const rankClass =
      item.rating >= 9 ? 'good' : item.rating >= 7 ? 'soso' : 'bad';
    const iconClass = item.rating >= 9 && '🔥';
    if (item.rating === 0) {
      item.rating = '평점없음';
    }

    const movieGenre =
      item.genres.length > 0 ? item.genres.join(', ') : '장르없음';
    const itemRating = item.rating === 0 ? '평점없음' : item.rating;
    return (
      <div className="list" key={item.id}>
        <a className="movieTitle" href={item.url}>
          <span>{iconClass}</span> {item.title}
        </a>
        <div className="genres">Genre: {movieGenre}</div>
        <div className={rankClass}>평점 : {itemRating} / 10점</div>
        <img
          className="movieImage"
          src={item.large_cover_image}
          alt={item.tile}
        ></img>
      </div>
    );
  });

  // XML
  return <>{render}</>;
}
