import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import Book from './book';

class Search extends Component {
  state = {
    query: '',
    results: ''
  };

  upatedQuery = query => {
    this.setState(() => ({
      query: query
    }));
    this.handleSearch(query);
    {
    }
  };

  handleSearch = query => {
    BooksAPI.search(query)
      .then(books => {
        console.log('books query', books);
        this.setState(() => ({ results: books }));
      })

        //  .then(() => {
        //    let unique = [...new Set([...this.state.results, ...this.props.booksInShelf])];
        //    filteredList = unique.filter(book => word.length > 6);
        //    console.log('unique',unique);
  };

  

  render() {
    console.log('in search- books on shelf', this.props.booksInShelf);
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
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={event => this.upatedQuery(event.target.value)}
            />
          </div>
        </div>
        {!!this.state.results &&
          this.state.results.length > 0 && (
            <div className="search-books-results">
              <ol className="books-grid">
                {this.state.results.map(book => (
                  <li key={book.id}>
                    <Book
                      setCategory={setCategory}
                      bkgImage={book.imageLinks.thumbnail}
                      title={book.title}
                      authors={book.authors}
                      bookId={book.id}
                      currentShelf={book.shelf}
                    />
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
  setCategory: PropTypes.func,
  booksInShelf: PropTypes.array
};
export default Search;

// {/*
//                   NOTES: The search from BooksAPI is limited to a particular set of search terms.
//                   You can find these search terms here:
//                   https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

//                   However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
//                   you don't find a specific author or title. Every search is limited by search terms.
//                 */}
