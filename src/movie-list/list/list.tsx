import React, {useContext} from 'react';
import MovieCard from '../movie-card/movie-card';
import styles from './list.module.scss';
import cn from 'classnames';
import {MovieContext} from '../../context/MovieContext';

export const List = ({handlerCurrentFilm, selectMovie, currentMovieId}) => {
  const {movies} = useContext(MovieContext);

  return (
    <ul className={styles.container}>
      {movies.map((movie, index) => (
        <li
          className={cn(styles.listItem, {[styles.currentList]: movie.id === currentMovieId})}
          key={index}
          onClick={() => {
            selectMovie(movie);
            handlerCurrentFilm(movie);
          }}>
          <MovieCard card={movie} />
        </li>
      ))}
    </ul>
  );
};

export default List;
