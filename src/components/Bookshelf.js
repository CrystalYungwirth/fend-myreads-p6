// TODO: Separate bookshelf into dynamic component, having a hard time getting the books to sync up when I try
import React, { Component } from 'react'
import Book from './Book'

export default class Bookshelf extends Component {
  render() {
    return(
      <React.Fragment>
        <aside className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {
                this.props.books
                  .filter(book => book.shelf === 'currentlyReading')
                  .map(book => (
                    <li className="book" key={book.id}>
                      <Book
                        book={book}
                        updateBookshelf={this.props.updateBookshelf}
                      />
                    </li>
                  ))
              }
            </ol>
          </div>
        </aside>
        <aside className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <aside className="bookshelf-books">
            <ol className="books-grid">
              {
                this.props.books
                  .filter(book => book.shelf === 'wantToRead')
                  .map(book => (
                    <li key={book.id}>
                      <Book
                        book={book}
                        updateBookshelf={this.props.updateBookshelf}
                      />
                    </li>
                  ))
              }
            </ol>
          </aside>
        </aside>
        <aside className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <aside className="bookshelf-books">
            <ol className="books-grid">
              {
                this.props.books
                  .filter(book => book.shelf === 'read')
                  .map(book => (
                    <li key={book.id}>
                      <Book
                        book={book}
                        updateBookshelf={this.props.updateBookshelf}
                      />
                    </li>
                  ))
              }
            </ol>
          </aside>
        </aside>
      </React.Fragment>
    )
  }
}
