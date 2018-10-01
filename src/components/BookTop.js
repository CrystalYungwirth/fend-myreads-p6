import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'
import BookCover from './BookCover'
import BookAuthor from './BookAuthor'
import BookTitle from './BookTitle'

export default class Book extends Component {
  render() {   
    return(
      <React.Fragment>
        <section className="book-top">
      	 <BookCover 
            book={this.props.book}/>
          <BookShelfChanger
            book={this.props.book}
            updateBookshelf={this.props.updateBookshelf}
          />
        </section>

        <BookTitle 
            book={this.props.book}/> 
        <BookAuthor 
            book={this.props.book}/> 
      </React.Fragment>
    )
  }
}

Book.propTypes = {
	book: PropTypes.object.isRequired,
  	updateBookshelf: PropTypes.func.isRequired
  	}
