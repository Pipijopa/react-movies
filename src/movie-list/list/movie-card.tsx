import React from 'react';
import {MovieView} from "../../models/movie";
import "./movie-card.scss";

export const MovieCard = ({card}: {card: MovieView}) => {
    const {title, year, genres} = card;


    return (
        <div className={`card ${card.selected ? 'card_selected' : ''}`}>
            <div className="card__title">{title}</div>
            <div className="card__info">
                <span>{year}</span>
                {genres.map(item => <span key={item}>{item}</span>)}
            </div>
        </div>
    );
};

export default MovieCard;