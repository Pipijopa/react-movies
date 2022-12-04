import Button from '../../Button/Button';
import styles from './MovieSearch.module.scss';

export const MovieSearch = () => {
  return (
    <form className={styles.form}>
      <input className={styles.control} type="text" name="search" placeholder="Введите название фильма" />
      <Button secondary>Искать</Button>
    </form>
  );
};

export default MovieSearch;
