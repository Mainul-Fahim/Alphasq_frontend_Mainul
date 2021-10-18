import React from 'react';
import MovieList from '../../components/MovieList/MovieList';
import SearchBar from '../../components/SearchBar/SearchBar';

const Home = () => {
    return (
        <main className="tc">
            <h1>Movies</h1>
            <SearchBar/>
            <MovieList/>
        </main>
    );
};

export default Home;