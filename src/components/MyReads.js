import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Bookshelf from './Bookshelf'
export default class MyReads extends Component {
  render() {
    return(
      <React.Fragment>
          <section className="list-books-title">
            <h1>MyReads</h1>
          </section>
          <article className="list-books-content">
            <Bookshelf
              books={this.props.books}
              updateBookshelf={this.props.updateBookshelf}
            />
          </article>
          <nav className="open-search">
            <Link
              to='/search'>Add a book</Link>
          </nav>
        </React.Fragment>
    )
  }
}
