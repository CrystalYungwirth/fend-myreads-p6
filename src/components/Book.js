import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger'
// import Img from 'react-image'
// TODO: I couldn't get the main image to work with the Img from react-image
// but I think it would be a better way to do it vs. ternary operator

export default class Book extends Component {
  render() {
    return(
      <React.Fragment>
        <section className="book-top">
          <div className="book-cover"
            style={{
               height: 190,
               width: 130,
            backgroundImage:
              `url(${this.props.book.imageLinks !== undefined ?
              this.props.book.imageLinks.thumbnail :
              'https://res.cloudinary.com/dacjqekio/image/upload/v1537735449/imagenotavailable.png'})`
              }}>
          </div>

          <BookShelfChanger
            book={this.props.book}
            updateBookshelf={this.props.updateBookshelf}
          />

        </section>
        <span className="book-title">{this.props.book.title}</span>
        <br />
        <span className="book-authors">{this.props.book.author}</span>
      </React.Fragment>
    )
  }
}
