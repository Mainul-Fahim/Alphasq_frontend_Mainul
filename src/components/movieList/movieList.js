import React from 'react';
import useMovies from '../../hooks/useMovies';
import Movie from '../Movie/Movie';

const MovieList = () => {
    
    const [movies] = useMovies([]);
    
    return (
        <>
          {
              movies.map(movie=><Movie id={movie.id} movie={movie}></Movie>)
          }  
        </>
    );
};

export default MovieList;