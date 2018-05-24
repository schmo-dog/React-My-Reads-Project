import React from 'react'

const BookShelfChanger = () => {
  return (
    <div className='book-shelf-changer'>
      <select>
        <option value='none' disabled>
          Move to...
        </option>
        <option value='currentlyReading'>
          Currently Reading
        </option>
        <option value='wantToRead'>
          Want to Read
        </option>
        <option value='read'>
          Read
        </option>
        <option value='none'>
          None
        </option>
      </select>
    </div>
  )
}

// Book.propTypes = {
//   bkgImage: PropTypes.string,
//   linkVar: PropTypes.string
// }

// Oar.defaultProps = {
//   linkVar: ''
// }

export default BookShelfChanger
