import React from 'react';
import useMovies from '../../hooks/useMovies';
import Movie from '../Movie/Movie';

const MovieList = ({searchedMovies,newMovies}) => {
    
    const [movies] = useMovies([]);
  
    
    return (
        <>
          {
            searchedMovies?searchedMovies.map(movie=><Movie key={movie.id} movie={movie}></Movie>) : newMovies.map(movie=><Movie key={movie.id} movie={movie}></Movie>)
          } 
        </>
    );
};

export default MovieList;