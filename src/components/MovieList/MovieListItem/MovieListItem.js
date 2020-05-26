import React from 'react';

import './MovieListItem.css';
import Genres from './Genres/Genres';

const movieListItem = (props) => {

  const imageBaseUrl = 'https://image.tmdb.org/t/p';
  const backdropWidth = '/w780';
  const posterWidth = '/w185';

  const movieDetailBackgroundStyle = {
    background: 'url(' + imageBaseUrl + backdropWidth + props.backdrop_path + ') lightgray no-repeat',
    backgroundSize: 'cover'
  };

  return (
    <div className="movie-container">
      <div className="movie-poster">
        <img src={imageBaseUrl + posterWidth + props.poster_path} alt="movie-poster" />
      </div>
      <div className="movie-details" style={movieDetailBackgroundStyle}>
        <h2 className="movie-detail-title">{props.title}</h2>
        <p className="movie-details-genres">
          <Genres
            genres={props.genres} 
            genresList={props.genresList}/>
        </p>
        <p className="movie-detial-overview">{props.overview}</p>
        <span className="movie-details-rating-vote">
          <strong>Viewer Rating: </strong> {props.vote_average}/10
          </span>
      </div>
    </div>
  );
};

export default movieListItem;