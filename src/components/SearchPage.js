import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'
import CloseSearch from './CloseSearch'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'

export default class SearchPage extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }
  
  constructor(props) {
  	super(props);
    
    this.state = {
        query: '',
        bookOptions: []
    }
	this.handleChange = this.handleChange.bind(this) //TODO: find notes from other attempts because I know I read somewhere this was preferred over the arrow function, but I can't seem to locate which ReactJS doc that was in again
  }  
  
    updateQuery = (query) => {
      this.setState({ query: query.trim() });
      this.searchBooks(query)
    }

//The searchBooks method is based off of the Maeva walkthrough, I just spent some time trying to refactor and build upon it. 
//I couldn't figure out how to get the match test from the course to work with this project, it was only populating my Bookshelf books. 
    searchBooks = (query) => {
      query 
        ? BooksAPI.search(query)
          .then((bookOptions) => { 
            bookOptions.error || bookOptions === 'undefined'
            ? this.setState({ bookOptions: [] })
               : this.setState({ bookOptions })
      		})
            : this.setState({ bookOptions: [] })
      }

	
  handleChange = (event) => {
	this.updateQuery(event.target.value)
	
  } 

    render() {
    
      return (
            <React.Fragment>
                <div className="search-books-bar">
                    <CloseSearch />
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text" 
                            placeholder="Search by title or author"
                            value={ this.state.query } 
                            onChange={this.handleChange} 
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                    {this.state.bookOptions.map((bookOption) => {
                 //TODO: find out more about where to put sort bookOption.sort(sortBy, 'title') 
                        bookOption.shelf = 'none'

                        this.props.books.map(book => (
                            book.id === bookOption.id ? bookOption.shelf = book.shelf : ''
                      		
                        ))
                        return (
                            <li key={bookOption.id}>

                                <Book 
                                    book={bookOption}
									updateBookshelf={this.props.updateBookshelf}
                                />
                            </li>
                        )}
                    )}
                    </ol>
                </div>
            </React.Fragment>
        )
    }
}