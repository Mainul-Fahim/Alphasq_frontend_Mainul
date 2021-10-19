import React from 'react';
import useMovies from '../../hooks/useMovies';
import useSearch from '../../hooks/useSearch';
import Movie from '../Movie/Movie';

const MovieList = () => {
    
    const [movies] = useMovies([]);
    const {filterMovies} = useSearch({});

 
    return (
        <>
          {
             filterMovies.length===0?filterMovies.map(movie=><Movie key={movie.id} movie={movie}></Movie>):movies.map(movie=><Movie key={movie.id} movie={movie}></Movie>)
          } 
        </>
    );
};

export default MovieList;