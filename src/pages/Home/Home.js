import React, { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import Pagination from '../../components/Pagination/Pagination';
import SearchBar from '../../components/SearchBar/SearchBar';
import useMovies from '../../hooks/useMovies';

const Home = () => {

    const [searchedMovies, setSearchedMovies] = useState([]);
    const [searchField, setSearchField] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const [movies] = useMovies([]);

    const advancedSearchChange = (e) => {

        setSearchField(e.target.value);

    }

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=4275cf25831de3b150d6ae572b31a179&language=en-US&page=1&include_adult=false&query=${searchField}`)
            .then(res => res.json())
            .then(data => setSearchedMovies(data.results));

    }, [searchField])


    // Get current movies
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = movies.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <main className="tc white">
            <h1 className="mt-3 dim i underline">Movies</h1>
            <SearchBar advancedSearchChange={advancedSearchChange} />
            <MovieList newMovies={currentPosts}  searchedMovies={searchedMovies} />
            <Pagination
                postsPerPage={postsPerPage}
                totalPosts={movies.length}
                paginate={paginate}
            />
        </main>
    );
};

export default Home;