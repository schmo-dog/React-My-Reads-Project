import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookShelfChanger extends Component {
  render () {
    return (<div className='book-shelf-changer'>
      <select value={this.state.value} onChange={this.setCategory}>
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
            </div>)
  }

}

BookShelfChanger.propTypes = {
  setCategory: PropTypes.func
}

export default BookShelfChanger
