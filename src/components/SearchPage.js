import React, { Component } from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

//import * as BooksAPI from '../BooksAPI'
import Book from './Book'
import CloseSearch from './CloseSearch'

export default class SearchPage extends Component {
  static propTypes = {
    book: PropTypes.array.isRequired
  }
	constructor(props) {
    	super(props);
      
      	this.state = {
  			query: '',
      		books: []
   		 }  
		this.handleChange = this.handleChange.bind(this)
 	 }	
 
  handleChange = (event) => {
	this.updateQuery(event.target.value)
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }
  
  render() {
    let showingBooks
    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
	  showingBooks = this.props.books.filter((book) => match.test(book.title))
    } else {
      showingBooks = this.props.books
    }

	showingBooks.sort(sortBy, 'title')

	return(
      <React.Fragment>
        <div className="search-books-bar">
      	  <CloseSearch />
      	  <div className="search-books-input-wrapper">
       	     <input 
      			type="text" 
      			placeholder="Search by title or author"
      			onChange={this.handleChange}
				/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
     	   {showingBooks.map((book => (
             <li key={book.id}>
			   <Book
                  book={book}
                  updateBookshelf={this.props.updateBookshelf}
			  		/>
		 	</li>
	      ))
		)}
    </ol>
  </div>
</React.Fragment>
        )
    }
}