import React from 'react';
import { navigate } from 'gatsby';

const SearchForm = ({query}) => (
    // Using GET menas that we can ustilise deeplinking functionallity
    <form role="search" method="GET">
        <label htmlFor="search-input"><h1>Search tags</h1></label>
        <input
            type="search"
            id="search-input"
            name="keywords"
            aria-control="search-results-count"
            onChange={(e) => navigate(`/search?keywords=${encodeURIComponent(e.target.value)}`)}
            value={query}
        />
        <button type="submit">Submit</button>
    </form>
);

export default SearchForm;