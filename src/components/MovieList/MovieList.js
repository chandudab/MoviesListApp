import React from 'react';

import MovieItem from './MovieListItem/MovieListItem';

const movieList = (props) => (
    props.movies.map(movie => {
        return <MovieItem
            genres={movie.genre_ids}
            title={movie.title + ' (' + new Date(movie.release_date).getFullYear() + ')'}
            poster_path={movie.poster_path}
            overview={movie.overview}
            backdrop_path={movie.backdrop_path}
            vote_average={movie.vote_average}
            key={movie.id}
        />
    })
);

export default movieList;