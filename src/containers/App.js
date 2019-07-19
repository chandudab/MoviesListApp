import React, { Component } from 'react';
import axios from '../axios';

import MovieList from '../components/MovieList/MovieList';
import './App.css';

class App extends Component {
  state = {
    moviesData:[]
  };
  getMovies = async function () {
    try {
      const response = await axios.movieDbInstance.get('/movie/top_rated');
      this.setState({moviesData:response.data.results});
    } catch (error) {
      //TODO: Error scenario
    }
  }
  componentDidMount() {
    console.log('hello');
    this.getMovies();

  }
  render() {
    return (
      <div className="App">
        {this.state.moviesData.length >0 ?
        <MovieList
          movies={this.state.moviesData} />:
        <div>Loading...</div>
      }
      </div>
    );
  }
}

export default App;
