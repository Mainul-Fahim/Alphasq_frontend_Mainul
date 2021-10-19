import React from 'react';

const SearchBar = ({advancedSearchChange}) => {
    
    return (
        <div className="pa2">
          <input
           className="pa3 ba b--green bg-lightest-blue" 
           type="search" placeholder="Search Movies..."
           onChange={advancedSearchChange}
           />  
        </div>
    );
};

export default SearchBar;