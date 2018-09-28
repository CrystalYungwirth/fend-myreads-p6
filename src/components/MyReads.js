import React, { Component } from 'react'
import Bookshelf from './Bookshelf'
import OpenSearch from './OpenSearch'

export default class MyReads extends Component {
  render() {
    return(
      <React.Fragment>
          <section className="list-books-title">
            <h1>MyReads</h1>
          </section>

            <Bookshelf
              books={this.props.books}
              shelves={this.props.shelves}
              updateBookshelf={this.props.updateBookshelf}
              />
          <OpenSearch />
        </React.Fragment>
    )
  }
}
