import React, {useState} from 'react';
import MovieCard from './movie-card/movie-card';
import './list.scss';

const mockData = [
    {
        id: 2,
        title: 'The Cotton Club',
        year: '1984',
        runtime: '127',
        genres: ['Crime', 'Drama', 'Music'],
        director: 'Francis Ford Coppola',
        selected: false,
        actors: 'Richard Gere, Gregory Hines, Diane Lane, Lonette McKee',
        plot: 'The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.',
        posterUrl:
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg',
    },
    {
        id: 3,
        title: 'The Shawshank Redemption',
        year: '1994',
        runtime: '142',
        genres: ['Crime', 'Drama'],
        director: 'Frank Darabont',
        actors: 'Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler',
        plot: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        posterUrl:
            'https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg',
        selected: false,
    },
    {
        id: 2,
        title: 'The Cotton Club',
        year: '1984',
        runtime: '127',
        genres: ['Crime', 'Drama', 'Music'],
        director: 'Francis Ford Coppola',
        selected: false,
        actors: 'Richard Gere, Gregory Hines, Diane Lane, Lonette McKee',
        plot: 'The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.',
        posterUrl:
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg',
    },
    {
        id: 3,
        title: 'The Shawshank Redemption',
        year: '1994',
        runtime: '142',
        genres: ['Crime', 'Drama'],
        director: 'Frank Darabont',
        actors: 'Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler',
        plot: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        posterUrl:
            'https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg',
        selected: false,
    },
    {
        id: 2,
        title: 'The Cotton Club',
        year: '1984',
        runtime: '127',
        genres: ['Crime', 'Drama', 'Music'],
        director: 'Francis Ford Coppola',
        selected: false,
        actors: 'Richard Gere, Gregory Hines, Diane Lane, Lonette McKee',
        plot: 'The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.',
        posterUrl:
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg',
    },
    {
        id: 3,
        title: 'The Shawshank Redemption',
        year: '1994',
        runtime: '142',
        genres: ['Crime', 'Drama'],
        director: 'Frank Darabont',
        actors: 'Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler',
        plot: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        posterUrl:
            'https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg',
        selected: false,
    },
    {
        id: 2,
        title: 'The Cotton Club',
        year: '1984',
        runtime: '127',
        genres: ['Crime', 'Drama', 'Music'],
        director: 'Francis Ford Coppola',
        selected: false,
        actors: 'Richard Gere, Gregory Hines, Diane Lane, Lonette McKee',
        plot: 'The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.',
        posterUrl:
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg',
    },
    {
        id: 3,
        title: 'The Shawshank Redemption',
        year: '1994',
        runtime: '142',
        genres: ['Crime', 'Drama'],
        director: 'Frank Darabont',
        actors: 'Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler',
        plot: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        posterUrl:
            'https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg',
        selected: false,
    },
    {
        id: 2,
        title: 'The Cotton Club',
        year: '1984',
        runtime: '127',
        genres: ['Crime', 'Drama', 'Music'],
        director: 'Francis Ford Coppola',
        selected: false,
        actors: 'Richard Gere, Gregory Hines, Diane Lane, Lonette McKee',
        plot: 'The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.',
        posterUrl:
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg',
    },
    {
        id: 3,
        title: 'The Shawshank Redemption',
        year: '1994',
        runtime: '142',
        genres: ['Crime', 'Drama'],
        director: 'Frank Darabont',
        actors: 'Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler',
        plot: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        posterUrl:
            'https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg',
        selected: false,
    },
    {
        id: 2,
        title: 'The Cotton Club',
        year: '1984',
        runtime: '127',
        genres: ['Crime', 'Drama', 'Music'],
        director: 'Francis Ford Coppola',
        selected: false,
        actors: 'Richard Gere, Gregory Hines, Diane Lane, Lonette McKee',
        plot: 'The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.',
        posterUrl:
            'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg',
    },
    {
        id: 3,
        title: 'The Shawshank Redemption',
        year: '1994',
        runtime: '142',
        genres: ['Crime', 'Drama'],
        director: 'Frank Darabont',
        actors: 'Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler',
        plot: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        posterUrl:
            'https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg',
        selected: false,
    },
];

export const List = (props) => {
    const [state, setState] = useState(mockData);

    const handleClick = (id) => {
        const newArray = state.map((elem) => (elem.id === id ? {...elem, selected: true} : {...elem, selected: false}));
        setState(newArray);
    };

    return (
        <ul>
            {state.map((movie, index) => (
                <li className="list-item" key={index} onClick={() => handleClick(movie.id)}>
                    <MovieCard card={movie} />
                </li>
            ))}
        </ul>
    );
};

export default List;
