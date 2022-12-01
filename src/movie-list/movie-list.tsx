import React from 'react';
import styles from './movie-list.module.scss';
import List from './list/list';
import ListPanel from './list-panel/list-panel';
import {Movie} from '../types/movie';

interface IMoveList {
  handlerCurrentFilm: (movie: Movie) => void;
  selectMovie: any;
  currentMovieId: string;
}

export const MovieList: React.FC<IMoveList> = ({handlerCurrentFilm, selectMovie, currentMovieId}) => {
  return (
    <section className={styles.movieList}>
      <List handlerCurrentFilm={handlerCurrentFilm} selectMovie={selectMovie} currentMovieId={currentMovieId} />

      <ListPanel />
    </section>
  );
};

export default MovieList;
