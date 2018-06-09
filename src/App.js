import React from 'react';
import './App.css';
import Search from './search';
import BookShelf from './bookShelf';
import * as BooksAPI from './BooksAPI';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    showSearchPage: false,
    bookSelection: 'none',
    books: []
  };

  setCategory = (id, category) => {
    BooksAPI.update({ id }, category).then(
      BooksAPI.getAll().then(books => {
        this.setState(() => ({ books }));
      })
    );
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({ books }));
    });
  }

  render() {
    let currentlyReading = this.state.books.filter(book => book.shelf === 'currentlyReading');
    let wantToRead = this.state.books.filter(book => book.shelf === 'wantToRead');
    let read = this.state.books.filter(book => book.shelf === 'read');

    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>Book Shelf</h1>
              </div>
              <div className="list-books-content">
                {this.state.books.length > 0 && (
                  <div>
                    <BookShelf
                      setCategory={this.setCategory}
                      shelfTitle="Currently Reading"
                      bookList={currentlyReading}
                    />
                    <BookShelf
                      setCategory={this.setCategory}
                      shelfTitle="Want to Read"
                      bookList={wantToRead}
                    />
                    <BookShelf setCategory={this.setCategory} shelfTitle="Read" bookList={read} />
                  </div>
                )}
              </div>
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>
          )}
        />

        <Route
          path="/search"
          exact
          render={() => <Search setCategory={this.setCategory} booksInShelf={this.state.books} />}
        />
      </div>
    );
  }
}

export default BooksApp;
