import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import Book from './book';
import { Link } from 'react-router-dom';

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
  };

  handleSearch = query => {
    BooksAPI.search(query).then(books => {
      this.setState(() => ({ results: books }));
    });
  };

  getExistingShelf = book => {
    const searchBookId = book.id;
    const matchingShelfBook = this.props.booksInShelf.find(book => book.id === searchBookId);

    return matchingShelfBook !== undefined ? matchingShelfBook.shelf : 'none';
  };

  render() {
    const { query } = this.state;
    const { setCategory } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
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
                      currentShelf={this.getExistingShelf(book)}
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
