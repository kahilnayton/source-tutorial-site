import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import SearchForm from '../components/searchForm';
import SearchResults from '../components/searchResults';


const Search = ({
    data,
    location

}) => {
    const [results, setResults] = useState([]);
    const searchQuery = new URLSearchParams(location.search).get('keywords') || '';
    useEffect(() => {
        if (window.__LUNR__) {
            window.__LUNR__.__loaded.then(lunr => {
                // lunr is loaded here
                const refs = lunr.en.index.search(searchQuery);
                const images = refs.map(({ ref }) => lunr.en.store[ref]);
                setResults(images)
            });
        }
    }, [location.search]); // An empty array tells the component to only render once and not again
    return (
        <Layout
            location={location}
        >
            <SearchForm query={searchQuery} />
            <SearchResults
                query={searchQuery}
                results={results}
            />
        </Layout>
    );
};

export default Search;