import React, { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import SearchBar from '../../components/SearchBar/SearchBar';

const Home = () => {
    
    const [searchedMovies,setSearchedMovies] = useState([]);
    const [searchField,setSearchField] = useState('');

    const advancedSearchChange = (e)=>{

        setSearchField(e.target.value);
    
    }

    useEffect(()=>{

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=4275cf25831de3b150d6ae572b31a179&language=en-US&page=1&include_adult=false&query=${searchField}`)
        .then(res=>res.json())
        .then(data=>setSearchedMovies(data.results));

    },[searchField])
    
    
    
    return (
        <main className="tc">
            <h1>Movies</h1>
            <SearchBar advancedSearchChange={advancedSearchChange}/>
            <MovieList searchedMovies={searchedMovies}/>
        </main>
    );
};

export default Home;