// FIXME: not filtering correctly
import React, { Component } from 'react'
import Book from './Book'

export default class BookshelfBooks extends Component {
  render() {
    return(
      <React.Fragment>
              {this.props.books
                .filter(book => this.props.books.shelf === this.props.shelves.shelf)
                .map(book => (
                  <li key={book.id}>
                    <Book
                      book={book}
                      updateBookshelf={this.props.updateBookshelf}
                    />
                  </li>
                ))
            }

      </React.Fragment>
    )
  }
}
