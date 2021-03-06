import React, { Component } from 'react'
import PropTypes from 'prop-types'

import BookTop from './BookTop'
import BookAuthor from './BookAuthor'
import BookTitle from './BookTitle'

export default class Book extends Component {
  render() {   
    return(
      <React.Fragment>
        <BookTop
          book={this.props.book}
  		  updateBookshelf={this.props.updateBookshelf}
          />
        <BookTitle book={this.props.book} /> 
        <BookAuthor book={this.props.book} /> 
      </React.Fragment>
    )
  }
}

Book.propTypes = {
	book: PropTypes.object.isRequired,
  	updateBookshelf: PropTypes.func.isRequired
}
