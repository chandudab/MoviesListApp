import React, { Component } from 'react';
import axios from '../../axios';

import MovieListItem from './MovieListItem/MovieListItem';

class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moviesData: []
        };
    }

    getMovies = async function () {
        try {
            const response = await axios.movieDbInstance.get('/movie/'+ this.props.nav);
            this.setState({ moviesData: response.data.results });
        } catch (error) {
            //TODO: Error scenario
        }
    }
    componentDidMount() {
        this.getMovies();
        console.log('componentDidMount: '+this.props.nav);
    }

    render() {
        return this.state.moviesData.map(movie => {
            return <MovieListItem
                genres={movie.genre_ids}
                genresList={this.props.genresList}
                title={movie.title + ' (' + new Date(movie.release_date).getFullYear() + ')'}
                poster_path={movie.poster_path}
                overview={movie.overview}
                backdrop_path={movie.backdrop_path}
                vote_average={movie.vote_average}
                key={movie.id}
            />
        })
    }
}

export default MovieList;