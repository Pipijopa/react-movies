export interface Movie {
    id: number;
    title: string;
    year: string;
    runtime: string;
    genres: ReadonlyArray<string>;
    director: string;
    actors: string;
    plot: string;
    posterUrl: string;
}

export type MovieList = ReadonlyArray<Movie>;

export interface MovieView extends Movie {
    selected: boolean;
}

export type MovieViewList = ReadonlyArray<MovieView>;
