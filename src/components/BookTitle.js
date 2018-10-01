import React, { Component } from 'react'

//Essentially the same as BookCover
export default class BookAuthor extends Component {
	render(){
      return(
        this.props.book.title 
          ? 
          <p key={this.props.book.id}
            className="book-title">
             {this.props.book.title}
          </p>
        
         : ''
      )
    }
}