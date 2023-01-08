import React from 'react';
import {Header} from '../Header/Header';
import {Outlet} from 'react-router-dom';
import MovieSearch from '../MovieComponents/MovieAside/MovieSearch/MovieSearch';
import styles from './Main.module.scss';
import {Movie} from '../../types/movie';
import MovieAside from '../MovieComponents/MovieAside/MovieAside';

interface IMain {
  currentMovieId: string | null;
  currentMovie: Movie | null;
  handlerCurrentFilm: (movie: Movie) => void;
}

export const Main: React.FC = () => {
  return (
    <>
      <Header />
      <main className={styles.mainContent}>
        <aside className={styles.mainContent__list}>
          <MovieSearch />
          <MovieAside />
        </aside>

        <Outlet />
        {}
      </main>
    </>
  );
};
