import Button from '../../components/button/button';
import styles from './search.module.scss';

export const Search = () => {
  return (
    <form className={styles.form}>
      <input className={styles.control} type="text" name="search" placeholder="Введите название фильма" />
      <Button secondary>Искать</Button>
    </form>
  );
};

export default Search;
