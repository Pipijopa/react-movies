import React, {useContext} from 'react';
import MovieCard from '../MovieCard/MovieCard';
import styles from './MovieList.module.scss';
import {MovieContext} from '../../../context/MovieContext';

export const MovieList = ({handlerCurrentFilm, currentMovieId}) => {
  const {movies} = useContext(MovieContext);

  return (
    <ul className={styles.container}>
      {movies.map((movie, index) => (
        <li className={styles.listItem} key={index} onClick={() => handlerCurrentFilm(movie)}>
          <MovieCard card={movie} active={movie.id === currentMovieId} />
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
