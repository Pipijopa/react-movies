import React from 'react';
import MovieInfo from '../MovieInfo/MovieInfo';
import {PlugNotSelectMovie} from '../PlugNotSelectMovie/PlugNotSelectMovie';
import MovieSearch from '../MovieAside/MovieSearch/MovieSearch';
import styles from './Main.module.scss';
import {Movie} from '../../types/movie';
import MovieAside from '../MovieAside/MovieAside';

interface IMain {
  currentMovieId: string | null;
  currentMovie: Movie | null;
  handlerCurrentFilm: (movie: Movie) => void;
}

export const Main: React.FC<IMain> = ({currentMovieId, currentMovie, handlerCurrentFilm}) => {
  return (
    <main className={styles.mainContent}>
      <aside className={styles.mainContent__list}>
        <MovieSearch />
        <MovieAside handlerCurrentFilm={handlerCurrentFilm} currentMovieId={currentMovieId} />
      </aside>

      {currentMovie ? <MovieInfo currentMovie={currentMovie} /> : <PlugNotSelectMovie />}
    </main>
  );
};
