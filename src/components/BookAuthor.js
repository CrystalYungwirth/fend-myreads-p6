import React, { Component } from 'react'

//Essentially the same as BookCover
export default class BookAuthor extends Component {
	render(){
      return(
        this.props.book.authors 
        ? this.props.book.authors.map((author) => (
          <p key={author}
            className="book-authors">
            {author}
          </p>
        ))
       : ''
      )
    }
}