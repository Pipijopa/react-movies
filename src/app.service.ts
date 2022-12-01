export const fetchMovies = () => {
  return fetch('http://localhost:3001/movies', null).then((response) => response.json());
};
