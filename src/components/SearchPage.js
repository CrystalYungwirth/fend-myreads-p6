import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'
import CloseSearch from './CloseSearch'

export default class SearchPage extends Component {
  state = {
    query: '',
    searchResults: []
  }

  updateQuery = (query) => {
        this.setState(() => ({
            query: query
        }))
        if (query === '') {
            this.setState(() => ({
                searchResults: []
            }))
        }
        else this.updateSearchResults(query)
      }

    updateSearchResults(query) {
      BooksAPI.search(query)
          .then((searchResults) => {
              this.props.books.forEach(book => {
                  searchResults.forEach(searchResult => {
                       (book.id === searchResult.id) ?
                       searchResult.shelf = book.shelf
                       :
                       searchResult.shelf = 'none'
                     })
                   })
              this.setState(() => ({
                searchResults
              })
            )
          }).catch (event => {
              this.setState(() => ({
                  searchResults: []
              }))
          })
  }

  render(){
    return(
      <React.Fragment>
        <div className="search-books-bar">
          <CloseSearch />
          <div className="search-books-input-wrapper">
            <input type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) =>
                this.updateQuery(event.target.value)}
              />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              this.state.searchResults.map(searchResults => {
                this.props.books.map(book => (
                  book.id === searchResults.id ?
                  this.props.books.shelf = book.shelf :
                  this.props.books.shelf = "none"
                ))

              return (
                <li key={searchResults.id}>
                  <Book
                    book={searchResults}
                    updateBookshelf={this.props.updateBookshelf}
                    />
                </li>
              )}
            )
          }
          </ol>
        </div>
      </React.Fragment>
)
}
}
