import React from 'react';
import useSearch from '../../hooks/useSearch';

const SearchBar = () => {
    
    const {searchChange} = useSearch({});
    //console.log(filterMovies);
    return (
        <div className="pa2">
          <input
           className="pa3 ba b--green bg-lightest-blue" 
           type="search" placeholder="Search Movies..."
           onChange={searchChange}
           />  
        </div>
    );
};

export default SearchBar;