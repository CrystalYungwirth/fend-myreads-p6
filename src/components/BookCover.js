import React, { Component } from 'react'

export default class BookCover extends Component {
	render(){
      return(
        this.props.book.imageLinks 
          ? <img className="book-cover"
			    src={this.props.book.imageLinks.thumbnail}
                alt='book cover'
				/>
         : <img className="book-cover"
			    src='https://res.cloudinary.com/dacjqekio/image/upload/c_scale,w_130/v1537735449/imagenotavailable.png' 
                alt='no cover'
				/>
      )
    }
}
