// TODO: Separate bookshelf into dynamic component, having a hard time getting the books to sync up when I try
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

export default class MyReads extends Component {
  render() {
    return(
      <React.Fragment>
          <section className="list-books-title">
            <h1>MyReads</h1>
          </section>
          <article className="list-books-content">
            <React.Fragment>
              <aside className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <React.Fragment>
                  <ol className="books-grid">
                    {
                      this.props.books
                        .filter(book => book.shelf === 'currentlyReading')
                        .map(book => (
                          <li key={book.id}>
                            <Book
                              book={book}
                            />
                          </li>
                        ))
                    }
                  </ol>
                </React.Fragment>
              </aside>
              <aside className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <React.Fragment>
                  <ol className="books-grid">
                    {
                      this.props.books
                        .filter(book => book.shelf === 'wantToRead')
                        .map(book => (
                          <li key={book.id}>
                            <Book
                              book={book}
                            />
                          </li>
                        ))
                    }
                  </ol>
                </React.Fragment>
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
                            />
                          </li>
                        ))
                    }
                  </ol>
                </aside>
              </aside>
            </React.Fragment>
          </article>
          <nav className="open-search">
            <Link
              to='/search'>Add a book</Link>
          </nav>
        </React.Fragment>
    )
  }
}
