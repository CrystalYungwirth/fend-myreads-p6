import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'
import BookCover from './BookCover'

export default class Book extends Component {
  render() {   
    return(
      <React.Fragment>
        <section className="book-top">
		  <BookCover book={this.props.book}/>
          <BookShelfChanger
            book={this.props.book}
            updateBookshelf={this.props.updateBookshelf}
          />

        </section>
        <p className="book-title">{this.props.book.title}</p>
        {this.props.book.authors.map((author) => (
          <p key={author}
            className="book-authors">
            {author}
          </p>
        ))}
      </React.Fragment>
    )
  }
}

Book.propTypes = {
	book: PropTypes.object.isRequired,
  	updateBookshelf: PropTypes.func.isRequired
  	}
