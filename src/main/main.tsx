import React from 'react';
import {MovieList} from '../movie-list/movie-list';
import {InfoContent} from '../info-content/info-content';
import './main.scss';

export const Main = () => {
    fetch('http://localhost:3001/movies')
        .then((data) => data.json())
        .then((data) => console.log(data));

    return (
        <div className="main-content container">
            <div className="main-content__list">
                <MovieList />
            </div>

            <div className="main-content__info">
                <InfoContent />
            </div>
        </div>
    );
};
