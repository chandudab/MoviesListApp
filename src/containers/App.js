import React, { Component } from 'react';
import axios from '../axios';

import MovieList from '../components/MovieList/MovieList';
import './App.css';

class App extends Component {
  state = {
    moviesData: [],
    genres: null
  };

  getGenres = async function () {
    try {
      const response = await axios.movieDbInstance.get('/genre/movie/list');
      let genreObj = {};

      response.data.genres.forEach(genre => {
        genreObj[genre.id] = genre.name;
      });
      this.setState({ genres: genreObj });
      console.log(response);
    } catch (error) {
      //TODO: Error scenario
    }
  }

  getMovies = async function () {
    try {
      const response = await axios.movieDbInstance.get('/movie/top_rated');
      this.setState({ moviesData: response.data.results });
    } catch (error) {
      //TODO: Error scenario
    }
  }
  componentDidMount() {
    console.log('hello');
    this.getGenres();
    this.getMovies();
  }
  render() {
    return (
      <div className="App">
        {this.state.moviesData.length > 0 && this.state.genres ?
          <MovieList
            movies={this.state.moviesData}
            genresList={this.state.genres} /> :
          <div>Loading...</div>
        }
      </div>
    );
  }
}

export default App;
