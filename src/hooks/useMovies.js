import React, { useEffect, useState } from 'react';

const useMovies = () => {
    
    const [movies,setMovies] = useState([]);
    useEffect(() =>{
        const url = "https://api.themoviedb.org/4/list/7096014?page=1&api_key=4275cf25831de3b150d6ae572b31a179";

        fetch(url)
        .then(res=>res.json())
        .then(data=>setMovies(data.results));
    },[]);
    
    
    return [movies];
};

export default useMovies;