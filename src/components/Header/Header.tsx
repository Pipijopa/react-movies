import { useCallback } from 'react';
import Button from '../Button/Button';
import styles from './Header.module.scss';

export const Header = () => {
  const gitButton = useCallback( 
    () => {
      window.open('https://github.com/Pipijopa', '_blank', 'noopener,noreferrer')
    }, []);

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <h1 className={styles.logo}>Админка фильмотеки</h1>
        <Button onClick={gitButton}>Ефимов Иван</Button>
      </div>
    </header>
  );
};
