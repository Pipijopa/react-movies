import React from 'react';
import {MovieView} from '../../types/movie';
import styles from './movie-card.module.scss';
import cn from 'classnames';

export const MovieCard: React.FC<{card: MovieView}> = ({card}) => {
  const {title, year, genres} = card;

  return (
    <article className={cn(styles.card, {[styles.card_selected]: card.selected})}>
      <h3 className={styles.card__title}>{title}</h3>
      <div className={styles.card__info}>
        <span>{year}</span>
        <ul>
          {genres.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default MovieCard;
