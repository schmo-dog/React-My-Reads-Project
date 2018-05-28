import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    query: ''
  };

  upatedQuery = query => {
    this.setState(() => ({
      query: query.trim()
    }));
  };

  // TO DO: Continue watching video to hook up search results from the API and apply it here.

  render() {
    const { setCategory, setSearch } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <a
            className="close-search"
            onClick={() => {
              setSearch();
            }}>
            Close
          </a>
          <div className="search-books-input-wrapper">
            {setCategory()}
            {JSON.stringify(this.state)}
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={event => this.upatedQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid" />
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  setCategory: PropTypes.func
};
export default Search;

// {/*
//                   NOTES: The search from BooksAPI is limited to a particular set of search terms.
//                   You can find these search terms here:
//                   https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

//                   However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
//                   you don't find a specific author or title. Every search is limited by search terms.
//                 */}
