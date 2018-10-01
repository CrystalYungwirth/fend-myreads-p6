import React, { Component } from 'react'

//I think this could be a stateless functional component. I'm really struggling with that syntax and using it
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
