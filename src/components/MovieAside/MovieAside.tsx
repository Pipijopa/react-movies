import React from 'react';
import styles from './MovieAside.module.scss';
import MovieList from './MovieList/MovieList';
import ListPanel from './ListPanel/ListPanel';
import {Movie} from '../../types/movie';

interface IMoveList {
  handlerCurrentFilm: (movie: Movie) => void;
  currentMovieId: string;
}

export const MovieAside: React.FC<IMoveList> = ({handlerCurrentFilm, currentMovieId}) => {
  return (
    <section className={styles.movieList}>
      <MovieList handlerCurrentFilm={handlerCurrentFilm} currentMovieId={currentMovieId} />

      <ListPanel />
    </section>
  );
};

export default MovieAside;
