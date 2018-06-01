import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import Search from './search';
import BookShelf from './bookShelf';
import * as BooksAPI from './BooksAPI';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    value: 'none',
    books: [],
    isDoneLoading: false
  };

  setCategory = event => {
    console.log('hello world');
    // this.setState(() => ({ value: event.target.value }));
  };

  setSearch = () => {
    this.setState(() => ({ showSearchPage: false }));
  };

  componentDidMount() {
    BooksAPI.getAll()
      .then(books => {
        // console.log(books);
        this.setState(() => ({ books, isDoneLoading: true }));
      })
      .then(() => console.log(this.state));
  }

  render() {
    console.log(this.state);
    let currentlyReading = this.state.books.filter(book => book.shelf === 'currentlyReading');
    let wantToRead = this.state.books.filter(book => book.shelf === 'wantToRead');
    let read = this.state.books.filter(book => book.shelf === 'read');

    return <div className="app">
        {this.state.showSearchPage ? <Search setCategory={this.setCategory} setSearch={this.setSearch} /> : <div className="list-books">
            <div className="list-books-title">
              <h1>Book Shelf</h1>
            </div>
            <div className="list-books-content">
              {this.state.books.length > 0 && <div>
                  {/* {console.log('currently reading',currentlyReading)} */}
                  <BookShelf setCategory={this.setCategory} shelfTitle="Currently Reading" bookList={currentlyReading} />
                  {/* <BookShelf
                  setCategory={this.setCategory}
                  shelfTitle="Want to Read"
                  booksList={this.currentlyReading}
                />
                <BookShelf
                  setCategory={this.setCategory}
                  shelfTitle="Read"
                  booksList={this.currentlyReading}
                /> */}
                </div>}
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>}
      </div>;
  }
}

export default BooksApp;
