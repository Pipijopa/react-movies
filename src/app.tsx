import React from 'react';
import 'normalize.css';
import {Header} from './header/header';
import './app.scss';
import {Main} from './main/main';

function App() {
    return (
        <>
            <Header />
            <Main />
        </>
    );
}

export default App;
