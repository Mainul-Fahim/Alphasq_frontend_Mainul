import { useState } from 'react';
import useMovies from './useMovies';

const useSearch = () => {
    
    const [movies] = useMovies([]);
    const [searchField,setSearchField] = useState('');
    
    //console.log(movies);
    const searchChange = (e)=>{

        setSearchField(e.target.value);
    
    }

    const filterMovies = movies.filter(movie=>movie.title.includes(searchField));
    
    

    return {
        searchField,
        searchChange,
        filterMovies
    };
};

export default useSearch;