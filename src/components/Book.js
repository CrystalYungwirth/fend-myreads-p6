import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'
import Img from 'react-image'
// TODO: I couldn't get the main image to work with the Img from react-image
// but I think it would be a better way to do it vs. ternary operator

export default class Book extends Component {
  render() {   
    return(
      <React.Fragment>
        <section className="book-top">
		<Img src={[this.props.book.imageLinks.thumbnail,
      				'https://res.cloudinary.com/dacjqekio/image/upload/v1537735449/imagenotavailable.png']}
  			 container={children => {
                return (
                  <div class="book-cover">
                    {children}
                  </div>
                )
              }}
            />

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
	book: PropTypes.array.isRequired,
  	updateBookshelf: PropTypes.func.isRequired
  	}
