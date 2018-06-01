import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import Search from './search';
import BookShelf from './bookShelf';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  };

  // The overall state of each book in the categories will live here- being passed the fucntions to update the category in the search and in the book components

  setCategory = () => {
    console.log('hello world');
  };

  setSearch = () => {
    this.setState(() => ({ showSearchPage: false }));
  };

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <Search setCategory={this.setCategory} setSearch={this.setSearch} />
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>Book Shelf</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf setCategory={this.setCategory}shelfTitle="Currently Reading" />
                <BookShelf setCategory={this.setCategory} shelfTitle="Want to Read" />
                <BookShelf setCategory={this.setCategory} shelfTitle="Read" />
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default BooksApp;
