export const fetchMovies = (url) => {
  return fetch(url, null).then((response) => response.json());
};
