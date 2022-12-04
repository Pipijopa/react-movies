import React, {useState} from 'react';
import 'normalize.css';
import {Header} from '../Header/Header';
import './App.module.scss';
import {Main} from '../Main/Main';
import {Movie} from '../../types/movie';
import {MovieContextProvider} from '../../context/MovieContext';

function App() {
  const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);
  const selectMovie = (movie: Movie): void => setCurrentMovie(movie);

  return (
    <MovieContextProvider>
      <Header />
      <Main handlerCurrentFilm={selectMovie} currentMovie={currentMovie} currentMovieId={currentMovie?.id} />
    </MovieContextProvider>
  );
}

export default App;
