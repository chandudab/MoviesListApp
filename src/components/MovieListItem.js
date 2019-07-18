import React from 'react';

import './MovieListItem.css';

const Movie = (props) => {
  let genres = props.genres,
    genresElem = (
      <p className="movie-details-genres">
        {genres.map((item,index) => {
          return <span key={index}>{item}</span>
        })}
      </p>
    );

  const movieDetailBackgroundStyle = {
    background: 'url(' + props.backdrop_path + ') lightgray no-repeat',
    backgroundSize: 'cover'
  };

  return (
    <div className="movie-container">
      <div className="movie-poster">
        <img src={props.poster_path} alt="movie-poster" />
      </div>
      <div className="movie-details" style={movieDetailBackgroundStyle}>
        <h2 className="movie-detail-title">{props.title}</h2>
        {genresElem}
        <p className="movie-detial-overview">{props.overview}</p>
        <span class="movie-details-rating-vote">
          <strong>Viewer Rating: </strong> {props.vote_average}/10
          </span>
      </div>
    </div>
  );
};

export default Movie;