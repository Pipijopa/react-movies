import React, {useState} from 'react';
import 'normalize.css';
import {Header} from './header/header';
import './app.scss';
import {Main} from './main/main';
import {Movie} from './types/movie';
import {MovieContextProvider} from './context/MovieContext';

function App() {
  const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);
  const selectMovie = (movie) => setCurrentMovie(movie);

  const handlerCurrentFilm = (film) => setCurrentMovie(film);
  return (
    <MovieContextProvider>
      <Header />
      <Main
        selectMovie={selectMovie}
        currentMovie={currentMovie}
        currentMovieId={currentMovie?.id}
        handlerCurrentFilm={handlerCurrentFilm}
      />
    </MovieContextProvider>
  );
}

export default App;
