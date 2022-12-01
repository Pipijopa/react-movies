import React from 'react';
import {Movie} from '../../types/movie';
import styles from './movie-info.module.scss';

interface IMovieInfo {
  currentMovie: Movie;
}

const MovieInfo: React.FC<IMovieInfo> = ({currentMovie}) => {
  const {title, year, director, actors, plot, posterUrl, runtime, genres, id} = currentMovie;

  const arrayActors = actors.split(', ');
  console.log(arrayActors);
  return (
    <section className={styles.container}>
      <div className={styles.movieInfoHeader}>
        <span>id: {id}</span>
        <button>Редактировать</button>
      </div>

      <div className={styles.movieInfoBody}>
        <img width={'150'} height={'250'} src={posterUrl} alt={'Film poster'} />

        <div>
          <div>
            <h2>{title}</h2>
            <span>{director}</span>
          </div>

          <div>
            <MovieInfoRow title={'Год производства'} value={year} />
            <MovieInfoRow title={'Актеры'} value={actors} />
            <MovieInfoRow title={'Длительность фильма'} value={`${runtime} мин.`} />
            <MovieInfoRow
              title={'Жанры'}
              value={genres.map((genre) => (
                <span>{genre}</span>
              ))}
            />
          </div>
        </div>
      </div>

      <div>
        <h3>Описание</h3>
        <span>{plot}</span>
      </div>
    </section>
  );
};

const MovieInfoRow = ({title, value}) => {
  return (
    <div className={styles.rowContainer}>
      <div className={styles.rowTitle}>{title}:</div>
      <div className={styles.rowValue}>{value}</div>
    </div>
  );
};

export default MovieInfo;
