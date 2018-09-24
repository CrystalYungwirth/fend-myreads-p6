import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'
import { Link } from 'react-router-dom'

class SearchPage extends Component {
  state = {
    query: '',
    SearchResults: []
  }

  updateQuery = (query) => {
    this.setState({
      query: query
    })
    this.updateSearchResults(query);
  }

  updateSearchResults = (query) => {
    if (query) {
      BooksAPI.search(query).then((SearchResults) => {
        if (SearchResults.error) {
          this.setState({ SearchResults: [] });
        } else {
          this.setState({ SearchResults });
        }
      })
    } else {
      this.setState({ SearchResults: [] });
    }
  }
//need to install npm install --save escape-string-regexp sort-by
  render(){
    console.log(this.props.SearchResults)
    return(
  <div className="search-books">
    <div className="search-books-bar">
      <Link
        to="/"
        className="close-search">Close</Link>
      <div className="search-books-input-wrapper">
        {/*
          NOTES: The search from BooksAPI is limited to a particular set of search terms.
          You can find these search terms here:
          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
          you don't find a specific author or title. Every search is limited by search terms.
        */}
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
          this.state.SearchResults.map(SearchResults => {
            let shelf = 'none'

            //I think the componentDidUpdate might work here, try an if <> book[.id]
            // try doing && books.shelf so that it would still add it to the bookshelf if not both match
            //why do all of mine show up as currently reading instead of the current shelf? should be synced through code
            this.props.books.map(book => (
              book.id === SearchResults.id ?
              shelf = book.shelf :
              ''
            ))
          return (
            <li key={SearchResults.id}>
              <Book
                book={SearchResults}
                updateBookshelf={this.props.updateBookshelf}
                currentShelf={shelf}
                />
            </li>
          )}
        )
      }

      </ol>
    </div>
  </div>
)
}
}
export default SearchPage
