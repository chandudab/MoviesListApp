import React, { Component } from 'react';
import MovieList from './components/MovieList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieList/>
      </div>
    );
  }
}

export default App;
