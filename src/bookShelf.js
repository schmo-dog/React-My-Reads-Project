import React from 'react';
import PropTypes from 'prop-types';
import Book from './book';

const BookShelf = props => {
  const { shelfTitle, title, authors } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelfTitle}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <li>
            <Book bkgImage="http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api" />
          </li>
        </ol>
      </div>
    </div>
  );
};

BookShelf.propTypes = {
  shelfTitle: PropTypes.string
};

// Oar.defaultProps = {
//   linkVar: ''
// }

export default BookShelf;
