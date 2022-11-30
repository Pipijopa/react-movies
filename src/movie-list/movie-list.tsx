import React from 'react';
import './movie-list.scss';
import List from './list/list';
import Search from './search/search';
import ListPanel from './list-panel/list-panel';

export const MovieList = () => {
    return (
        <div className="movie-list">
            <Search />
            <section className="list scroll">
                <List key={''}></List>
            </section>
            <section className="list-panel">
                <ListPanel />
            </section>
        </div>
    );
};

export default MovieList;
