import React from 'react';
import MovieInfo from '../components/movie-info/movie-info';
import Search from '../movie-list/search/search';
import styles from './main.module.scss';
import {Movie} from '../types/movie';
import MovieList from '../movie-list/movie-list';

interface TMain {
  selectMovie: any;
  currentMovieId: string | null;
  currentMovie: Movie | null;
  handlerCurrentFilm: any;
}

export const Main: React.FC<TMain> = ({selectMovie, currentMovieId, currentMovie, handlerCurrentFilm}) => {
  return (
    <main className={styles.mainContent}>
      <aside className={styles.mainContent__list}>
        <Search />
        <MovieList handlerCurrentFilm={handlerCurrentFilm} selectMovie={selectMovie} currentMovieId={currentMovieId} />
      </aside>

      {currentMovie ? <MovieInfo currentMovie={currentMovie} /> : 'Выберите фильм'}
    </main>
  );
};
