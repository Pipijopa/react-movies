import React from 'react';
import './movie-list.scss';
import List from './list/list';
import Search from './search/search';
import ListPanel from './list-panel/list-panel';

export const MovieList = () => {
    return (
        <div className="movie-list">
            <Search />
            <div className="list scroll">
                <List key={''}></List>
            </div>
            <div className="list-panel">
                <ListPanel />
            </div>
        </div>
    );
};

export default MovieList;
