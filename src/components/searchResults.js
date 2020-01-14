import React from 'react';

const SearchResults = ({ query, results }) => (
    <section aria-label="Search results for all posts">
        {!!results.length && query &&

            <h2 className="search-results-count"
                aria-live="assertive" // This will tell assertive technologies that this field will update on the fly and this can be set to pollite or assertive
            >Found {results.length} posts on "{query}"</h2>
        }
        {!!results.length &&
            <ol className="search-results-list">
                {results.map(({
                    title,
                    user,
                    largeImageURL
                }
                ) => (
                        <div key={title}>
                            <h3 className="search-results-list__heading">
                                <a>{title}</a>
                                <a>{user}</a>
                                <a href={largeImageURL}> Click to see!</a>
                            </h3>
                        </div>
                    ))}

            </ol>
        }

    </section>
);

export default SearchResults;