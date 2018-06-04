import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookShelfChanger extends Component {
  // state = {
  //   currentSelection: 'none'
  // };

  updateCategory = event => {
    // console.log('update category function called');
    //console.log(event.target.value);
    this.props.setCategory(this.props.bookId, event.target.value);
    // this.setState({ currentSelection: event.target.value });
    // console.log(this.props.bookId, event.target.value);
  };
  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.props.currentShelf} onChange={this.updateCategory}>
          <option value="none" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

BookShelfChanger.propTypes = {
  setCategory: PropTypes.func,
  bookId: PropTypes.string,
  currentShelf: PropTypes.string
};

BookShelfChanger.defaultProps = {
  currentShelf: 'none'
};

export default BookShelfChanger;
