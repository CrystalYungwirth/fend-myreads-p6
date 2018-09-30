//import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

//import * as BooksAPI from '../BooksAPI'
//import Book from './Book'
//import CloseSearch from './CloseSearch'

//export default class SearchPage extends Component {
 // static propTypes = {
//    books: PropTypes.array.isRequired
//  }

//	constructor(props) {
//    	super(props);
      
 //     	this.state = {
//  			query: ''
 //  		 }  

		this.handleChange = this.handleChange.bind(this)
 	 }	

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
          this.setState({ books });
        })
    }

 // updateQuery = (query) => {
 //   this.setState({ query: query.trim() });
//    this.searchBooks(query);
 // }

//  searchBooks = (query) => {
//  	BooksAPI.search(query).then((books) => {
//      this.setState({ books });
//    })
//  }	

  handleChange = (event) => {
	this.updateQuery(event.target.value)
  }


  render() {
    let showingBooks
    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i')
	  showingBooks = this.props.books.filter((book) => match.test(book.title))
    } else {
      showingBooks = this.props.books
      
      //maybe I should have changed to this.props.BooksAPI.filter jkdlajfklasjfksda
    }

	showingBooks.sort(sortBy, 'title')

	return(
 //     <React.Fragment>
//        <div className="search-books-bar">
 //     	  <CloseSearch />
  //    	  <div className="search-books-input-wrapper">
//       	     <input 
//      			type="text" 
 //     			placeholder="Search by title or author"
 //     			onChange={this.handleChange}
//				value={this.state.query}
//				/>
 //         </div>
//        </div>
   //     <div className="search-books-results">
          <ol className="books-grid">
     	   {showingBooks.map((showingBook => {
             let shelf = 'none'
            
            this.props.books.map(book => (
                            book.id === showingBook.id ? shelf = book.shelf : ''
                        )}

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