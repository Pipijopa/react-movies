import React from 'react';
import {MovieView} from '../../types/movie';
import './movie-card.scss';

export const MovieCard = ({card}: {card: MovieView}) => {
    const {title, year, genres} = card;

    return (
        <article className={`card ${card.selected ? 'card_selected' : ''}`}>
            <h3 className="card__title">{title}</h3>
            <div className="card__info">
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
