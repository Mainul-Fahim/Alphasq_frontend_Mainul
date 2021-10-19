import React, { useState } from 'react';
import MovieDetails from '../MovieDetails/MovieDetails';

const Movie = ({ movie }) => {

    const { original_title, poster_path, popularity,id } = movie;
    const [modalShow, setModalShow] = useState(false);
    const [movieId, setMovieId] = useState(0);

    const movieDesc = ()=>{

        setModalShow(true);
        setMovieId(id);
        setTimeout(()=>{
            setModalShow(false);
        },6000);
    }

    const onHide = ()=>{
        
        setModalShow(false);
    }

    return (
        <div onClick={movieDesc} className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
            <img height="300" width="300" src={`https://image.tmdb.org/t/p/original/${poster_path}?200x200`} alt="movies" />
            <div>
                <h2>{original_title}</h2>
                <p>Popularity: {popularity}</p>
            </div>
            <MovieDetails show={modalShow}
                onHide={onHide} movieId={movieId} />
        </div>
    );
};

export default Movie;