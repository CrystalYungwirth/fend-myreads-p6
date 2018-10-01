import React, { Component } from "react";
import PropTypes from "prop-types";
import BookShelfChanger from "./BookShelfChanger";
import BookCover from "./BookCover";

export default class Book extends Component {
  render() {
    return (
      <section className="book-top">
        <BookCover book={this.props.book} />
        <BookShelfChanger
          book={this.props.book}
          updateBookshelf={this.props.updateBookshelf}
        />
      </section>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateBookshelf: PropTypes.func.isRequired
};
