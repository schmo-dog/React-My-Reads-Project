import React from 'react'
import PropTypes from 'prop-types'
import Book from './book'

const BookShelf = props => {
  const { shelfTitle, setCategory, bookList } = props

  return <div className='bookshelf'>
           <h2 className='bookshelf-title'>{shelfTitle}</h2>
           <div className='bookshelf-books'>
             {bookList ?
                <ol className='books-grid'>
                  {bookList.map(book => <li key={book.id}>
                  <Book
                    setCategory={setCategory}
                    bkgImage={book.imageLinks.thumbnail}
                    title={book.title}
                    authors={book.authors}
                    bookId={book.id}
                    currentShelf={book.shelf} />
                </li>)}
                </ol> :
                <span>Loading...</span>}
           </div>
         </div>
}

BookShelf.propTypes = {
  shelfTitle: PropTypes.string,
  setCategory: PropTypes.func,
  bookList: PropTypes.array.isRequired
}

export default BookShelf
