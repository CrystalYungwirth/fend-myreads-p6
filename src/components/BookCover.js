import React, { Component } from 'react'

export default class BookCover extends Component {
	render(){
      return(
        this.props.book.imageLinks 
          ? <div className="book-cover" 
      		     style={{ 
                   backgroundImage: `url(${this.props.book.imageLinks.thumbnail 
      				 				 ? this.props.book.imageLinks.thumbnail 
      				 				 : ''})` 
                    }}>
            </div> 
         : ''
      )
    }
}
