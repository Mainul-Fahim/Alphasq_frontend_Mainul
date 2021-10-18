import React from 'react';

const Movie = ({movie}) => {

    const {original_title,poster_path,popularity} = movie;

    return (
        <div className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
            <img height="300" width="300" src={`https://image.tmdb.org/t/p/original/${poster_path}?200x200`} alt="robots" />
            <div>
                <h2>{original_title}</h2>
                <p>Popularity: {popularity}</p>
            </div>
        </div>
    );
};

export default Movie;