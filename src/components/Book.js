import React, { Component } from 'react'
import Img from 'react-image'

export default class Book extends Component {
  render() {
    return(
      <React.Fragment>
        <section className="book-top">
          <Img
          src= {[
            'https://res.cloudinary.com/dacjqekio/image/upload/v1537735449/imagenotavailable.png'
          ]}
          style= {{
            width: 130,
            height: 190,
          }}
          />
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
        <span className="book-title">The Hobbit</span>
        <br />
        <span className="book-authors">J.R.R. Tolkien</span>
      </React.Fragment>
    )
  }
}
