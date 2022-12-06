import {useContext, useEffect, useState} from 'react';
import {MovieContext} from '../../../context/MovieContext';
import useDebounce from '../../../hooks/useDebounce';
import {fetchMovies} from '../../App/App.service';
import Button from '../../Button/Button';
import styles from './MovieSearch.module.scss';

export const MovieSearch = () => {
  const [value, setValue] = useState('');
  const {debounceValue} = useDebounce(value, 500);

  const {setMovies} = useContext(MovieContext);

  useEffect(() => {
    fetchMovies(`http://localhost:3010/movies?title_like=${value}`).then((movies) => {
      setMovies(movies);
    });
  }, [debounceValue]);

  return (
    <form className={styles.form}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={styles.control}
        type="text"
        name="search"
        placeholder="Введите название фильма"
      />
      <Button secondary>Искать</Button>
    </form>
  );
};

export default MovieSearch;
