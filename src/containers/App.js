import React, { Component } from 'react';
import axios from '../axios';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

import MovieList from '../components/MovieList/MovieList';
import Header from '../components/Header/Header';
import './App.css';

class App extends Component {
  state = {
    moviesData: [],
    genres: null
  };

  getGenres = async function () {
    try {
      console.log('Getting genre...');
      const response = await axios.movieDbInstance.get('/genre/movie/list');
      let genreObj = {};

      response.data.genres.forEach(genre => {
        genreObj[genre.id] = genre.name;
      });
      this.setState({ genres: genreObj });
    } catch (error) {
      //TODO: Error scenario
    }
  }


  componentDidMount() {
    this.getGenres();
  }
  render() {
    const movieList = (nav) => {
      return <MovieList
        genresList={this.state.genres}
        nav={nav} />
    }
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          {this.state.genres ?
            <div>
              <Route path="/" exact render={() => movieList('top_rated')}></Route>
              <Route path="/popular" render={() => movieList('popular')}></Route>
              <Route path="/now-playing" render={() => movieList('now_playing')}></Route>
              <Route path="/upcoming" render={() => movieList('upcoming')}></Route>
            </div>
            :
            <div>Loading...</div>
          }
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
