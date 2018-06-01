import React from 'react'
import PropTypes from 'prop-types'
import BookShelfChanger from './bookShelfChanger'

const Book = props => {
  const { bkgImage, title, authors } = props
  const divStyle = {
    width: 128,
    height: 193,
    backgroundImage: 'url(' + bkgImage + ')'
  }

  return (
    <div className='book'>
      <div className='book-top'>
        <div className='book-cover' style={divStyle} />
        <BookShelfChanger />
      </div>
      <div className='book-title'>
        {title}
      </div>
      <div className='book-authors'>
        {authors}
      </div>
    </div>
  )
}

Book.propTypes = {
  bkgImage: PropTypes.string,
  title: PropTypes.string,
  authors: PropTypes.string
}

// Oar.defaultProps = {
//   linkVar: ''
// }

export default Book
