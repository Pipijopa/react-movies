import React, {createContext, useEffect, useState} from 'react';
import {fetchMovies} from '../app.service';
import {TMovieList} from '../types/movie';

export const MovieContext = createContext<any>(null);

export const MovieContextProvider = ({children}) => {
  const [movies, setMovies] = useState<TMovieList>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetchMovies('http://localhost:3001/movies')
      .then((movies) => {
        setMovies(movies);
      })
      .catch((err) => {
        setError(true);
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const contextValue = {
    movies,
    isLoading,
    error,
  };

  return <MovieContext.Provider value={contextValue}>{children}</MovieContext.Provider>;
};
