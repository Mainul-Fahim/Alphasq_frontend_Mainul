import React from 'react';
import Movie from '../Movie/Movie';

const MovieList = ({searchedMovies,newMovies}) => {
    
    
    return (
        <>
          {
            searchedMovies?searchedMovies.map(movie=><Movie key={movie.id} movie={movie}></Movie>) : newMovies.map(movie=><Movie key={movie.id} movie={movie}></Movie>)
          } 
        </>
    );
};

export default MovieList;