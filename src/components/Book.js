import React, { Component } from 'react'
// import Img from 'react-image'
// TODO: I couldn't get the main image to work with the Img from react-image
// but I think it would be a better way to do it vs. ternary operator

export default class Book extends Component {
  render() {
    return(
      <React.Fragment>
        <section className="book-top">
          <div className="book-cover"
            style={{
               height: 190,
               width: 130,
            backgroundImage:
            `url(${this.props.book.imageLinks !== undefined ? this.props.book.imageLinks.thumbnail: ''})`
          }}></div>
          <form className="book-shelf-changer">
            <select>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </form>
        </section>
        <span className="book-title">{this.props.book.title}</span>
        <br />
        <span className="book-authors">{this.props.book.author}</span>
      </React.Fragment>
    )
  }
}
