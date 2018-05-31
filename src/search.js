import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import Book from './book';
import { SSL_OP_NO_QUERY_MTU } from 'constants';

class Search extends Component {
  state = {
    query: ''
  };

  upatedQuery = query => {
    this.setState(() => ({
      query: query
    }));
    this.handleSearch(query);
  };

  handleSearch = query => {
    BooksAPI.search(query).then(books => {
      console.log(books)
      this.setState(() => ({
        results: books
      }));
    });
  };

  render() {
    const { query } = this.state;
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
            {/* {JSON.stringify(this.state)} */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={event => this.upatedQuery(event.target.value)}
            />
          </div>
        </div>
        {!!this.state.results && (
          <div className="search-books-results">
            <ol className="books-grid">
              {this.state.results.map(book => (
                <li key={book.id}>
                  <Book bkgImage="" title={book.title} authors="" />
                </li>
              ))}
            </ol>
          </div>
        )}
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
