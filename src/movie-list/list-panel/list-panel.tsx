import {useContext} from 'react';
import Button from '../../components/button/button';
import {MovieContext} from '../../context/MovieContext';
import styles from './list-panel.module.scss';

export const ListPanel = () => {
  const {movies} = useContext(MovieContext);

  return (
    <div className={styles.panel}>
      <span className={styles.info}>Найдено {movies.length} элементов</span>
      <Button>+ Добавить</Button>
    </div>
  );
};

export default ListPanel;
