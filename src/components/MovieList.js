import React, { Component } from 'react';

import MovieItem from './MovieListItem';
import MoviesData from '../apiResults';
import './MovieListItem.css';

class MovieList extends Component {

    render() {
        let movies = [...MoviesData.results];
        let movieList = (
            <div>
                {
                    movies.map(movie => {
                        return <MovieItem
                            genres={movie.genres}
                            title={movie.title + ' (' + new Date(movie.release_date).getFullYear() + ')'}
                            poster_path={movie.poster_path}
                            overview={movie.overview}
                            backdrop_path={movie.backdrop_path}
                            vote_average={movie.vote_average}
                            key={movie.id}
                        />
                    })
                }
            </div>
        );
        return (
            <div>
                {movieList}
            </div>
        )
    };
};

export default MovieList;