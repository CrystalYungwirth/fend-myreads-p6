import React, { Component } from 'react'

export default class BookShelfChanger extends Component {
  handleChange = (prevShelf, event) => {
  	this.updateBookshelf(this.props.books, event.target.value)
  }
  
  render() {
    return(
      <form className="book-shelf-changer">
        <select
          onChange={this.handleChange.bind(this)}
          value={this.props.book.shelf}
          >
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </form>
    )
  }
}
