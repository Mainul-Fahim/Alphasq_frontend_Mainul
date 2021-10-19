import  { useEffect, useState } from 'react';

const useAdvancedSearch = () => {
    
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
    
    console.log(searchedMovies);
    return   [searchedMovies];
      
};

export default useAdvancedSearch;