import React from 'react';
import useMovies from '../../hooks/useMovies';
import Movie from '../Movie/Movie';

const MovieList = ({searchedMovies}) => {
    
    const [movies] = useMovies([]);
  
    
    return (
        <>
          {
            searchedMovies?searchedMovies.map(movie=><Movie key={movie.id} movie={movie}></Movie>) : movies.map(movie=><Movie key={movie.id} movie={movie}></Movie>)
          } 
        </>
    );
};

export default MovieList;