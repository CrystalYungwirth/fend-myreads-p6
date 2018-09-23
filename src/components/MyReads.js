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
                <React.Fragment className="bookshelf-books">
                  <ol className="books-grid">
                    <li>
                      <Book books={this.props.books} />
                    </li>
                  </ol>
                </React.Fragment>
              </aside>
              <aside className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <React.Fragment className="bookshelf-books">
                  <ol className="books-grid">
                    <li>
                      <Book books={this.props.books} />
                    </li>
                  </ol>
                </React.Fragment>
              </aside>
              <aside className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <React.Fragment className="bookshelf-books">
                  <ol className="books-grid">
                    <li>
                      <Book books={this.props.books} />
                    </li>
                  </ol>
                </React.Fragment>
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
